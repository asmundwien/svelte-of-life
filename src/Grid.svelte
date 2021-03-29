<script>
  import { grid, gridWidth, gridHeight } from "./grid";
  import Cell from "./Cell.svelte";

  $: width = $gridWidth * 2.8 + ($gridWidth + 1) * 0.5 + "rem";
  $: height = $gridHeight * 3 + ($gridHeight + 1) * 0.5 + "rem";
</script>

<div class="box" style="width: {width}; height: {height}">
  {#each $grid as row, y}
    {#each row as _, x}
      <Cell {x} {y} />
    {/each}
    <br />
  {/each}
</div>

<style>
  div {
    display: block;
    border-top-color: var(--blue);
  }
</style>
