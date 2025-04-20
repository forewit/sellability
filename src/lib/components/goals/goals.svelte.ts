import { getContext, setContext } from 'svelte';


function createGoals() {
    let evaluatingProducts: string[] = $state([]);
    let monthlyProfit = $state(0);
    let weeklyLabor = $state(0);

    return {
        get monthlyProfit() { return monthlyProfit },
        set monthlyProfit(value: number) { monthlyProfit = value },
        get weeklyLabor() { return weeklyLabor },
        set weeklyLabor(value: number) { weeklyLabor = value },
        get evaluatingProducts() { return evaluatingProducts },
        set evaluatingProducts(value: string[]) { evaluatingProducts = value }

    }
}

const GOALS_KEY = Symbol('goals')

export const setGoalsContext = () => {
    const newGoals = createGoals();
    return setContext(GOALS_KEY, newGoals)
}

export const getGoalsContext = (): ReturnType<typeof setGoalsContext> => {
    return getContext(GOALS_KEY)
}