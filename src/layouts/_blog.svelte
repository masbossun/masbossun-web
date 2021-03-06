<script context="module">
  import { img, blockquote } from "../components/markdown";

  export { img, blockquote };
</script>

<script>
  import { stores } from "@sapper/app";
  import { formatDate } from "../helper";
  const { page } = stores();

  export let title;
  export let author;
  export let date;
  export let thumbnail;
  export let thumbnailAlt;
  export let thumbnailAltHTML;

  const url = $page.host + $page.path;
</script>

<svelte:head>
  <title>{title} - masbossun</title>
  <meta property="og:url" content={url} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content="Blog about {title}" />
  <meta property="og:image" content={thumbnail} />
</svelte:head>

<section>
  <h1 class="header">
    {title}
  </h1>
  <div class="space-v-20" />
  <div class="post-date">
    <span>
      {formatDate(date)} - {author.toLowerCase()}
    </span>
  </div>
  <div class="space-v-4" />
  <img src={thumbnail} alt={thumbnailAlt} />
  <div class="space-v-2" />
  <div class="thumbnail-alt">
    <span>
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
    <p>
      If you find any misleading information or grammar issue, feel free to make
      corrections <a href="/">here</a>.
    </p>
  </div>
</section>

<style>
  section {
    padding: 80px 0;
  }
  img {
    width: 100%;
  }
  .header {
    padding: 0 24px;
  }
  .thumbnail-alt {
    display: flex;
    justify-content: center;
    text-align: center;
    opacity: 0.7;
  }
  .post-date {
    padding: 0 24px;
    opacity: 0.5;
  }
  .post-body {
    padding: 24px 24px;
  }
  .end-symbol {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 16px;
  }
  .post-footer {
    display: flex;
    flex-direction: column;
    padding: 16px 24px;
    background: #f8f5f2;
  }
  .post-footer > p {
    margin-bottom: 0px;
    color: #232323;
  }

  @media (min-width: 576px) {
    section {
      padding: 160px 0;
    }
    .header {
      padding: 0 16px;
      width: 320px;
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
      background: #f8f5f2;
    }
  }
</style>
