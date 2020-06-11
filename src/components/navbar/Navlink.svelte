<script>
  export let segment;
  export let link = "#";
  export let text;
  export let hasShadow = false;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function onClick() {
    dispatch("click");
  }
</script>

<style>
  .shadow-button {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.16),
      -5px -5px 10px rgba(225, 225, 225, 0.41);
  }
</style>

<a
  rel={segment === 'blog' ? 'prefetch' : undefined}
  aria-current="page"
  on:click={onClick}
  href={link}
  class="cursor-pointer px-4">
  <div class="bg-white py-2 px-4 {hasShadow && 'shadow-button'}">
    <span class="font-sans font-medium text-black text-base">{text}</span>
  </div>
</a>
