<script>
  export let size = 36;
</script>

<style>
  .title {
    @apply font-display;
    font-style: normal;
    margin: 0;
  }

  h2 {
    font-size: 36px;
    line-height: 36px;
  }

  h3 {
    font-size: 24px;
    line-height: 24px;
  }

  h4 {
    font-size: 16px;
    line-height: 16px;
  }
</style>

{#if size === 36}
  <h2 {...$$props} class="{$$props.class || ''} title">
    <slot />
  </h2>
{:else if size === 24}
  <h3 {...$$props} class="{$$props.class || ''} title">
    <slot />
  </h3>
{:else}
  <h4 {...$$props} class="{$$props.class || ''} title">
    <slot />
  </h4>
{/if}
