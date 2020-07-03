<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((data) => {
        return { data, query };
      });
  }
</script>

<script>
  import { goto } from "@sapper/app";
  import { fade } from "svelte/transition";
  import { printDate } from "../../utils/helper.js";
  import { Hero } from "../../components/hero";
  import {
    Title,
    Subtitle,
    Body,
    Display,
    Caption,
  } from "../../components/typography";
  import { BlogPostCard } from "../../components/card";

  export let data;
  export let query;
  let screenWidth;
  let posts = data.posts;

  const goToCategory = async (path) => {
    await goto(path);
  };

  $: isMobile = screenWidth <= 640;
</script>

<style>
  .horizontal-scroll-wrapper {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  .horizontal-scroll-wrapper > :global(*) {
    flex: 0 0 auto;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<svelte:window bind:outerWidth={screenWidth} />

<section class="container mx-auto max-w-screen-lg p-6 lg:p-0">
  <Display style="white-space: break-spaces;">{data.headline}</Display>
</section>

<div class="h-6" />

<div class="horizontal-scroll-wrapper mx-6">
  {#each ['all', 'programming', 'refactoring', 'coding-tools', 'something', 'something'] as category, index}
    {#if index === 0}
      <Subtitle
        class="{!query.category ? 'opacity-100' : 'opacity-60'}
        hover:opacity-100"
        weight={!query.category ? 'bold' : 'medium'}
        href="/blog/">
        all
      </Subtitle>
    {:else}
      <Subtitle
        class="{query.category === category ? 'opacity-100' : 'opacity-60'}
        hover:opacity-100 ml-4"
        weight={query.category === category ? 'bold' : 'medium'}
        onclick={() => goToCategory(`/blog?category=${category}`)}>
        {category}
      </Subtitle>
    {/if}
  {/each}
</div>

<section class="container mx-auto max-w-screen-lg p-6 lg:p-0">
  <ul class="grid grid-cols-8 gap-6 lg:gap-10">
    {#each posts as post, index}
      <BlogPostCard
        href="blog/{post.slug}/"
        class="col-span-8 lg:col-span-4"
        subtitle="{post.created_by} - {printDate(post.created)}"
        title={post.title}
        description={post.html
          .match(/<p(.*)>(.*)<\/p>/gi)[1]
          .replace(/<[^>]*>/g, '')} />
    {/each}
    <li class="col-span-8 md:col-span-2">
      <button class="w-full flex negative-dark bg-accent p-6 rounded-none">
        <Title size={isMobile ? 16 : 24} class="text-primary text-center">
          see more posts
        </Title>
      </button>
    </li>
  </ul>
  <div class="h-20" />
</section>
