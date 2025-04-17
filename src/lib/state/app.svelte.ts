import { getContext, setContext } from 'svelte';


function createApp() {
    return {
    }
}

const APP_KEY = Symbol('app')

export const setAppContext = () => {
    const newApp = createApp();
    return setContext(APP_KEY, newApp)
}

export const getAppContext = (): ReturnType<typeof setAppContext> => {
    return getContext(APP_KEY)
}