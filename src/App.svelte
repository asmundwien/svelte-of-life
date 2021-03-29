<script>
  import Grid from "./Grid.svelte";
  import Incrementor from "./Incrementor.svelte";
  import Transport from "./Transport.svelte";
  import { grid, gridHeight, gridWidth } from "./grid";
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
  integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
  crossorigin="anonymous"
/>
<Incrementor
  name="Width"
  size={$gridWidth}
  on:increment={(event) => grid.width(event.detail.value)}
/>
<Incrementor
  name="Height"
  size={$gridHeight}
  on:increment={(event) => grid.height(event.detail.value)}
/>
<Transport />
<Grid />

<style>
  :global(:root) {
    --blue: #abd0e2;
    --darkblue: #4ac2f9;
    --red: #d23901;
    --darkred: #821518;
    --gray: #f6f6f6;
    --tan: #eddbc3;
  }

  :global(.box) {
    background-color: var(--gray);
    display: inline-block;
    position: relative;
    margin: 1rem;
    padding: 1rem;
    border-radius: 1.5rem;
    border-top: 0.7rem solid;
  }

  :global(button) {
    display: inline-block;
    width: 2.8rem;
    height: 3rem;
    margin: 0 0.2rem;
    border-radius: 0.4rem;
    border: none;
    background-color: #ccdaf0;
  }
</style>
