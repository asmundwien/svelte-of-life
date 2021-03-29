<script>
  import { grid } from "./grid";

  let intervalId;
  let fast = false;

  function start() {
    intervalId = intervalId
      ? intervalId
      : setInterval(handler, fast ? 100 : 400);
  }

  const stop = () => (intervalId = clearInterval(intervalId));
  const handler = () => grid.evolve();
  const startAndStop = () => (intervalId ? stop() : start());

  function clear() {
    stop();
    grid.clear();
  }

  function setSpeed() {
    fast = !fast;
    if (intervalId) {
      stop();
      start();
    }
  }
</script>

<div class="box">
  <h2>Transport</h2>
  <button on:click={clear} class="reset"><i class="fa fa-undo-alt" /></button>
  <button on:click={startAndStop} class={intervalId ? "stop" : "start"}>
    <i class="fa {intervalId ? 'fa-stop' : 'fa-play'}" />
  </button>
  <button on:click={setSpeed} class={fast && "darkblue"}>
    <i class="fa fa-fast-forward" />
  </button>
</div>

<style>
  h2 {
    margin: 0 0 1rem;
  }

  .box {
    border-top-color: #ccdaf0;
  }

  button {
    background-color: #ccdaf0;
  }

  .start {
    background-color: #009a7d;
  }

  .stop {
    background-color: var(--red);
  }

  .darkblue {
    background-color: var(--darkblue);
  }
</style>
