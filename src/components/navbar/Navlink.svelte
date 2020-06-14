<script>
  export let segment;
  export let link = "#";
  export let text;

  import { createEventDispatcher } from "svelte";

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
  class="cursor-pointer px-4">
  <div class="bg-white py-2 px-4">
    <span class="font-sans font-bold text-gray text-xl hover:text-black">
      {text}
    </span>
  </div>
</a>
