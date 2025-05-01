// Fixed subscribers array and subscription functions
let loadSubscribers: { key: string, listener: (value: any, error?: string) => void }[] = [];
export const subscribeToLoad = (key: string, listener: (value: any, error?: string) => void) => {
    loadSubscribers.push({ key, listener });
    return () => {
        // Fixed filter logic: remove ONLY where both key AND listener match
        loadSubscribers = loadSubscribers.filter(sub => !(sub.key === key && sub.listener === listener));
    };
};

let saveSubscribers: { key: string, listener: (value: any, error?: string) => void }[] = [];
export const subscribeToSave = (key: string, listener: (value: any, error?: string) => void) => {
    saveSubscribers.push({ key, listener });
    return () => {
        // Fixed filter logic: remove ONLY where both key AND listener match
        saveSubscribers = saveSubscribers.filter(sub => !(sub.key === key && sub.listener === listener));
    };
};

const saveTimers: Record<string, NodeJS.Timeout> = {};
const DEBOUNCE_DELAY = 500;

// Helper function to safely parse JSON from localStorage
export function getFromStorage<T>(key: string, fallback: T): T {
    if (typeof window === 'undefined') return fallback;

    try {
        const storedValue = localStorage.getItem(key);
        if (!storedValue) throw new Error("No value found in localStorage");
        const parsedValue = JSON.parse(storedValue);

        if (!parsedValue) throw new Error("Parsed value is null or undefined");

        // Only notify subscribers for this specific key
        loadSubscribers.forEach(sub => {
            if (sub.key === key)
                sub.listener(parsedValue);
        });
        return parsedValue;

    } catch (error) {
        console.error(`Error loading ${key} from localStorage:`, error);
        loadSubscribers.forEach(sub => {
            if (sub.key === key)
                sub.listener(fallback, `Error loading ${key}: ${error}`);
        });
        return fallback;
    }
}

// Helper function to safely store JSON to localStorage with debouncing
export function saveToStorage(key: string, value: any): void {
    if (typeof window === 'undefined') return;

    // Clear any existing timer for this key
    if (saveTimers[key]) {
        clearTimeout(saveTimers[key]);
        delete saveTimers[key]; // Clean up the reference
    }

    // Set a new timer to save after the delay
    saveTimers[key] = setTimeout(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));

            // Only notify subscribers for this specific key
            saveSubscribers.forEach(sub => {
                if (sub.key === key) {
                    sub.listener(value);
                }
            });

            // Clean up the timer reference
            delete saveTimers[key];
        } catch (error) {
            console.error(`Error saving ${key} to localStorage:`, error);
            saveSubscribers.forEach(sub => {
                if (sub.key === key) {
                    sub.listener(value, `Error saving ${key}: ${error}`);
                }
            });

            // Still clean up the timer reference on error
            delete saveTimers[key];
        }
    }, DEBOUNCE_DELAY);
}