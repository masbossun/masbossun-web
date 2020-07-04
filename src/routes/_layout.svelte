<script context="module">
  export function preload() {
    return this.fetch(`index.json`)
      .then((r) => r.json())
      .then((data) => {
        return {
          data: {
            experiences: data.experiences,
            studies: data.studies,
            contacts: data.contacts,
          },
        };
      });
  }
</script>

<script>
  import { fly } from "svelte/transition";
  import { quadInOut } from "svelte/easing";
  import tailwindcss from "../tailwindcss.svelte";
  import Navbar from "../components/navbar/Navbar.svelte";
  import Footer from "../components/footer/Footer.svelte";

  export let segment;
  export let data;

  let scrollY;
  let current = scrollY;
  let isNavbarShow = true;

  $: scrollY, shouldNabvarShow();

  function shouldNabvarShow() {
    if (scrollY >= current) {
      isNavbarShow = false;
    }

    if (scrollY < current) {
      isNavbarShow = true;
    }

    current = scrollY;
  }
</script>

<tailwindcss />

<svelte:window bind:scrollY />

<header id="header">
  {#if isNavbarShow}
    <div
      class="fixed inset-x-0 top-0 bg-primary"
      transition:fly={{ duration: 600, y: -80, opacity: 1 }}>
      <Navbar {segment} />
    </div>
  {/if}
</header>

<main>
  <slot />
</main>

<Footer {data} />
