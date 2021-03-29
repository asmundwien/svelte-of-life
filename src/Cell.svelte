<script>
  import { grid } from "./grid";
  export let x;
  export let y;

  $: alive = $grid[y][x];

  let left = x * 2.8 + (x + 1) * 0.5 + 1 + "rem";
  let top = y * 3 + (y + 1) * 0.5 + 1 + "rem";
</script>

<button
  {alive}
  on:click={() => grid.setAlive(x, y, !alive)}
  style="left: {left}; top: {top}"
/>

<style lang="scss">
  button {
    position: absolute;
    background-color: var(--blue);

    &[alive="true"] {
      background-color: var(--darkred);

      &::after {
        position: absolute;
        content: "";
        top: -0.4rem;
        right: 0;
        bottom: 0.4rem;
        left: 0;
        border-radius: inherit;
        background-color: var(--red);
      }
    }
  }
</style>
