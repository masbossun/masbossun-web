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

  export let data;
  export let query;
  let screenWidth;
  let posts = data.posts;
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

  $: isMobile = screenWidth <= 640;
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
  <ul class="grid grid-cols-8 gap-10">
    {#each posts as post, index}
      <li
        on:mouseenter={() => onMouseEnter(index)}
        on:mouseleave={() => onMouseLeave(index)}
        class="negative-dark bg-accent col-span-8 md:col-span-4 cursor-pointer">
        <a href="blog/{post.slug}/">
          <div class="p-6 lg:p-10">
            <div class="h-1 w-12 bg-primary" />
            <div class="h-6" />
            {#if isMobile}
              <Caption class="text-primary">
                {post.created_by} - {printDate(post.created)}
              </Caption>
            {:else}
              <Subtitle weight="regular" class="text-primary">
                {post.created_by} - {printDate(post.created)}
              </Subtitle>
            {/if}
            <div class="h-2" />
            <div>
              {#if !isMobile && isHover && hoverIndex === index}
                <Body size={24} class=" text-primary max-line-5">
                  {post.html
                    .match(/<p(.*)>(.*)<\/p>/gi)[1]
                    .replace(/<[^>]*>/g, '')}
                </Body>
              {:else}
                <Title size={isMobile ? 24 : 36} class="text-primary">
                  {post.title}
                </Title>
              {/if}
            </div>
          </div>
          <div class="h-20" />
          <div class="p-6 lg:p-10">
            <Subtitle weight="bold" class="text-primary">read more</Subtitle>
          </div>
        </a>
      </li>
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
