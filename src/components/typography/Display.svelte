<style>
  h1 {
    @apply font-display;
    font-style: normal;
    font-weight: 700;
    margin: 0;
    line-height: 52px;
    letter-spacing: -0.05em;
  }
</style>

<h1 {...$$props} class="{$$restProps.class || ''} text-5xl md:text-6xl">
  <slot />
</h1>
