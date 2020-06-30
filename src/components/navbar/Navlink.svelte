<script>
  export let segment;
  export let link = "#";
  export let text;
  export let dark = false;
  export let mobile = false;

  import { createEventDispatcher } from "svelte";
  import { Subtitle, Title } from "../typography";

  const dispatch = createEventDispatcher();

  function onClick() {
    dispatch("click");
  }
</script>

<a
  rel={segment === 'blog' ? 'prefetch' : undefined}
  aria-current="page"
  on:click={onClick}
  href={link}
  class="{$$restProps.class} cursor-pointer {mobile ? '' : 'px-4 py-3'}">
  {#if mobile}
    <Title>{text}</Title>
  {:else}
    <Subtitle weight="medium" class={dark ? 'text-primary' : 'text-accent'}>
      {text}
    </Subtitle>
  {/if}
</a>
