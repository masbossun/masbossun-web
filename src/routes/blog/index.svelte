<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts, query };
      });
  }
</script>

<script>
  import { goto } from "@sapper/app";
  import { fade } from "svelte/transition";
  import { printDate } from "../../utils/helper.js";
  import { Hero } from "../../components/hero";
  import { Title, Subtitle, Body } from "../../components/typography";

  export let posts;
  export let query;
  let hoverIndex = -1;
  let isHover = false;

  const onMouseEnter = (index) => {
    isHover = true;
    hoverIndex = index;
  };

  const onMouseLeave = (index) => {
    isHover = false;
    hoverIndex = -1;
  };

  const goToCategory = async (path) => {
    await goto(path);
  };
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
  div :global(.max-line-5) {
    text-overflow: ellipsis;
    overflow: hidden;
    max-height: calc(48px * 5);
    line-height: 48px;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<Hero title="blog" subtitle="I wrote things that i might forget." />

<section class="container mx-auto max-w-screen-lg">
  <div class="h-20" />
  <ul class="grid grid-cols-8 gap-10">
    <div class="col-span-8 flex flex-row items-center">
      {#each ['all', 'programming', 'refactoring', 'coding-tools'] as category, index}
        {#if index === 0}
          <Subtitle
            class="{!query.category ? 'opacity-100' : 'opacity-60'}
            hover:opacity-100"
            weight={!query.category ? 'bold' : 'medium'}
            href="/blog/">
            all
          </Subtitle>
        {:else}
          <Subtitle weight="regular" class="px-2">/</Subtitle>
          <Subtitle
            class="{query.category === category ? 'opacity-100' : 'opacity-60'}
            hover:opacity-100"
            weight={query.category === category ? 'bold' : 'medium'}
            onclick={() => goToCategory(`/blog?category=${category}`)}>
            {category}
          </Subtitle>
        {/if}
      {/each}
    </div>
    {#each posts as post, index}
      <li
        on:mouseenter={() => onMouseEnter(index)}
        on:mouseleave={() => onMouseLeave(index)}
        class="negative-dark bg-accent col-span-8 md:col-span-4 cursor-pointer">
        <a href="blog/{post.slug}/">
          <div class="p-10">
            <div class="h-1 w-12 bg-primary" />
            <div class="h-5" />
            <Subtitle weight="regular" class="text-primary">
              {post.created_by} - {printDate(post.created)}
            </Subtitle>
            <div class="h-2" />
            <div style="height: 240px">
              {#if isHover && hoverIndex === index}
                <Body size={24} class=" text-primary max-line-5">
                  {post.html
                    .match(/<p(.*)>(.*)<\/p>/gi)[1]
                    .replace(/<[^>]*>/g, '')}
                </Body>
              {:else}
                <Title size={36} class="text-primary">{post.title}</Title>
              {/if}
            </div>
          </div>
          <div class="p-10">
            <Subtitle weight="bold" class="text-primary">read more</Subtitle>
          </div>
        </a>
      </li>
    {/each}
    <li class="col-span-8 md:col-span-2">
      <button class="negative-dark bg-accent px-10 py-5 rounded-none">
        <Title size={24} class="text-primary text-center">more posts</Title>
      </button>
    </li>
  </ul>
  <div class="h-56" />
</section>
