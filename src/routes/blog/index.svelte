<script context="module" lang="ts">
  export async function preload(page) {
    const { host, path } = page;
    const result = await this.fetch("blog.json");
    const posts = await result.json();
    const url = host + path;

    const data = { post: posts, url };

    return data;
  }
</script>

<script lang="ts">
  export let post: {
    posts: {
      slug: string;
      title: string;
      formattedDate: string;
      author: string;
      short: string;
    }[];
  };
  export let url: string = "";
</script>

<svelte:head>
  <title>Blog - masbossun</title>
  <meta property="og:url" content={url} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="masbossun blog" />
  <meta property="og:description" content="ryan write something here" />
  <!-- <meta property="og:image" content={thumbnail} /> -->
</svelte:head>

<section>
  <div class="header">
    <h1>
      ryan usually wrote<br /> something here, <br /> blog, article, etc,
      <br /> you name it
    </h1>
  </div>
  <div class="space-v-20" />
  {#each post.posts as post}
    <div class="post-item">
      <a rel="prefetch" href="blog/{post.slug}">
        <h2>
          {post.title}
        </h2>
      </a>
      <span class="post-date">{post.formattedDate} - {post.author}</span>
      <div class="space-v-3" />
      <p class="body-18">{post.short}</p>
      <div class="space-v-3" />
      <a rel="prefetch" href="blog/{post.slug}">
        <div class="button-container">
          <span class="button-content">read more</span>
        </div>
      </a>
    </div>
    <div class="post-divider" />
  {/each}
</section>

<style>
  section {
    padding: 80px 0;
  }
  .header {
    padding: 0 24px;
  }
  .post-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 24px;
  }
  .post-date {
    opacity: 0.5;
  }
  .button-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px 16px;
    background-color: #f8f5f2;
  }
  .button-content {
    color: #232323;
  }
  .post-divider {
    height: 2px;
    background-color: #f8f5f2;
  }
  a {
    text-decoration: none;
  }

  @media (min-width: 576px) {
    section {
      padding: 160px 0;
    }
    .header {
      padding: 0 16px;
    }
    .post-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 64px 16px;
    }
  }
</style>
