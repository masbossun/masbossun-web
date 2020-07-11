<script>
  import { metatags } from "@sveltech/routify";
  import { tweened } from "svelte/motion";
  import * as animateScroll from "svelte-scrollto";
  import data from "../fixture";
  import Content from "../components/common/Content.svelte";
  import ProjectOverview from "../components/common/ProjectOverview.svelte";
  import Footer from "../components/footer/Footer.svelte";
  import { Display, Title, Body, Caption } from "../components/typography";
  import Subtitle from "../components/typography/Subtitle.svelte";
  import { Spacer, StripText } from "../components/common/index.js";
  import ProjectCard from "../components/card/ProjectCard.svelte";

  const heroOpacity = tweened(1);
  let scrollY;
  let screenWidth;
  let screenHeight;
  let currentProjectIndex = 0;

  $: isMobile = screenWidth <= 640;

  function onProjectScroll(e) {
    const currentIndex = Math.round(e.target.scrollLeft / (screenWidth - 48));
    currentProjectIndex = currentIndex;
  }

  // metatags.title = "My Routify app";
  // metatags.description = "Description coming soon...";
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

  :global([ref="horizontal-scroll-items"]) {
    flex: 0 0 auto;
    width: calc(100vw - 48px);
  }
</style>

<svelte:window
  bind:scrollY
  bind:outerWidth={screenWidth}
  bind:outerHeight={screenHeight} />

<svelte:head>
  <title>{data.meta.title}</title>
</svelte:head>

<section
  class="container mx-auto max-w-screen-lg h-screen px-6 lg:px-0"
  style="opacity: {$heroOpacity};">
  <Spacer height={160} />

  <Display class="whitespace-pre-line">{data.headline}</Display>

  <Spacer height={40} />

  <StripText>keep scrolling!</StripText>
</section>

<section id="works" class="container mx-auto max-w-screen-lg px-6 lg:px-0">
  <a href="#works">
    <Display>my works</Display>
  </a>
  <div class="h-8" />
  {#if isMobile}
    <div
      class="horizontal-scroll-wrapper hide-scrollbar -mx-6"
      on:scroll={onProjectScroll}>
      <div class="px-6">
        {#each data.projects as project}
          <ProjectCard
            ref="horizontal-scroll-items"
            imageSource={project.thumbnail}
            imageAlt={project.name + 'thumbnail'}
            cardBgColor={project.color} />
        {/each}
      </div>
    </div>
  {/if}
  <Spacer height={40} />
  <StripText>{data.projects[currentProjectIndex].name}</StripText>
</section>

<div class="h-20" />

<section id="about" class="container mx-auto max-w-screen-lg px-6 lg:px-0">
  <a href="#about">
    <Display>about me</Display>
  </a>
  <div class="h-8" />
  {#each data.about as item}
    <Body size={isMobile ? 16 : 24}>{item}</Body>
  {/each}
</section>

<div class="h-40" />
