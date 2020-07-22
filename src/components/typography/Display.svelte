<style>
  h1 {
    @apply font-display;
    font-style: normal;
    font-weight: bold;
    margin: 0;
    line-height: 115.7%;
    letter-spacing: -0.07em;
    font-size: 44px;
  }
</style>

<h1 {...$$props} class={$$restProps.class || ''}>
  <slot />
</h1>
