<script>
  export let segment;
  export let link = "#";
  export let text;
  export let hasShadow = false;
  export let scrollTo = "";

  import { createEventDispatcher } from "svelte";
  import * as animateScroll from "svelte-scrollto";

  const dispatch = createEventDispatcher();

  function onClick() {
    dispatch("click");
  }

  function scrollToElement() {
    animateScroll.scrollTo({ element: scrollTo });
    onClick();
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
  on:click={scrollToElement}
  href={link}
  class="cursor-pointer px-4">
  <div class="bg-white py-2 px-4 {hasShadow && 'shadow-button'}">
    <span class="font-sans font-medium text-black text-base">{text}</span>
  </div>
</a>
