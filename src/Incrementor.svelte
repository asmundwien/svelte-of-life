<script>
  import { createEventDispatcher } from "svelte";
  export let name;
  export let size;

  const dispatch = createEventDispatcher();

  function handler(i) {
    dispatch("increment", {
      value: i + size,
    });
  }
</script>

<div class="box">
  <h2>{name}</h2>
  <button on:click={() => handler(-1)}>
    <i class="fa fa-minus" />
  </button>
  <h3>{size}</h3>
  <button on:click={() => handler(1)}>
    <i class="fa fa-plus" />
  </button>
</div>

<style lang="scss">
  div > * {
    display: inline;
  }

  .box {
    border-top-color: var(--tan);
  }

  h2 {
    display: block;
    margin: 0 0 1rem;
  }

  h3 {
    display: inline-block;
    width: 2rem;
    margin: 0;
    text-align: center;
  }
</style>
