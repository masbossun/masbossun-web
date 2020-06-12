<script context="module">
  export async function preload({ params, query }) {
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
  import { printDate } from "../../helper.js";
</script>

<style>
  .content :global(pre) {
    font-family: "DM Mono", monospace;
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 1em 1em;
    border-radius: 2px;
    overflow-x: auto;
    margin-bottom: 25px;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
    color: #555;
  }

  .content :global(code) {
    font-family: "DM Mono", monospace;
    font-size: 1rem;
    color: #555;
    background-color: #f0f0f0;
    padding: 0.1em 0.2em;
    border-radius: 2px;
    word-break: break-all;
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
    margin-bottom: 25px;
  }

  .content :global(ul) {
    margin-bottom: 25px;
  }

  .content :global(hr) {
    margin-bottom: 25px;
  }

  .content :global(a) {
    color: #555;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
  <meta property="og:title" content={post.title} />
  <meta property="og:type" content="article" />
  <meta
    property="og:url"
    content={`https://masbossun.web.id/blog/${post.slug}`} />
  <meta
    property="og:image"
    content={'https://masbossun.web.id/' + (post.html.match(/(?<=src=")(.*?)(?=")/) || [''])[0]} />
  <meta
    property="og:description"
    content={(post.html.match(/<p>[^<]*<\/p>/) || [''])[0].replace(/(<.?p>)/g, '') || ''} />
</svelte:head>

<section class="content px-6 py-0 lg:px-64 lg:py-8">
  <h1 class="font-display font-bold text-3xl text-black">{post.title}</h1>
  <div class="h-2" />
  <h4>{printDate(post.date)}</h4>
  <div class="h-16" />
  <article class="font-sans text-base lg:text-xl text-relaxed">
    {@html post.html}
  </article>

</section>
