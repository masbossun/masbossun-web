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
  import { Title, Subtitle, Display, Body } from "../../components/typography";
  import { BlogPostCard } from "../../components/card/index.js";
</script>

<style>
  .content :global(h1),
  .content :global(h2),
  .content :global(h3),
  .content :global(h4),
  .content :global(h5),
  .content :global(h6) {
    @apply col-span-8;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
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
    padding: 0.125rem 0.25rem;
  }

  .content :global(img) {
    @apply col-span-8;
  }

  .content :global(p) {
    @apply col-span-8;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 32px;
    margin-bottom: 16px;
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
      font-size: 20px;
      line-height: 40px;
      margin-bottom: 24px;
    }

    .content :global(code) {
      font-size: 1rem;
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

<section class="container mx-auto max-w-screen-lg p-6 lg:p-0">
  <Display style="white-space: break-spaces;">{post.title}</Display>
</section>

<Subtitle class="p-6">
  {`${post.created_by} - ${printDate(post.created)}`}
</Subtitle>

<section class="container mx-auto max-w-screen-lg">
  <article
    class="grid grid-cols-8 gap-0 lg:gap-5 content font-sans text-base
    lg:text-xl text-relaxed px-6 lg:px-0">
    {@html post.html}
  </article>

  <Title size={36} class="text-center p-6">***</Title>
  <div class="bg-accent mx-6 p-6">
    <Body size={16} class="text-primary" style="margin-bottom: 0;">
      If you find any misleading information, or grammar issue, feel free to
      make corrections here
    </Body>
  </div>

  <div class="h-16" />

  <Subtitle weight="regular" class="px-6">you may want to read.</Subtitle>
  <div class="h-4" />
  <div class="flex flex-no-wrap overflow-x-auto">
    <ul class="flex flex-no-wrap px-6">
      <BlogPostCard class="mr-2" style="width: calc(100vw - 48px)" />
      <BlogPostCard class="mr-2" style="width: calc(100vw - 48px)" />
      <BlogPostCard class="mr-2" style="width: calc(100vw - 48px)" />
      <BlogPostCard style="width: calc(100vw - 48px)" />
    </ul>
  </div>

  <div class="h-20" />

</section>
