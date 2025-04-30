import { getContext, setContext } from 'svelte';

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

export const exampleInventory: Product[] = [
    {
        id: "wooden-block-set-001",
        url: "",
        name: "Classic Wooden Block Set",
        description: "A set of 50 smooth, sanded wooden blocks in assorted shapes and colors.",
        expenses: [
            { name: "Wood (cypress)", value: 15.0 },
            { name: "Non-toxic paint", value: 8.0 },
            { name: "Packaging", value: 2.5 },
            { name: "Labor", value: 12.0 }
        ],
        time: [
            { name: "Cutting & sanding", value: 3.0, rating: 2 },
            { name: "Painting", value: 1.5, rating: 3 },
            { name: "Assembly & packaging", value: 1.0, rating: 1 }
        ],
        price: 49.99,
    },
    {
        id: "wooden-train-set-002",
        url: "",
        name: "Hand-crafted Wooden Train Set",
        description: "Locomotive and three carriages on a curved track, all carved from solid oak.",
        expenses: [
            { name: "Wood (oak)", value: 20.0 },
            { name: "Non-toxic varnish", value: 5.0 },
            { name: "Magnetic couplers", value: 3.0 },
            { name: "Labor", value: 18.0 }
        ],
        time: [
            { name: "Carving & shaping", value: 4.0, rating: 2 },
            { name: "Sanding & varnishing", value: 2.0, rating: 1 },
            { name: "Final assembly", value: 1.0, rating: 2 }
        ],
        price: 89.99,
    },
    {
        id: "wooden-puzzle-003",
        url: "",
        name: "Animal Shape Puzzle",
        description: "A 12-piece wooden jigsaw puzzle featuring farm animals, perfect for toddlers.",
        expenses: [
            { name: "Wood (maple)", value: 10.0 },
            { name: "Non-toxic paint", value: 6.0 },
            { name: "Labor", value: 10.0 }
        ],
        time: [
            { name: "Laser cutting", value: 1.5, rating: 1 },
            { name: "Painting details", value: 1.0, rating: 3 },
            { name: "Finishing", value: 0.5, rating: 1 }
        ],
        price: 34.99,
    },
    {
        id: "wooden-dollhouse-004",
        url: "",
        name: "Miniature Wooden Dollhouse",
        description: "Two-story dollhouse with removable roof and furniture, expertly crafted from birch.",
        expenses: [
            { name: "Wood (birch)", value: 25.0 },
            { name: "Acrylic paint", value: 7.0 },
            { name: "Mini-furnishings", value: 15.0 },
            { name: "Labor", value: 30.0 }
        ],
        time: [
            { name: "Structure build", value: 5.0, rating: 1 },
            { name: "Painting & detailing", value: 3.0, rating: 2 },
            { name: "Furniture assembly", value: 2.0, rating: 2 }
        ],
        price: 179.99,
    },
    {
        id: "rocking-horse-005",
        url: "",
        name: "Mini Rocking Horse",
        description: "Classic rocking horse with hand-carved mane and tail, perfect for nurseries.",
        expenses: [
            { name: "Wood (pine)", value: 18.0 },
            { name: "Faux leather", value: 5.0 },
            { name: "Labor", value: 20.0 }
        ],
        time: [
            { name: "Carving & assembly", value: 4.5, rating: 2 },
            { name: "Upholstery", value: 1.0, rating: 1 },
            { name: "Finishing touches", value: 0.5, rating: 2 }
        ],
        price: 129.99,
    }
];

export const exampleScenario: Record<string, { quantity: number }> = {
    "wooden-block-set-001": { quantity: 12 },
    "wooden-train-set-002": { quantity: 5 },
    "wooden-puzzle-003": { quantity: 20 },
    "wooden-dollhouse-004": { quantity: 2 },
    "rocking-horse-005": { quantity: 3 }
};

// Local storage keys
const STORAGE_KEYS = {
    PRODUCTS: 'craftify-products',
    PROFIT_GOALS: 'craftify-profit-goals',
    LABOR_GOALS: 'craftify-labor-goals'
};

// Helper function to safely parse JSON from localStorage
function getFromStorage<T>(key: string, fallback: T): T {
    if (typeof window === 'undefined') return fallback;

    try {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : fallback;
    } catch (error) {
        console.error(`Error loading ${key} from localStorage:`, error);
        return fallback;
    }
}

// Helper function to safely store JSON to localStorage
function saveToStorage(key: string, value: any): void {
    if (typeof window === 'undefined') return;

    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Error saving ${key} to localStorage:`, error);
    }
}

function createApp() {
    let products: Product[] = $state(getFromStorage(STORAGE_KEYS.PRODUCTS, []));
    let profitGoals = $state(getFromStorage(STORAGE_KEYS.PROFIT_GOALS, [0, 0])); // [target, min]
    let timeGoals = $state(getFromStorage(STORAGE_KEYS.LABOR_GOALS, [0, 0])); // [target, max]

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

    function rateProfitability(rate: number) {
        const timeMin = timeGoals[0];
        const timeMax = timeGoals[1];
        const profitMax = profitGoals[0];
        const profitMin = profitGoals[1];

        const minRate = profitMin / timeMax;
        const midRate = ((profitMax / timeMax) + (profitMin / timeMin)) / 2;
        const targetRate = profitMax / timeMin;

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
        const index = products.findIndex(p => p.id === id);
        if (index !== -1) {
            products.splice(index, 1);
        }
    }



    let selectedProductId = $state("")
    let selectedProduct = $derived(products.find(p => p.id === selectedProductId))

    // Set up effects to sync state with localStorage whenever it changes
    $effect(() => {
        saveToStorage(STORAGE_KEYS.PRODUCTS, products);
    });

    $effect(() => {
        saveToStorage(STORAGE_KEYS.PROFIT_GOALS, profitGoals);
    });

    $effect(() => {
        saveToStorage(STORAGE_KEYS.LABOR_GOALS, timeGoals);
    });


    return {
        // read only state
        get products() { return products },
        get selectedProduct() { return selectedProduct },
        get productData() { return productData },

        // helper functions
        newProduct,
        deleteProduct,

        // editable state
        get selectedProductId() { return selectedProductId },
        set selectedProductId(value: string) { selectedProductId = value },
        get profitGoals() { return profitGoals },
        set profitGoals(value: number[]) { profitGoals = value },
        get timeGoals() { return timeGoals },
        set timeGoals(value: number[]) { timeGoals = value },
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