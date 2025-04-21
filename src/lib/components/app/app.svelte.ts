import { getContext, setContext } from 'svelte';

export type Product = {
    id: string;
    name?: string;
    description?: string;
    expenses: Array<{ name: string; value: number }>;
    laborTime: number;
    price: number;
    evaluating: boolean;
}

function createApp() {
    let products: Product[] = $state([
        {
            id: 'test',
            name: "Test Product",
            description: "Testing out functionality",
            expenses: [{ name: "Materials", value: 25 }, { name: "Shipping", value: 10 }],
            laborTime: 1.5,
            price: 49,
            evaluating: false,
        }
    ]);

    const newProduct = () => {
        const id = crypto.randomUUID().slice(0, 8)
        products.push({ id: id, expenses: [], laborTime: 0, price: 0, evaluating: false })
    }

    const deleteProduct = (id: string) => {
        const index = products.findIndex(p => p.id === id);
        if (index !== -1) {
            products.splice(index, 1);
        }
    }

    let monthlyProfit = $state(0);
    let weeklyLabor = $state(0);
    let evaluateMode = $state(false);
    let selectedProductId = $state("")
    let selectedProduct = $derived(products.find(p => p.id === selectedProductId))

    return {
        // read only state
        get products() { return products; },
        get selectedProduct() { return selectedProduct; },

        // helper functions
        newProduct,
        deleteProduct,

        // editable state
        get monthlyProfit() { return monthlyProfit },
        set monthlyProfit(value: number) { monthlyProfit = value },
        get weeklyLabor() { return weeklyLabor },
        set weeklyLabor(value: number) { weeklyLabor = value },
        get evaluateMode() { return evaluateMode; },
        set evaluateMode(value: boolean) { evaluateMode = value; },
        get selectedProductId() { return selectedProductId; },
        set selectedProductId(value: string) { selectedProductId = value; }

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