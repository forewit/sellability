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

export type ProductData = {
    id: string;
    totalExpenses: number;
    totalTime: number;
    profit: number;
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

    let productData: ProductData[] = $derived(products.map(p => {
        const totalExpenses = p.expenses.reduce((total, expense) => total + expense.value, 0);
        return {
            id: p.id,
            totalExpenses: totalExpenses,
            totalTime: p.laborTime, 
            profit: p.price - totalExpenses
        }
    }))

    const newProduct = () => {
        const id = crypto.randomUUID().slice(0, 8)
        products.push({ id: id, expenses: [], laborTime: 0, price: 0, evaluating: false })
        return id;
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
        get productData() { return productData; },

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