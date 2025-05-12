import { getContext, setContext } from 'svelte';
import { getFirebaseContext } from '$lib/firebase/firebase.svelte';

export type Product = {
    id: string;
    url: string;
    name?: string;
    description?: string;
    expenses: { id:string, name: string; value: number }[];
    time: { id:string, name: string; value: number; rating: number }[];
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
}

export type Scenario = {
    id: string
    name: string
    quantities: Record<string, number>
    goals: Goals;
}

export type Goals = {
    time: { targetHours: number, maxHours: number };
    profit: { target: number, min: number };
    timespanDays: number;
}

function createID() {
    return crypto.randomUUID().slice(0, 8);
}

function createApp() {
    const firebase = getFirebaseContext();

    // saved state
    let products: Product[] = $state([]);
    let scenarios: Scenario[] = $state([]);
    let settings: UserSettings = $state({
        username: "",
    });

    // ephemeral state
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
            const hourlyRate = profit / (time / 60);

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
    function rateProfitability(profitPerHour: number) {
        if (isNaN(profitPerHour) || !isFinite(profitPerHour) || !selectedScenario) return 0;

        const minRate = selectedScenario.goals.profit.min / selectedScenario.goals.time.maxHours;
        const midRate = ((selectedScenario.goals.profit.target / selectedScenario.goals.time.maxHours) + (selectedScenario.goals.profit.min / selectedScenario.goals.time.targetHours)) / 2;
        const targetRate = selectedScenario.goals.profit.target / selectedScenario.goals.time.targetHours;

        if (profitPerHour < minRate) return 0;
        if (profitPerHour < midRate) return 1;
        if (profitPerHour < targetRate) return 2;
        return 3;
    }

    const newProduct = () => {
        const id = createID();
        products.push({ id: id, url: '', expenses: [], time: [], price: 0 })
        return id;
    }

    const deleteProduct = (id: string) => {
        if (selectedProductId == id) selectedProductId = "";
        products = products.filter(p => p.id !== id);
    }

   const newExpense = (productId: string, expense?: { name: string; value: number }) => {
        const id = createID();
        const expenseData = expense || { name: "", value: 0 };
        const product = products.find(p => p.id === productId);
        if (product) {
            product.expenses.push({ id, ...expenseData });
        }
        return id;
    }
    const deleteExpense = (productId: string, expenseId: string) => {
        const product = products.find(p => p.id === productId);
        if (product) {
            product.expenses = product.expenses.filter(e => e.id !== expenseId);
        }
    }
    const newTime = (productId: string, time?: { name: string; value: number; rating: number }) => {
        const id = createID();
        const timeData = time || { name: "", value: 0, rating: 0 };
        const product = products.find(p => p.id === productId);
        if (product) {
            product.time.push({ id, ...timeData });
        }
        return id;
    }

    const deleteTime = (productId: string, timeId: string) => {
        const product = products.find(p => p.id === productId);
        if (product) {
            product.time = product.time.filter(t => t.id !== timeId);
        }
    }

    const newScenario = () => {
        const id = createID();
        scenarios.push({ id, name: "", quantities: {}, goals: { time: { targetHours: 30, maxHours: 50 }, profit: { target: 1200, min: 800 }, timespanDays: 5 } });
        return id;
    }

    const deleteScenario = (id: string) => {
        if (selectedScenarioId == id) selectedScenarioId = "";
        scenarios = scenarios.filter(s => s.id !== id);
    }


     firebase.syncState(
        ()=>(JSON.parse(JSON.stringify({ scenarios, selectedScenarioId, products, settings }))),
        (v)=>{
            if (v.scenarios !== undefined) scenarios = v.scenarios;
            if (v.selectedScenarioId !== undefined) selectedScenarioId = v.selectedScenarioId;
            if (v.products !== undefined) products = v.products;
            if (v.settings !== undefined) settings = v.settings;

            // loop through products and add an id for each expense and time if it doesn't already have one:
            products.forEach(product => {
                product.expenses.forEach(expense => {
                    if (!expense.id) {
                        expense.id = createID();
                    }
                });
                product.time.forEach(time => {
                    if (!time.id) {
                        time.id = createID();
                    }
                });
            });
        },
        "users",
        firebase.USER_ID
    )


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
        newExpense,
        deleteExpense,
        newTime,
        deleteTime,

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