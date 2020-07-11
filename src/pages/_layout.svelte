<script>
  import { Caption } from "../components/typography";

  import Logo from "../components/common/Logo.svelte";

  import { fly } from "svelte/transition";
  import { tweened } from "svelte/motion";
  import { quadInOut } from "svelte/easing";
  import Navbar from "../components/navbar/Navbar.svelte";
  import Footer from "../components/footer/Footer.svelte";

  const emptyStateOpacity = tweened(1, { delay: 500, duration: 500 });
  let scrollY;
  let screenWidth;
  let screenHeight;
  let current = 0;
  let isNavbarShow = true;
  let isPageReady = false;

  $: scrollY, shouldNabvarShow();
  $: if (screenWidth && screenHeight) {
    setTimeout(() => {
      emptyStateOpacity.set(0).then(() => (isPageReady = true));
    }, 3000);
  }

  function shouldNabvarShow() {
    if (scrollY > current) {
      isNavbarShow = false;
    }

    if (scrollY < current) {
      isNavbarShow = true;
    }

    current = scrollY;
  }
</script>

<svelte:window
  bind:scrollY
  bind:outerWidth={screenWidth}
  bind:outerHeight={screenHeight} />

{#if !isPageReady}
  <div
    class="fixed inset-0 bg-primary z-40"
    style="opacity: {$emptyStateOpacity}">
    <div class="flex items-center justify-center h-full">
      <Logo animated={true} />
      <div class="absolute z-50 bottom-0 left-0 p-6">
        <Caption>
          animation by
          <a href="https://instagram.com/mardikoh">@mardikoh</a>
        </Caption>
      </div>
    </div>
  </div>
{/if}

<header id="header">
  {#if isNavbarShow}
    <div
      class="fixed inset-x-0 top-0 bg-primary"
      transition:fly={{ duration: 400, y: -80, opacity: 1 }}>
      <Navbar onItemPress={() => (isNavbarShow = true)} />
    </div>
  {/if}
</header>

<main>
  <slot />
</main>

<Footer />
