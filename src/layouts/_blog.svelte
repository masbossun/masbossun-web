<script context="module">
  import { p, img, blockquote } from "../components/markdown";

  export { p, img, blockquote };
</script>

<script>
  import { formatDate } from "../helper";

  export let title;
  export let author;
  export let date;
  export let thumbnail;
  export let thumbnailAlt;
  export let thumbnailAltHTML;
</script>

<svelte:head>
  <title>{title} - masbossun</title>
</svelte:head>

<section>
  <h1 class="header">
    {title}
  </h1>
  <div class="gap-160" />
  <div class="post-date">
    <span class="label">
      {formatDate(date)} - {author.toLowerCase()}
    </span>
  </div>
  <div class="gap-32" />
  <img src={thumbnail} alt={thumbnailAlt} />
  <div class="gap-16" />
  <div class="thumbnail-alt">
    <span class="label">
      {@html thumbnailAltHTML}
    </span>
  </div>
  <div class="post-body">
    <slot />
  </div>
  <div class="end-symbol">
    <h3>***</h3>
  </div>
  <div class="post-footer">
    <p class="body-16">
      If you find any misleading information or grammar issue, feel free to make
      corrections <a href="/">here</a>.
    </p>
  </div>
</section>

<style>
  section {
    padding: 160px 0;
  }
  img {
    width: 100%;
  }
  .header {
    padding: 0 16px;
    width: 320px;
  }
  .thumbnail-alt {
    display: flex;
    justify-content: center;
    text-align: center;
    opacity: 0.7;
  }
  .post-date {
    padding: 0 16px;
    opacity: 0.5;
  }
  .post-body {
    padding: 32px 24px;
  }
  .end-symbol {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 24px;
  }
  .post-footer {
    display: flex;
    flex-direction: column;
    padding: 24px 32px;
    background: #078080;
  }
  .post-footer > p {
    margin-bottom: 0px;
    color: #fffffe;
  }
</style>
