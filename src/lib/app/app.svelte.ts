import { getContext, setContext, untrack } from 'svelte';
import { saveToStorage, getFromStorage, } from '$lib/app/localstorage';
import { getFirebaseContext } from '$lib/firebase/firebase.svelte';
import type { DocumentData } from 'firebase/firestore';

export type Product = {
    id: string;
    url: string;
    name?: string;
    description?: string;
    expenses: { name: string; value: number }[];
    time: { name: string; value: number; rating: number }[];
    price: number;
}

export type ProductData = {
    id: string;
    expenses: number;
    time: number;
    profit: number;
    profitability: number;
    hourlyRate: number;
}

export type UserSettings = {
    username: string;
    color: string;
}

export type Scenario = {
    id: string
    name: string
    quantities: Record<string, number>
    goals: Goals;
}

export type Goals = {
    time: { target: number, max: number };
    profit: { target: number, min: number };
    timespanDays: number;
}

function createApp() {
    const firebase = getFirebaseContext();

    // saved state
    let products: Product[] = $state([]);
    let scenarios: Scenario[] = $state([]);
    let settings: UserSettings = $state({
        username: "",
        color: ""
    });

    // ephemeral state
    let lastUpdated = 0;
    let remoteUpdate = $state(true);
    let authRedirect = $state("")
    let selectedProductId = $state("")
    let selectedScenarioId = $state("")
    let selectedScenario = $derived(scenarios.find(s => s.id === selectedScenarioId));
    let selectedProduct = $derived(products.find(p => p.id === selectedProductId))
    let productData: Record<string, ProductData> = $derived(
        products.reduce((acc, p) => {
            const expenses = p.expenses.reduce((total, expense) => total + expense.value, 0);
            const time = p.time.reduce((total, time) => total + time.value, 0);
            const profit = p.price - expenses;
            const hourlyRate = profit / time;

            acc[p.id] = {
                id: p.id,
                expenses,
                profit,
                time,
                hourlyRate,
                profitability: rateProfitability(hourlyRate)
            };
            return acc;
        }, {} as Record<string, ProductData>)
    );


    // helper functions
    function rateProfitability(rate: number) {
        if (isNaN(rate) || !isFinite(rate) || !selectedScenario) return 0;

        const minRate = selectedScenario.goals.profit.min / selectedScenario.goals.time.max;
        const midRate = ((selectedScenario.goals.profit.target / selectedScenario.goals.time.max) + (selectedScenario.goals.profit.min / selectedScenario.goals.time.target)) / 2;
        const targetRate = selectedScenario.goals.profit.target / selectedScenario.goals.time.target;

        if (rate < minRate) return 0;
        if (rate < midRate) return 1;
        if (rate < targetRate) return 2;
        return 3;
    }

    const newProduct = () => {
        const id = crypto.randomUUID().slice(0, 8)
        products.push({ id: id, url: '', expenses: [], time: [], price: 0 })
        return id;
    }

    const deleteProduct = (id: string) => {
        if (selectedProductId == id) selectedProductId = "";
        const index = products.findIndex(p => p.id === id);
        if (index !== -1) products.splice(index, 1);
    }

    const newScenario = () => {
        const id = crypto.randomUUID().slice(0, 8);
        scenarios.push({ id, name:"", quantities: {}, goals: { time: { target: 30, max: 50 }, profit: { target: 1200, min: 800 }, timespanDays: 5 } });
        return id;
    }

    const deleteScenario = (id: string) => {
        if (selectedScenarioId == id) selectedScenarioId = "";
        const index = scenarios.findIndex(s => s.id === id);
        if (index !== -1) scenarios.splice(index, 1);
    }

    function publish() {
        firebase.publishDoc([], { lastUpdated, selectedScenarioId, settings, products, scenarios })
    }

    function loadAndValidate(data: DocumentData) {
        if (Object.hasOwn(data, "settings") && typeof data.settings === "object" && data.settings !== null) {
            settings = {
                username: typeof data.settings.username === "string" ? data.settings.username : "",
                color: typeof data.settings.color === "string" ? data.settings.color : ""
            };
        }
        if (Object.hasOwn(data, "scenarios") && Array.isArray(data.scenarios)) {
            // Validate each scenario: must have id, productData, and goals
            scenarios = data.scenarios.filter((s: any) =>
                typeof s.id === "string" &&
                typeof s.name === "string" &&
                typeof s.quantities === "object" && s.quantities !== null &&
                typeof s.goals === "object" && s.goals !== null &&
                typeof s.goals.time === "object" && s.goals.time !== null &&
                typeof s.goals.time.target === "number" &&
                typeof s.goals.time.max === "number" &&
                typeof s.goals.profit === "object" && s.goals.profit !== null &&
                typeof s.goals.profit.target === "number" &&
                typeof s.goals.profit.min === "number" &&
                typeof s.goals.timespanDays === "number"
            );
        }
        if (Object.hasOwn(data, "selectedScenarioId") && typeof data.selectedScenarioId === "string") {
            // Only set if the scenario exists in the loaded scenarios
            const scenarioExists = Array.isArray(data.scenarios) && data.scenarios.some((s: any) => s.id === data.selectedScenarioId);
            selectedScenarioId = scenarioExists ? data.selectedScenarioId : "";
        }
        if (Object.hasOwn(data, "products") && Array.isArray(data.products)) {
            // Basic validation: check each product has required fields
            products = data.products.filter((p: any) =>
                typeof p.id === "string" &&
                Array.isArray(p.expenses) &&
                Array.isArray(p.time) &&
                typeof p.price === "number"
            );
        }
    }

    firebase.subscribeToDoc([], (id, doc) => {
        if (firebase.isLoading || doc === null) return
        if (doc.lastUpdated === undefined || doc.lastUpdated < lastUpdated) {
            publish()
        } else if (doc.lastUpdated > lastUpdated) {
            remoteUpdate = true;
            loadAndValidate(doc)
        } else if (doc.lastUpdated === lastUpdated) {
            console.log("app in sync with user doc")
        }
    })

    // Set up effects to sync state with localStorage whenever it changes
    $effect(() => {
        JSON.stringify(products);
        JSON.stringify(scenarios);
        JSON.stringify(selectedScenarioId)
        JSON.stringify(settings);

        untrack(() => {
            if (remoteUpdate) {
                remoteUpdate = false
                return;
            }
            lastUpdated = Date.now();
            publish();
        })
    });

    return {
        // read only state
        get products() { return products },
        get scenarios() { return scenarios; },
        get selectedProduct() { return selectedProduct },
        get selectedScenario() { return selectedScenario },
        get productData() { return productData },

        // helper functions
        newProduct,
        deleteProduct,
        newScenario,
        deleteScenario,

        // editable state
        get authRedirect() { return authRedirect },
        set authRedirect(value) { authRedirect = value },
        get settings() { return settings },
        set settings(value: UserSettings) { settings = value },
        get selectedProductId() { return selectedProductId },
        set selectedProductId(value: string) { selectedProductId = value },
        get selectedScenarioId() { return selectedScenarioId },
        set selectedScenarioId(value: string) { selectedScenarioId = value }
    }
}

const APP_KEY = Symbol('App')

export const setAppContext = () => {
    const newApp = createApp();
    return setContext(APP_KEY, newApp)
}

export const getAppContext = (): ReturnType<typeof setAppContext> => {
    return getContext(APP_KEY)
}