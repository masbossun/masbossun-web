<script context="module" lang="ts">
  export function preload() {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return posts;
      });
  }
</script>

<script lang="ts">
  export let posts: {
    slug: string;
    title: string;
    formattedDate: string;
    author: string;
    short: string;
  }[];
</script>

<svelte:head>
  <title>Blog - masbossun</title>
</svelte:head>

<section>
  <div class="header">
    <h1>
      ryan usually wrote<br /> something here, <br /> blog, article, etc,
      <br /> you name it
    </h1>
  </div>
  <div class="gap-160" />
  {#each posts as post}
    <div class="post-item">
      <a rel="prefetch" href="blog/{post.slug}">
        <h2>
          {post.title}
        </h2>
      </a>
      <div class="gap-8" />
      <span class="post-date label">{post.formattedDate} - {post.author}</span>
      <div class="gap-24" />
      <p class="body-18">{post.short}</p>
      <div class="gap-24" />
      <a rel="prefetch" href="blog/{post.slug}">
        <div class="button-container">
          <span class="subtitle-bold button-content">read more</span>
        </div>
      </a>
    </div>
    <div class="post-divider" />
  {/each}
  <!-- <a href="." class="title-20">older posts</a> -->
</section>

<style>
  section {
    padding: 160px 0;
  }
  .header {
    padding: 0 20px;
  }
  .post-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 64px 16px;
  }
  .post-date {
    opacity: 0.5;
  }
  .button-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 15px;
    background-color: #232323;
  }
  .button-content {
    color: #f4f4f4;
  }
  .post-divider {
    height: 2px;
    background-color: #f8f5f2;
  }
  a {
    text-decoration: none;
  }
</style>
