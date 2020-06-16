<script>
  import { onMount } from "svelte";
  import * as animateScroll from "svelte-scrollto";

  import Content from "../components/common/Content.svelte";
  import ProjectOverview from "../components/common/ProjectOverview.svelte";
  import Footer from "../components/footer/Footer.svelte";

  import data from "../data.js";

  let positionY;
  let contentHeight;
  const projects = data.projects;

  onMount(() => {
    const animItem = bodymovin.loadAnimation({
      wrapper: document.getElementById("logo-container"),
      animType: "svg",
      path: "/images/masbossun-lottie.json"
    });
  });
</script>

<svelte:window bind:scrollY={positionY} />

<svelte:head>
  <title>masbossun</title>
</svelte:head>

{#if positionY >= contentHeight * 0.8}
  <button
    on:click={() => animateScroll.scrollToTop()}
    class="hidden lg:block fixed bottom-0 right-0 mr-12 mb-12 p-8 z-10
    bg-primary">
    UP
  </button>
{/if}

<Content
  bind:clientHeight={contentHeight}
  classes="flex flex-col lg:flex-row justify-center items-center py-16 lg:py-0
  px-4 lg:px-0">
  <img
    class="hidden lg:block"
    srcset="images/project-winsen-featured@2x.png 2x,
    images/project-winsen-featured.png 1x"
    src="images/project-winsen-featured.png"
    alt="featured-project-prototypes" />
  <div class="w-32" />
  <div class="flex flex-initial flex-col items-center lg:items-start">
    <span
      class="font-sans font-bold text-5xl lg:text-6xl leading-tight
      tracking-tighter text-center lg:text-left ">
      i am a frontend web and mobile developer who crafts codes with
      <span class="font-serif italic font-normal">passion.</span>
    </span>
    <div class="h-8" />
    <a
      class="hidden lg:block"
      target="_blank"
      rel="noopener noreferrer"
      href="https://winsen.xyz">
      <span class="text-xl underline">featured project: winsen's site</span>
    </a>
  </div>
  <div class="h-24" />
  <div class="block lg:hidden mt-8">
    <span class="text-base">Keep scrolling!</span>
  </div>
</Content>

<Content
  id="bio"
  classes=" flex flex-col lg:flex-row justify-center items-center relative">
  <div class="hidden lg:block absolute bottom-0 left-0 mb-48 ml-0">
    <span
      class="font-sans font-bold text-5xl lg:text-6xl leading-tight
      tracking-tighter text-center lg:text-left opacity-10">
      ik heb ryan,
      <br />
      leuk je
      <br />
      te untmoeten
    </span>
  </div>
  <div class="hidden lg:block absolute bottom-0 right-0 mb-56 mr-32">
    <span class="font-display italic text-5xl lg:text-6xl">//</span>
  </div>
  <div class="p-8 mx-0 lg:mx-32 z-10 text-center lg:text-left">
    <span class="font-sans font-normal text-xl md:text-4xl leading-loose ">
      Hello, My name is Ryan Setiagi, self-motivated Frontend Developers who
      love to learn new things. My background is telecommunication. I used to
      code on vim and i am bad at typing. Most recently, i was a student at
      telkom university (2016-2019). I want to love reading and writing as well.
      You can find @masbossun on every daily social media.
    </span>
  </div>
</Content>

<section id="projects">
  {#each projects as project, index}
    <Content classes="flex flex-col lg:flex-row items-center relative">
      <ProjectOverview
        {index}
        title={project.name}
        src={project.thumbnail}
        description={project.short_description} />
    </Content>
  {/each}
</section>
