<script>
  export let classes = "";
  export let src = "";
  export let description = "";
  export let title = "";
  // export let url = "";
</script>

<style>

</style>

<div class="bg-black p-8 -mx-2 lg:ml-32 w-full {classes}">
  <div class="flex flex-col lg:flex-col-reverse lg:w-5/12 lg:py-8 lg:pl-16">
    <span class="font-sans font-bold text-6xl tracking-tighter text-white ">
      {title}
    </span>
    <p class="font-sans font-normal text-base leading-loose text-white">
      {@html description}
      <!-- <a href={url} class="cursor-pointer no-underline">
        <span class="font-serif italic text-white">{' — read more.'}</span>
      </a> -->
    </p>
  </div>
  <img
    {src}
    alt="featured-project-prototypes"
    class="my-12 px-8 block lg:absolute inset-y-0 right-0 lg:max-h-screen py-0
    lg:pb-64" />
</div>
