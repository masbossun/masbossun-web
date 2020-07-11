<style>
  h1 {
    @apply font-display;
    font-style: normal;
    font-weight: 700;
    margin: 0;
    line-height: 57px;
    letter-spacing: -0.04em;
  }
</style>

<h1 {...$$props} class="{$$restProps.class || ''} text-5xl md:text-6xl">
  <slot />
</h1>
