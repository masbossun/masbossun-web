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

<section id="intro" class="max-w-320 md:max-w-screen-lg grid grid-cols-8">
  <Spacer class="col-span-8" height={160} />
  <Display class="col-start-2 col-span-6 whitespace-pre-line">
    {data.headline}
  </Display>
</section>
<section id="works" class="max-w-320 md:max-w-screen-lg">
  <Spacer height={144} />
  <div class="grid grid-cols-8 row-gap-10">
    {#each data.projects as project, index}
      <ProjectCard class="col-start-2 col-span-6 lg:col-span-4" {project} />
    {/each}
  </div>
</section>
<section id="about" class="max-w-320 md:max-w-screen-lg grid grid-cols-8">
  <Spacer class="col-span-8" height={144} />
  <div class="col-start-2 col-span-6">
    <a href="#about">
      <Display>about ryan</Display>
    </a>
  </div>
  <Spacer class="col-span-8" height={32} />
  {#each data.about as item}
    <Body class="col-start-2 col-span-6" size={isMobile ? 16 : 24}>
      {@html converter.makeHtml(item)}
    </Body>
  {/each}
  <Spacer class="col-span-8" height={144} />
</section>
