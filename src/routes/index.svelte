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
  export let data;

  import { onMount } from "svelte";
  import * as animateScroll from "svelte-scrollto";

  import Content from "../components/common/Content.svelte";
  import ProjectOverview from "../components/common/ProjectOverview.svelte";
  import Footer from "../components/footer/Footer.svelte";
  import { Display, Title, Body } from "../components/typography";
  import Subtitle from "../components/typography/Subtitle.svelte";

  let screenWidth;
  $: isMobile = screenWidth <= 640;

  onMount(() => {
    const animItem = bodymovin.loadAnimation({
      wrapper: document.getElementById("logo-container"),
      animType: "svg",
      path: "/images/masbossun-lottie.json",
    });
  });

  $: console.log(screenWidth);
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
<section class="container mx-auto max-w-screen-lg p-6 lg:p-0">
  <Display class="whitespace-pre-line">{data.headline}</Display>
</section>

<div class="h-6" />
<div class="bg-accent h-1 w-10 mx-6" />
<div class="h-20" />

<section class="container mx-auto max-w-screen-lg px-6 lg:px-0">
  <Title>my works</Title>
</section>
<div class="h-6" />
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

<div class="h-20" />

<section class="container mx-auto max-w-screen-lg px-6 lg:px-0">
  <Title>about me</Title>
  <div class="h-6" />
  {#each data.about as item}
    <Body size={isMobile ? 16 : 24}>{item}</Body>
  {/each}
</section>

<div class="h-20" />
