<script>
  import { onMount } from "svelte";
  import * as animateScroll from "svelte-scrollto";

  import Content from "../components/common/Content.svelte";
  import ProjectOverview from "../components/common/ProjectOverview.svelte";
  import Footer from "../components/footer/Footer.svelte";

  let positionY;
  let contentHeight;

  onMount(() => {
    const animItem = bodymovin.loadAnimation({
      wrapper: document.getElementById("logo-container"),
      animType: "svg",
      path: "/images/masbossun-lottie.json"
    });
  });
</script>

<style>
  .featured-image {
    width: 50rem;
  }
</style>

<svelte:window bind:scrollY={positionY} />

<section>
  {#if positionY >= contentHeight * 0.8}
    <button
      on:click={() => animateScroll.scrollToTop()}
      class="hidden lg:block fixed bottom-0 right-0 mr-12 mb-12 p-8 z-10
      bg-white">
      UP
    </button>
  {/if}

  <Content
    bind:clientHeight={contentHeight}
    classes="flex flex-col lg:flex-row justify-center items-center py-16 lg:py-0
    px-4 lg:px-0">
    <div
      class="flex flex-initial flex-col items-center lg:items-start lg:mr-12">
      <span
        class="font-sans font-bold text-5xl lg:text-6xl leading-tight
        tracking-tighter text-center lg:text-left ">
        i am a frontend web and mobile developer who crafts codes with
        <span class="font-serif italic font-normal">passion.</span>
      </span>
      <div class="hidden lg:block mt-16">
        <span class="text-base underline">featured project: waruung</span>
      </div>
    </div>
    <div class="flex flex-initial mb-auto mt-16 xl:mt-24 px-12 lg:px-0">
      <img
        src="images/project-waruung.png"
        alt="featured-project-prototypes"
        class="featured-image" />
    </div>
    <div class="block lg:hidden mt-8">
      <span class="text-base underline">featured project: waruung</span>
    </div>
  </Content>

  <Content
    id="bio"
    classes="flex flex-col lg:flex-row justify-center items-center relative">
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
        telkom university (2016-2019). I want to love reading and writing as
        well. You can find @masbossun on every daily social media.
      </span>
    </div>
  </Content>

  <Content
    id="projects"
    classes="flex flex-col lg:flex-row items-center relative">
    <ProjectOverview
      url="#"
      title="waruung"
      src="images/project-waruung.png"
      description={`
        Waruung is food ordering platform. With waruung user can order kind of
        food, drink, baverages, etc from warung—indonesian minimart. Waruung has
        two different apps, for user and the merchant. Waruung mechant will
        sent. orders with their own express and fee.
        <br />
        <br />
        With waruung, people can just order food easly.
    `} />
  </Content>

  <Content classes="flex flex-col lg:flex-row items-center relative">
    <ProjectOverview
      url="#"
      title="hijrah"
      src="images/project-hijrah.png"
      description={'Quran is the Muslim holy book, but because of the sanctity of the Quran, people sometimes choose to keep it in a cupboard rather than carryin it. What if everything can be accessed easily via a smartphone. Quran apps with a simple interface and easy to use, can be the choice of the people, to focus on worship.'} />
  </Content>

  <Content classes="flex flex-col lg:flex-row items-center relative">
    <ProjectOverview
      url="#"
      title="bukom"
      src="images/project-bukom-digital.png"
      description={`
        With my colleague we made system that connect playgroup teacher with parents.
        Communcation is necessary, parents will happy if they know what their children
        achive everyday. Even teacher with ease can deliver information to parents
        before they skip.
        <br />
        <br />
        For playrgroup firm, they also can give parents events or news
        in realtime.
      `} />
  </Content>

  <div class="h-16" />

</section>
