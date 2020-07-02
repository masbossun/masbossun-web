<script>
  export let weight = "regular";
  export let href = null;
  export let onclick = null;
</script>

<style>
  .regular {
    font-weight: normal;
  }
  .medium {
    font-weight: 500;
  }
  .bold {
    font-weight: bold;
  }

  h5 {
    font-family: DM Sans;
    font-style: normal;
    font-size: 16px;
    line-height: 21px;
    margin: 0;
  }
</style>

{#if href}
  <a {...$$restProps} {href}>
    <h5 class={weight}>
      <slot />
    </h5>
  </a>
{:else if onclick}
  <div
    {...$$restProps}
    class="{$$restProps.class || ''} cursor-pointer"
    on:click={onclick}>
    <h5 class={weight}>
      <slot />
    </h5>
  </div>
{:else}
  <h5 {...$$restProps} class="{$$restProps.class || ''} {weight}">
    <slot />
  </h5>
{/if}
