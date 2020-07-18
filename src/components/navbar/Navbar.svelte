<script>
  import bossunTimes from "../icon/bossunTimes";

  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";
  import sunIcon from "@iconify/icons-uil/sun";
  import moonIcon from "@iconify/icons-uil/moon";
  import * as animateScroll from "svelte-scrollto";
  import Logo from "../common/Logo.svelte";
  import Navlink from "./Navlink.svelte";
  import { bossunBars } from "../icon";
  import { Spacer } from "../common";
  import { Caption, Subtitle } from "../typography";

  export let dark = false;
  export let onItemPress = () => null;

  let isMenuOpen = false;
  let isDark = false;
  let isMounted = false;
  let screenWidth;

  $: isMobile = screenWidth <= 640;

  onMount(() => {
    isMounted = true;
  });

  async function toggleMenu() {
    if (!isMounted) {
      return null;
    }

    isMenuOpen = !isMenuOpen;
  }

  function onDesktopClick(element) {
    return animateScroll.scrollTo({ element });
  }

  function onMobilePress(element) {
    if (element) {
      animateScroll.scrollTo({ element });
    }
    onItemPress();
    return toggleMenu();
  }

  function toggleDarkMode({ mobile = false }) {
    if (mobile) {
      toggleMenu();
    }

    if (isDark) {
      isDark = false;
      window.document.body.classList.replace("theme-dark", "theme-light");
      return session.update((prev) => ({
        ...prev,
        settings: { theme: "theme-dark" },
      }));
    }

    isDark = true;
    window.document.body.classList.replace("theme-light", "theme-dark");
    return session.update((prev) => ({
      ...prev,
      settings: { theme: "theme-light" },
    }));
  }
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div
  class="ml-10 lg:ml-0 max-w-300 md:max-w-screen-lg flex justify-between
  items-center h-20 absolute inset-x-0 z-20 bg-primary {dark && 'bg-accent negative-dark'}">

  <Logo on:click={() => (isMenuOpen = false)} animated={false} />

  {#if !isMobile}
    <div class="flex items-center">
      <Navlink {dark} text={'blog'} link="blog/" />
      <div class="w-4" />
      <Navlink
        {dark}
        text={'works'}
        on:click={() => onDesktopClick('#works')}
        link="#works" />
      <div class="w-4" />
      <Navlink
        {dark}
        text={'about'}
        on:click={() => onDesktopClick('#about')}
        link="#about" />
      <div class="w-4" />
      <Navlink
        {dark}
        text={'contacts'}
        on:click={() => onDesktopClick('#contacts')}
        link="#contacts" />
      <div class="w-4" />
      <button
        on:click={toggleDarkMode}
        class="cursor-pointer mx-2 my-1 w-6 h-6">
        {#if isDark}
          <Icon
            icon={sunIcon}
            width={24}
            height={24}
            class={dark ? 'text-primary' : 'text-accent'} />
        {:else}
          <Icon
            icon={moonIcon}
            width={24}
            height={24}
            class={dark ? 'text-primary' : 'text-accent'} />
        {/if}
      </button>
    </div>
  {:else}
    <!-- <div class="p-6" on:click={toggleMenu}>
      {#if isMenuOpen}
        <Icon icon={bossunTimes} width={24} height={24} class="text-accent" />
      {:else}
        <Icon icon={bossunBars} width={24} height={24} class="text-accent" />
      {/if}
    </div> -->
  {/if}
</div>

{#if isMenuOpen}
  <div class="fixed inset-0 z-10 overflow-hidden bg-primary">
    <Spacer height={160} />
    <div class="px-6">
      <Navlink mobile text="index" on:click={toggleMenu} link="/" />
      <Spacer height={16} />
      <Navlink mobile text="blog" on:click={toggleMenu} link="blog/" />
      <Spacer height={16} />
      <Navlink
        mobile
        text="works"
        on:click={() => onMobilePress('#works')}
        link="#works" />
      <Spacer height={16} />
      <Navlink
        mobile
        text="about"
        on:click={() => onMobilePress('#about')}
        link="#about" />
      <Spacer height={16} />
      <Navlink
        mobile
        text="contacts"
        on:click={() => onMobilePress('#contacts')}
        link="#contacts" />
    </div>

    <div
      class="absolute inset-x-0 bottom-0 px-6 py-10 flex flex-col opacity-60">
      <Caption>v3.0.0-rc &copy; {new Date().getFullYear()} masbossun</Caption>
      <Caption>proudly made by ryan in Jakarta, ID</Caption>
    </div>
  </div>
{/if}
