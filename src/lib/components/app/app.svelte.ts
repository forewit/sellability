import { getContext, setContext } from 'svelte';

export type Product = {
    id: string;
    url: string;
    name?: string;
    description?: string;
    expenses: { name: string; value: number }[];
    time: { name: string; value: number; rating: number }[];
    price: number;
    profitability: number;
}

export type ProductData = {
    id: string;
    expenses: number;
    time: number;
    profit: number;
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
        profitability: 3
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
        profitability: 2
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
        profitability: 1
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
        profitability: 3
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
        profitability: 2
    }
];

export const exampleScenario: Record<string, { quantity: number }> = {
    "wooden-block-set-001": { quantity: 12 },
    "wooden-train-set-002": { quantity: 5 },
    "wooden-puzzle-003": { quantity: 20 },
    "wooden-dollhouse-004": { quantity: 2 },
    "rocking-horse-005": { quantity: 3 }
};

function createApp() {
    let products: Product[] = $state(structuredClone(exampleInventory));

    let productData: Record<string, ProductData> = $derived(
        products.reduce((acc, p) => {
            const expenses = p.expenses.reduce((total, expense) => total + expense.value, 0);
            const time = p.time.reduce((total, time) => total + time.value, 0);

            acc[p.id] = {
                id: p.id,
                expenses,
                profit: p.price - expenses,
                time,
            };
            return acc;
        }, {} as Record<string, ProductData>)
    );

    const newProduct = () => {
        const id = crypto.randomUUID().slice(0, 8)
        products.push({ id: id, url: '', expenses: [], time: [], price: 0, profitability: 0 })
        return id;
    }

    const deleteProduct = (id: string) => {
        const index = products.findIndex(p => p.id === id);
        if (index !== -1) {
            products.splice(index, 1);
        }
    }

    const MAX_WEEKLY_HOURS = 80;
    let monthlyProfitGoal = $state([2000, 500]); // [target, minimum]
    let weeklyLaborGoals = $state([30, 40]); // [target, maximum]

    let selectedProductId = $state("")
    let selectedProduct = $derived(products.find(p => p.id === selectedProductId))

    let hoveringProdcutId = $state("")
    let hoveringProduct = $derived(products.find(p => p.id === selectedProductId))

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
        get hoveringProductId() { return hoveringProdcutId },
        set hoveringProductId(value: string) { hoveringProdcutId = value },
        get monthlyProfitGoal() { return monthlyProfitGoal },
        set monthlyProfitGoal(value: number[]) { monthlyProfitGoal = value },
        get weeklyLaborGoals() { return weeklyLaborGoals },
        set weeklyLaborGoals(value: number[]) { weeklyLaborGoals = value },
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