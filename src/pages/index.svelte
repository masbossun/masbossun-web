<script>
  import { onMount } from "svelte";
  import { metatags } from "@sveltech/routify";
  import { tweened } from "svelte/motion";
  import { expoOut } from "svelte/easing";
  import showdown from "showdown";
  import Icon from "@iconify/svelte";
  import arrowRightIcon from "@iconify/icons-uil/arrow-right";
  import arrowLeftIcon from "@iconify/icons-uil/arrow-left";
  import data from "../fixture";
  import Content from "../components/common/Content.svelte";
  import ProjectOverview from "../components/common/ProjectOverview.svelte";
  import Footer from "../components/footer/Footer.svelte";
  import { Display, Title, Body, Caption } from "../components/typography";
  import Subtitle from "../components/typography/Subtitle.svelte";
  import { Spacer, StripText } from "../components/common/index.js";
  import ProjectCard from "../components/card/ProjectCard.svelte";

  const converter = new showdown.Converter();
  const heroOpacity = tweened(1);
  const scrollerPosition = tweened(0, { easing: expoOut });
  let isMounted = false;
  let scrollY;
  let screenWidth;
  let screenHeight;
  let projectScroller;
  let currentProjectIndex = 0;

  $: isMobile = screenWidth <= 640;

  function onProjectScroll(e) {
    const currentIndex = Math.round(e.target.scrollLeft / screenWidth);
    currentProjectIndex = currentIndex;
  }

  function gotoNextProject() {
    $scrollerPosition = projectScroller.scrollLeft + screenWidth;
  }

  function gotoPrevProject() {
    $scrollerPosition = projectScroller.scrollLeft - screenWidth;
  }

  scrollerPosition.subscribe((v) => {
    if (projectScroller) {
      projectScroller.scrollTo({ left: v, behavior: "smooth" });
    }
  });

  // metatags.title = "My Routify app";
  // metatags.description = "Description coming soon...";
</script>

<style>
  .horizontal-scroll-wrapper {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }

  .horizontal-scroll-wrapper > :global([ref="horizontal-scroll-items"]) {
    flex: 0 0 auto;
    width: calc(100vw);
    scroll-snap-align: center;
  }

  :global(p) > :global(a) {
    @apply underline;
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

  <StripText>more down below</StripText>
</section>

<section id="works" class="container mx-auto max-w-screen-lg px-6 lg:px-0">
  <a href="#works">
    <Display>my works</Display>
  </a>
  <div class="h-8" />
  {#if isMobile}
    <div
      bind:this={projectScroller}
      class="horizontal-scroll-wrapper hide-scrollbar -mx-6"
      on:scroll={onProjectScroll}>
      {#each data.projects as project, index}
        <ProjectCard
          id={'project-card-' + { index }}
          ref="horizontal-scroll-items"
          href={project.url}
          imageSource={project.thumbnail}
          imageAlt={project.name + 'thumbnail'}
          cardBgColor={project.color} />
      {/each}
    </div>
  {/if}
  <Spacer height={40} />
  <div class="flex flex-row items-center justify-between">
    <StripText>{data.projects[currentProjectIndex].name}</StripText>

    <div class="flex flex-row">
      <button
        on:click={gotoPrevProject}
        disabled={currentProjectIndex === 0}
        class={currentProjectIndex === 0 ? 'opacity-60' : 'opacity-100'}>
        <Icon
          icon={arrowLeftIcon}
          width={24}
          height={24}
          class={'text-accent'} />
      </button>
      <Spacer width={24} />
      <button
        on:click={gotoNextProject}
        disabled={currentProjectIndex === data.projects.length - 1}
        class={currentProjectIndex === data.projects.length - 1 ? 'opacity-60' : 'opacity-100'}>
        <Icon
          icon={arrowRightIcon}
          width={24}
          height={24}
          class={'text-accent'} />
      </button>
    </div>
  </div>

  <Spacer height={16} />

  <Body size={16}>{data.projects[currentProjectIndex].short_description}</Body>

</section>

<div class="h-20" />

<section id="about" class="container mx-auto max-w-screen-lg px-6 lg:px-0">
  <a href="#about">
    <Display>about</Display>
  </a>
  <div class="h-8 about-item" />
  {#each data.about as item}
    <Body size={isMobile ? 16 : 24}>
      {@html converter.makeHtml(item)}
    </Body>
  {/each}
</section>

<div class="h-40" />
