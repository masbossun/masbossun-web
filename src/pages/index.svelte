<script>
  import { onMount } from "svelte";
  import { metatags } from "@sveltech/routify";
  import { tweened } from "svelte/motion";
  import { expoOut } from "svelte/easing";
  import { fade } from "svelte/transition";
  import showdown from "showdown";
  import * as animateScroll from "svelte-scrollto";
  import Icon from "@iconify/svelte";
  import arrowRightIcon from "@iconify/icons-uil/arrow-right";
  import arrowLeftIcon from "@iconify/icons-uil/arrow-left";
  import arrowDownIcon from "@iconify/icons-uil/arrow-down";
  import arrowUpIcon from "@iconify/icons-uil/arrow-up";
  import data from "../fixture";
  import Content from "../components/common/Content.svelte";
  import ProjectOverview from "../components/common/ProjectOverview.svelte";
  import Footer from "../components/footer/Footer.svelte";
  import { Display, Title, Body, Caption } from "../components/typography";
  import Subtitle from "../components/typography/Subtitle.svelte";
  import { Spacer, BossunLine } from "../components/common/index.js";
  import ProjectCard from "../components/card/ProjectCard.svelte";

  const converter = new showdown.Converter();
  const scrollerPosition = tweened(0, { easing: expoOut });
  let isMounted = false;
  let currentProjectIndex = 0;
  let index, offset, progress, count;
  let screenWidth;
  let screenHeight;
  let projectScroller;

  onMount(() => {
    isMounted = true;
  });

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
</script>

<svelte:window bind:outerWidth={screenWidth} bind:outerHeight={screenHeight} />

<svelte:head>
  <title>{data.meta.title}</title>
</svelte:head>

<section
  id="intro"
  class="container mx-auto max-w-screen-lg h-screen px-6 lg:px-0">
  <Spacer height={124} />
  <Display class="whitespace-pre-line">{data.headline}</Display>
  <Spacer height={40} />
  <BossunLine>view work</BossunLine>
  <div class="absolute inset-x-0" style="bottom: -8px">
    <Display
      style="font-size: 8rem; line-height: 72px"
      class="text-accent opacity-10 text-right">
      scroll down
    </Display>
  </div>
  <div class="absolute left-0 bottom-0">
    <Icon
      icon={arrowDownIcon}
      width={80}
      height={80}
      class={'text-accent opacity-10'} />
  </div>
</section>
<section id="works" class="container mx-auto max-w-screen-lg">
  <Spacer height={80} />
  <div class="grid grid-cols-8 gap-12 px-6 lg:px-0">
    {#each data.projects as project, index}
      <ProjectCard class="col-span-8 lg:col-span-4" {project} />
    {/each}
  </div>
</section>
<section id="about" class="container mx-auto max-w-screen-lg px-6 lg:px-0">
  <Spacer height={80} />
  <a href="#about">
    <Display>about</Display>
  </a>
  <Spacer height={32} />
  {#each data.about as item}
    <Body size={isMobile ? 16 : 24}>
      {@html converter.makeHtml(item)}
    </Body>
  {/each}
  <Spacer height={80} />
</section>
