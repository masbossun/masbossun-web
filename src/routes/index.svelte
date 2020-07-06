<script context="module">
  export function preload({ params, query }, session) {
    return this.fetch(`index.json`)
      .then((r) => r.json())
      .then((data) => {
        return { data };
      });
  }
</script>

<script>
  import { tweened } from "svelte/motion";
  import * as animateScroll from "svelte-scrollto";
  import Content from "../components/common/Content.svelte";
  import ProjectOverview from "../components/common/ProjectOverview.svelte";
  import Footer from "../components/footer/Footer.svelte";
  import { Display, Title, Body } from "../components/typography";
  import Subtitle from "../components/typography/Subtitle.svelte";

  export let data;

  const emptyStateOpacity = tweened(1, { delay: 500, duration: 500 });
  let screenWidth;
  let isPageReady = false;

  $: isMobile = screenWidth <= 640;
  $: if (screenWidth) {
    emptyStateOpacity.set(0).then(() => (isPageReady = true));
  }
</script>

<style>
  .horizontal-scroll-wrapper {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  .horizontal-scroll-wrapper > div {
    display: flex;
    flex-wrap: nowrap;
  }

  .horizontal-scroll-wrapper > div > div {
    flex: 0 0 auto;
    width: calc(100vw - 48px);
    margin: 0 8px;
  }
</style>

<svelte:window bind:outerWidth={screenWidth} />

<svelte:head>
  <title>{data.meta.title}</title>
</svelte:head>

{#if !isPageReady}
  <div class="fixed inset-0 bg-primary" style="opacity: {$emptyStateOpacity}" />
{/if}

<section class="container mx-auto max-w-screen-lg h-screen px-6 lg:px-0">
  <div>
    <div class="h-40" />
    <Display class="whitespace-pre-line">{data.headline}</Display>
  </div>
  <div class="flex items-center absolute -z-1" style="bottom: 48px">
    <Display class="whitespace-pre-line">-</Display>
    <div class="w-4" />
    <Subtitle weight="regular">keep scrolling</Subtitle>
  </div>
</section>

<section id="works" class="container mx-auto max-w-screen-lg px-6 lg:px-0">
  <a href="#works">
    <Title>my works</Title>
  </a>
  <div class="h-6" />
</section>

{#if isMobile}
  <div class="horizontal-scroll-wrapper">
    <div class="px-4">
      {#each data.projects as project, index}
        <div>
          <div
            class="flex items-center justify-center"
            style="background-color: {project.color}">
            <img
              class="object-contain p-5"
              src={project.thumbnail}
              alt={project.name + 'thumbnail'}
              style="height: 290px" />
          </div>
          <div class="h-3" />
          <Subtitle weight="medium">{project.name}</Subtitle>
          <div class="h-2" />
          <Body size={16}>{project.short_description}</Body>
        </div>
      {/each}
    </div>
  </div>
{/if}

<div class="h-20" />

<section id="about" class="container mx-auto max-w-screen-lg px-6 lg:px-0">
  <a href="#about">
    <Title>about me</Title>
  </a>
  <div class="h-6" />
  {#each data.about as item}
    <Body size={isMobile ? 16 : 24}>{item}</Body>
  {/each}
</section>

<div class="h-20" />
