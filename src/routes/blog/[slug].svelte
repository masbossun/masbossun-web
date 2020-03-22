<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<style>
  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
    font-size: 0.75rem;
  }

  .content :global(h2) {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .content :global(h3) {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .content :global(p) {
    margin-bottom: 2.25rem;
  }

  .content :global(ul) {
    margin-bottom: 2.25rem;
  }

  .content :global(hr) {
    margin-bottom: 2.25rem;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<section class="content px-6 py-0 lg:px-64 lg:py-24">
  <h1 class="font-display font-bold text-3xl text-black mb-8">{post.title}</h1>
  <article class="font-sans text-lg lg:text-xl leading-relaxed">
    {@html post.html}
  </article>
</section>
