<script>
  export let link = "#";
  export let text;
  export let dark = false;
  export let mobile = false;

  import { createEventDispatcher } from "svelte";
  import { Subtitle, Display } from "../typography";

  const dispatch = createEventDispatcher();

  function onClick() {
    dispatch("click");
  }
</script>

<a
  aria-current="page"
  on:click={onClick}
  href={link}
  class="{$$restProps.class || ''} cursor-pointer {mobile ? '' : 'px-4 py-3'}
  ">
  {#if mobile}
    <Display>{text}</Display>
  {:else}
    <Subtitle weight="medium" class={dark ? 'text-primary' : 'text-accent'}>
      {text}
    </Subtitle>
  {/if}
</a>
