import { getContext, setContext } from 'svelte';

export type Product = {
    id: string;
    url: string;
    name?: string;
    description?: string;
    expenses: { name: string; value: number }[];
    time: { name: string; value: number; liked: boolean }[];
    price: number;
    rank: number;
}

export type ProductData = {
    id: string;
    expenses: number;
    likedTime: number;
    unlikedTime: number;
    time: number;
    profit: number;
}

function createApp() {
    let products: Product[] = $state([
        {
            id: 'test',
            url: '',
            name: "Test Product",
            description: "Testing out functionality",
            expenses: [{ name: "Materials", value: 25 }, { name: "Shipping", value: 10 }],
            time: [{ name: "Labor", value: 1.5, liked: false }],
            price: 49,
            rank: 0,
        }
    ]);

    let productData: Record<string, ProductData> = $derived(
        products.reduce((acc, p) => {
            const expenses = p.expenses.reduce((total, expense) => total + expense.value, 0);
            const time = p.time.reduce((total, time) => total + time.value, 0);
            const likedTime = p.time.filter(t => t.liked).reduce((total, time) => total + time.value, 0);
            const unlikedTime = time - likedTime;

            acc[p.id] = {
                id: p.id,
                expenses,
                profit: p.price - expenses,
                time,
                likedTime,
                unlikedTime
            };
            return acc;
        }, {} as Record<string, ProductData>)
    );

    const newProduct = () => {
        const id = crypto.randomUUID().slice(0, 8)
        products.push({ id: id, url: '', expenses: [], time: [], price: 0, rank: 0 })
        return id;
    }

    const deleteProduct = (id: string) => {
        const index = products.findIndex(p => p.id === id);
        if (index !== -1) {
            products.splice(index, 1);
        }
    }

    const MAX_WEEKLY_HOURS = 80;
    let monthlyProfitGoal = $state([2000, 500]); // target, minimum
    let weeklyLaborGoals = $state([30, 40]); // target, maximum
    let prioritizeLikedTime = $state(false);

    let selectedProductId = $state("")
    let selectedProduct = $derived(products.find(p => p.id === selectedProductId))

    return {
        // read only state
        get products() { return products },
        get selectedProduct() { return selectedProduct },
        get productData() { return productData },
        MAX_WEEKLY_HOURS,

        // helper functions
        newProduct,
        deleteProduct,

        // editable state
        get selectedProductId() { return selectedProductId },
        set selectedProductId(value: string) { selectedProductId = value },
        get monthlyProfitGoal() { return monthlyProfitGoal },
        set monthlyProfitGoal(value: number[]) { monthlyProfitGoal = value },
        get weeklyLaborGoals() { return weeklyLaborGoals },
        set weeklyLaborGoals(value: number[]) { weeklyLaborGoals = value },
        get prioritizeLikedTime() { return prioritizeLikedTime },
        set prioritizeLikedTime(value: boolean) { prioritizeLikedTime = value },
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