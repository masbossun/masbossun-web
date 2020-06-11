<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data, url: res.url };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
  export let url;
</script>

<style>
  .content :global(pre) {
    font-family: "DM Mono", monospace;
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 1em 1em;
    border-radius: 2px;
    overflow-x: auto;
    margin-bottom: 2.25rem;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
    font-size: 1rem;
  }

  .content :global(code) {
    font-family: "DM Mono", monospace;
    font-size: 1rem;
    color: #555;
    background-color: #f0f0f0;
    padding: 0.2em 0.4em;
    border-radius: 2px;
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

  .content :global(a) {
    text-decoration-line: underline;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
  <meta property="og:title" content={post.title} />
  <meta property="og:type" content="article" />
  <meta
    property="og:url"
    content={url.substr(0, url.lastIndexOf('.')) || url} />
  <meta
    property="og:image"
    content={post.html.match(/(?<=src=")(.*?)(?=")/)[0] || ''} />
  <meta
    property="og:description"
    content={post.html
      .match(/<p>[^<]*<\/p>/)[0]
      .replace(/(<.?p>)/g, '') || ''} />
</svelte:head>

<section class="content px-6 py-0 lg:px-64 lg:py-24">
  <h1 class="font-display font-bold text-3xl text-black mb-8">{post.title}</h1>
  <article class="font-sans text-lg lg:text-xl leading-relaxed">
    {@html post.html}
  </article>
</section>
