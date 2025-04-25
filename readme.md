# sellability

calculator for calculating the sellability of products


# Prompt:

Help me write a svelte component to visualize data in a chart just like the state of js chart in the picture.

ok, so here's my situation. I've got time data that I want to visuallize as a diverging bar chart but be able to group it similar to the state of js visualization

Please write me a svelte component (using svelte 5 rune syntax and typescript) that is a simple diverging bar chart component that accepts data as a prop and visualizes it

the data is structured like this:
type Data = {value: number, sentiment: number, rating: number}[]

Rating and sentiment are both numbers between 0 and 3 and I should be able to group by sentiment or rating and the bars will re-arrange

you may use any libraries you think are appropriate IF you need it.

Here is some example code to start with:

<script lang="ts">
    // Props
    type Props = {
      data: { value: number; sentiment: number; rating: number }[];
      groupBy: 'sentiment' | 'rating';
    };

    let {
      data = [],
      groupBy = 'sentiment',
    }: Props = $props();

     // example variable declaration with Svelte 5 $state rune
    let count = $state(0)

    // example derived value with Svelte 5 $derived rune
    let doubled = $derived(count * 2);

    // example effect using the Svelte 5 $effect rune
    $effect(()=>{
        console.log("count: ", count, ". doubled: ", doubled)
    })
  </script>

  <!-- HTML here -->
  <div class="myClass">
  </div>
 

  <style>
    .myClass {
        /* Add styles here */
    }
  </style> 