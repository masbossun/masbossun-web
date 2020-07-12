<script>
  import bossunTimes from "../icon/bossunTimes";

  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { tweened } from "svelte/motion";
  import { slide } from "svelte/transition";
  import { sineInOut } from "svelte/easing";
  import Icon from "@iconify/svelte";
  import barsIcon from "@iconify/icons-uil/bars";
  import timesIcon from "@iconify/icons-uil/times";
  import sunIcon from "@iconify/icons-uil/sun";
  import moonIcon from "@iconify/icons-uil/moon";
  import githubIcon from "@iconify/icons-uil/github";
  import twitterIcon from "@iconify/icons-uil/twitter";
  import linkedinIcon from "@iconify/icons-uil/linkedin";
  import instagramIcon from "@iconify/icons-uil/instagram-alt";
  import * as animateScroll from "svelte-scrollto";
  import ContactButton from "../footer/ContactButton.svelte";
  import Logo from "../common/Logo.svelte";
  import Navlink from "./Navlink.svelte";
  import { Caption, Subtitle } from "../typography";
  import Spacer from "../common/Spacer.svelte";
  import { bossunBars } from "../icon";

  export let dark = false;
  export let onItemPress = () => null;

  const ANCHOR_OFFSET = -(80 + 24);
  const BLUR_SIZE = 24;
  const BLUR_DURATION = 600;
  const EASING = sineInOut;
  const blur = tweened(0, { duration: BLUR_DURATION, easing: EASING });
  const contentOpacity = tweened(0, {
    duration: BLUR_DURATION - 100,
    easing: EASING,
  });
  let isMenuOpen = false;
  let isDark = false;
  let isMounted = false;
  let screenWidth;

  $: isMobile = screenWidth <= 640;

  onMount(() => {
    isMounted = true;
  });

  async function toggleMenu() {
    if (isMounted) {
      if (isMenuOpen) {
        contentOpacity.set(0);
        await blur.set(0);
        isMenuOpen = false;
      } else {
        isMenuOpen = true;
        blur.set(BLUR_SIZE);
        contentOpacity.set(1);
      }
    }
  }

  function onDesktopClick(element) {
    return animateScroll.scrollTo({ element, offset: ANCHOR_OFFSET });
  }

  function onMobilePress(element) {
    if (element) {
      animateScroll.scrollTo({ element, offset: ANCHOR_OFFSET });
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

  async function navigateBackAsync() {
    const paths = path.split("/");
    if (paths[paths.length - 1] === "") {
      paths.pop();
    }
    return goto(paths.slice(0, paths.length - 1).join("/") + "/");
  }
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div
  class="container mx-auto max-w-screen-lg flex justify-between items-center
  h-20 px-6 lg:px-0 absolute inset-x-0 bg-primary-0 {dark && 'bg-accent negative-dark'}">

  <Logo on:click={() => (isMenuOpen = false)} {dark} animated={false} />

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
    <button class="fixed z-20 right-0 p-6" on:click={toggleMenu}>
      {#if isMenuOpen}
        <div transition:slide>
          <Icon
            icon={bossunTimes}
            width={24}
            height={24}
            class={dark ? 'text-primary' : 'text-accent'} />
        </div>
      {:else}
        <div transition:slide>
          <Icon
            icon={bossunBars}
            width={24}
            height={24}
            class={dark ? 'text-primary' : 'text-accent'} />
        </div>
      {/if}
    </button>
  {/if}
</div>

{#if isMenuOpen}
  <div
    class="fixed inset-0 z-10 overflow-hidden bg-primary-10"
    style="backdrop-filter: blur({$blur}px);">

    <div class="h-40" />

    <div class="px-6" style="opacity: {$contentOpacity}">
      <Navlink mobile text="index" on:click={toggleMenu} link="/" />
      <div class="h-4" />
      <Navlink mobile text="blog" on:click={toggleMenu} link="blog/" />
      <div class="h-4" />
      <Navlink
        mobile
        text="works"
        on:click={() => onMobilePress('#works')}
        link="#works" />
      <div class="h-4" />
      <Navlink
        mobile
        text="about"
        on:click={() => onMobilePress('#about')}
        link="#about" />
      <div class="h-4" />
      <Navlink
        mobile
        text="contacts"
        on:click={() => onMobilePress('#contacts')}
        link="#contacts" />
    </div>

    <div
      class="absolute bottom-0 left-0 px-6"
      style="opacity: {$contentOpacity}">
      <div class="flex flex-row items-center">
        <div class="bg-accent w-12 h-2" />
        <Spacer width={8} />
        <Subtitle weight="bold">keep in touch!</Subtitle>
      </div>
      <Spacer height={16} />
      <div class="flex flex-row">
        <ContactButton textClass="text-accent" icon={linkedinIcon} />
        <div class="w-3" />
        <ContactButton textClass="text-accent" icon={githubIcon} />
        <div class="w-3" />
        <ContactButton textClass="text-accent" icon={twitterIcon} />
        <div class="w-3" />
        <ContactButton textClass="text-accent" icon={instagramIcon} />
      </div>
      <div class="h-20" />
    </div>

  </div>
{/if}
