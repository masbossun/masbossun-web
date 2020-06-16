<script>
  export let classes = "";
  export let segment;

  import { ArrowLeftIcon, MenuIcon, XIcon } from "svelte-feather-icons";
  import * as animateScroll from "svelte-scrollto";
  import Logo from "../common/Logo.svelte";
  import Navlink from "./Navlink.svelte";
  import { goto, stores } from "@sapper/app";

  let isMenuOpen = false;
  let isDark = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function onDesktopClick(element) {
    return animateScroll.scrollTo({ element });
  }

  function onMobilePress(element) {
    if (element) {
      animateScroll.scrollTo({ element });
    }
    return toggleMenu();
  }

  function toggleDarkMode({ mobile = false }) {
    if (mobile) {
      toggleMenu();
    }

    if (isDark) {
      isDark = false;
      return window.document.body.classList.replace(
        "theme-dark",
        "theme-light"
      );
    }

    isDark = true;
    return window.document.body.classList.replace("theme-light", "theme-dark");
  }

  const { page } = stores();
  $: path = $page.path;

  async function navigateBack() {
    const paths = path.split("/");
    if (paths[paths.length - 1] === "") {
      paths.pop();
    }
    return goto(paths.slice(0, paths.length - 1).join("/") + "/");
  }
</script>

{#if segment === 'blog'}
  <div class="flex justify-between items-center py-8 px-6 lg:px-0 {classes}">
    <button on:click={navigateBack} class="w-8">
      <ArrowLeftIcon />
    </button>
  </div>
{:else}

  <div class="flex justify-between items-center {classes}">
    <Logo animated={true} />
    <div
      on:click={onMobilePress}
      class="flex md:hidden cursor-pointer w-8 h-8 mr-4">
      <MenuIcon />
    </div>
    {#if isMenuOpen}
      <div class="fixed inset-0 bg-primary z-40">
        <div class="flex flex-col justify-around items-center h-full py-64">
          <Navlink
            {segment}
            on:click={() => onMobilePress('#bio')}
            text={'bio'}
            link="." />
          <Navlink
            {segment}
            on:click={() => onMobilePress('#projects')}
            text={'projects'}
            link="." />
          <Navlink
            {segment}
            on:click={() => onMobilePress()}
            text={'blog'}
            link="blog/" />
          <Navlink
            {segment}
            link="."
            on:click={() => onMobilePress('#footer')}
            text={'contact me'} />
          <Navlink
            {segment}
            text="switch {isDark ? 'light' : 'dark'}"
            on:click={() => toggleDarkMode({ mobile: true })} />
        </div>
        <button
          on:click={onMobilePress}
          class="fixed top-0 right-0 z-50 w-8 h-8 mr-4 my-4">
          <XIcon />
        </button>
      </div>
    {/if}
    <div class="hidden md:flex">
      <Navlink
        {segment}
        text={'bio'}
        on:click={() => onDesktopClick('#bio')}
        link="." />
      <Navlink
        {segment}
        text={'projects'}
        on:click={() => onDesktopClick('#projects')}
        link="." />
      <Navlink {segment} text={'blog'} link="blog/" />
      <Navlink
        {segment}
        text={'contact me'}
        on:click={() => onDesktopClick('#footer')} />
      <Navlink
        {segment}
        text="switch {isDark ? 'light' : 'dark'}"
        on:click={toggleDarkMode} />
    </div>
  </div>
{/if}
