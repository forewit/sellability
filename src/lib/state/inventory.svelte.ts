import { getContext, setContext } from 'svelte';

export type Product = {
    id: string;
    name?: string;
    description?: string;
    expenses: Array<{ name: string; value: number }>;
    laborTime: number;
    price: number;
}

function createInventory() {
    let products: Product[] = $state([]);

    function newProduct() {
        const id = crypto.randomUUID().slice(0, 8)
        products.push({ id: id, expenses: [], laborTime:0, price:0 })
    }

    function deleteProduct(id: string) {
        const index = products.findIndex(p => p.id === id);
        if (index !== -1) {
            products.splice(index, 1);
        }
    }

    return {
        get products() { return products; },
        newProduct,
        deleteProduct,
    }
}

const INVENTORY_KEY = Symbol('Inventory')

export const setInventoryContext = () => {
    const newInventory = createInventory();
    return setContext(INVENTORY_KEY, newInventory)
}

export const getInventoryContext = (): ReturnType<typeof setInventoryContext> => {
    return getContext(INVENTORY_KEY)
}