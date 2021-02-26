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
  <title>Blog</title>
</svelte:head>

<section>
  <div class="header">
    <span class="display-desktop">
      ryan usually wrote <br /> something here, <br /> blog, article, etc,
      <br /> you name it
    </span>
  </div>
  <div class="gap-160" />
  {#each posts as post}
    <div class="post-item">
      <a href="blog/{post.slug}">
        <span class="display-desktop">{post.title}</span>
      </a>
      <div class="gap-20" />
      <span class="post-date subtitle-medium"
        >{post.formattedDate} - {post.author}</span
      >
      <div class="gap-32" />
      <span class="body-20">{post.short}...</span>
      <div class="gap-32" />
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
    padding: 20px;
  }
  .post-date {
    opacity: 0.5;
  }
  .button-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 15px;
    background-color: #1a1a1a;
  }
  .button-content {
    color: #f4f4f4;
  }
  .post-divider {
    margin: 40px 0;
    height: 1px;
    background-color: #1a1a1a;
    opacity: 0.2;
  }
  a {
    text-decoration: none;
  }
</style>
