<script>
  import { createEventDispatcher } from "svelte";
  import { Subtitle } from "../typography";

  export let animated = false;
  export let dark = false;

  const dispatch = createEventDispatcher();

  function onClick() {
    dispatch("click");
  }
</script>

<style>
  #logo-container {
    max-height: 52px;
  }
</style>

<a href="/" class="cursor-pointer {$$props.class || ''}" on:click={onClick}>
  {#if animated}
    <div id="logo-container" />
  {:else}
    <div class="{dark ? 'bg-primary' : 'bg-accent'} py-3 px-4">
      <Subtitle weight="bold" class={dark ? 'text-accent' : 'text-primary'}>
        masbossun
      </Subtitle>
    </div>
  {/if}
</a>
