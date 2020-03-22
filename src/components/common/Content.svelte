<script>
  import { createEventDispatcher } from "svelte";
  export let classes = "";
  export let id = "";

  export let clientHeight = 0;
</script>

<div {id} class="min-h-screen {classes}" bind:clientHeight>
  <slot />
</div>
