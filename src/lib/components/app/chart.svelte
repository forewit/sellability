<script lang="ts">
    import { scaleLinear, scaleBand } from 'd3-scale';
    import type { ScaleBand, ScaleLinear } from 'd3-scale';

    // Props
    export let data: { value: number; sentiment: number; rating: number }[] = [];
    export let groupBy: 'sentiment' | 'rating' = 'sentiment';
    export let width: number = 600;
    export let height: number = 300;
    export let margin: { top: number; right: number; bottom: number; left: number } = { top: 20, right: 20, bottom: 30, left: 40 };

    // Derived groups
    let groups: { key: number; total: number }[] = [];
    let xScale: ScaleLinear<number, number>;
    let yScale: ScaleBand<number>;

    // Recompute on data or groupBy change
    $: {
        // Aggregate sums by selected key
        const map = new Map<number, number>();
        data.forEach(({ value, sentiment, rating }) => {
            const key = groupBy === 'sentiment' ? sentiment : rating;
            map.set(key, (map.get(key) || 0) + value);
        });
        groups = Array.from(map.entries())
            .map(([key, total]) => ({ key, total }))
            .sort((a, b) => a.key - b.key);

        // Find biggest negative and positive sums around midpoint 1.5
        const keys = groups.map(g => g.key);
        const midpoint = (Math.min(...keys) + Math.max(...keys)) / 2;
        const neg = Math.max(0, ...groups.filter(g => g.key < midpoint).map(g => Math.abs(g.total)));
        const pos = Math.max(0, ...groups.filter(g => g.key >= midpoint).map(g => g.total));

        // Scales
        xScale = scaleLinear<number, number>()
            .domain([-neg, pos])
            .range([margin.left, width - margin.right]);

        yScale = scaleBand<number>()
            .domain(groups.map(g => g.key))
            .range([margin.top, height - margin.bottom])
            .padding(0.2);
    }
</script>

<svg {width} {height}>
    <!-- X axis -->
    <g transform="translate(0,{height - margin.bottom})">
        <!-- Zero line -->
        <line
            x1="{xScale(0)}"
            x2="{xScale(0)}"
            y1="0"
            y2="-{height - margin.top - margin.bottom}"
            stroke="#999"
            stroke-dasharray="4"
        />
    </g>

    <!-- Bars -->
    {#each groups as { key, total }}
        {#if yScale(key) !== undefined}
            <rect
                x="{total >= 0 ? xScale(0) : xScale(total)}"
                y="{yScale(key)}"
                width="{Math.abs(xScale(total) - xScale(0))}"
                height="{yScale.bandwidth()}"
                fill="{total >= 0 ? '#e6550d' : '#3182bd'}"
            />

            <!-- Label -->
            <text
                x="{xScale(total) + (total >= 0 ? 4 : -4)}"
                y="{yScale(key) + yScale.bandwidth() / 2}"
                dy=".35em"
                text-anchor="{total >= 0 ? 'start' : 'end'}"
                font-size="12"
                fill="#000"
            >
                {total}
            </text>
        {/if}
    {/each}

    <!-- Group labels -->
    {#each groups as { key }}
        {#if yScale(key) !== undefined}
            <text
                x="{margin.left - 6}"
                y="{yScale(key) + yScale.bandwidth() / 2}"
                dy=".35em"
                text-anchor="end"
                font-size="12"
                fill="#000"
            >
                {groupBy}: {key}
            </text>
        {/if}
    {/each}
</svg>

<style>
    svg {
        font-family: sans-serif;
    }
</style>
