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
  import { printDate } from "../../utils/helper.js";
  import { Hero } from "../../components/hero";
  import { Title, Subtitle } from "../../components/typography";
</script>

<style>
  .content :global(h1),
  .content :global(h2),
  .content :global(h3),
  .content :global(h4),
  .content :global(h5),
  .content :global(h6) {
    @apply col-span-8;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }

  .content :global(pre) {
    @apply col-span-8;
    font-family: "DM Mono", monospace;
    background-color: var(--color-dim-gray);
    padding: 12px 16px;
    overflow-x: auto;
    margin-bottom: 24px;
  }

  .content :global(pre) :global(code) {
    color: var(--color-white-smoke);
  }

  .content :global(code) {
    font-family: "DM Mono", monospace;
    color: var(--color-blood);
    font-size: 1rem;
    padding: 0.125rem 0.25rem;
  }

  .content :global(h2) {
    font-size: 1.25rem;
    font-weight: 700;
  }

  .content :global(h3) {
    font-size: 1rem;
    font-weight: 700;
  }

  .content :global(img) {
    @apply col-span-8;
  }

  .content :global(p) {
    @apply col-span-8;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 40px;
    margin-bottom: 24px;
  }

  .content :global(ul) {
    margin-bottom: 24px;
  }

  .content :global(hr) {
    margin-bottom: 24px;
  }

  .content :global(a) {
    text-decoration: underline;
    text-decoration-color: var(--color-accent);
    text-decoration-style: double;
  }

  .content :global(small) {
    display: flex;
    justify-content: center;
    padding: 12px 0;
  }

  .content :global(small) :global(a) {
    text-align: center;
  }

  @screen lg {
    .content :global(p) {
      @apply col-start-2;
      @apply col-end-8;
    }

    .content :global(pre) {
      @apply col-start-2;
      @apply col-end-8;
    }

    .content :global(h1),
    .content :global(h2),
    .content :global(h3),
    .content :global(h4),
    .content :global(h5),
    .content :global(h6) {
      @apply col-start-2;
      @apply col-end-8;
    }
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

<Hero
  title={post.title}
  subtitle={`${post.created_by} - ${printDate(post.created)}`} />
<section class="container mx-auto max-w-screen-lg">
  <div class="h-32" />
  <article
    class="grid grid-cols-8 gap-5 content font-sans text-base lg:text-xl
    text-relaxed">
    {@html post.html}
  </article>
  <div class="negative-dark bg-accent grid grid-cols-8 gap-10 py-32 my-32">
    <a href="blog/slug/" class="col-span-8 md:col-start-2 md:col-span-2">
      <div class="flex flex-row items-center">
        <Subtitle weight="bold" class="text-primary">prev</Subtitle>
        <div class="h-half w-12 bg-primary mx-3" />
      </div>
      <Title size={24} class="text-primary">previous blog</Title>
    </a>
    <a href="blog/slug/" class="col-span-8 md:col-end-8 md:col-span-2">
      <div class="flex flex-row items-center justify-end">
        <div class="h-half w-12 bg-primary mx-3" />
        <Subtitle weight="bold" class="text-primary text-right">next</Subtitle>
      </div>
      <Title size={24} class="text-primary text-right">next next blog</Title>
    </a>
  </div>
</section>
