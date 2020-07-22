<script>
  export let size = 24;
</script>

<style>
  p {
    @apply font-sans;
    font-style: normal;
    font-weight: normal;
    font-size: calc(var(--size) / 16 * 1rem);
    line-height: calc(var(--size) / 16 * 2rem);
    margin-bottom: calc(var(--size) / 16 * 2rem);
  }
</style>

<p
  style="--size:{size}; {$$restProps.style}"
  class={$$restProps.class || ''}
  {...$$restProps}>
  <slot />
</p>
