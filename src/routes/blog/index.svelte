<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;

  function printDate(text) {
    const date = new Date(text);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  }
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<section class="px-6 lg:px-64">
  <ul>
    {#each posts as post}
      <li class="py-8">
        <div class="flex">
          <a
            rel="prefetch"
            href="blog/{post.slug}"
            class="font-display font-bold text-3xl text-black">
            {post.title}
          </a>
        </div>
        <div class="my-2">
          <small class="bg-black font-sans font-bold text-base text-white p-1">
            {printDate(post.date)}
          </small>
        </div>
        <p
          class="font-sans font-normal text-lg lg:text-xl text-black
          leading-relaxed">
          {post.html.replace(/<[^>]*>/g, '').substr(0, 328) + '...'}
        </p>
      </li>
    {/each}
  </ul>
</section>
