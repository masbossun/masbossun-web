<script>
  export let segment;
  export let dark = false;

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
  import { goto, stores } from "@sapper/app";
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  const { preloading, page, session } = stores();

  let isMenuOpen = false;
  let isDark = false;
  let isMounted = false;

  function toggleMenu() {
    if (isMounted) {
      isMenuOpen = !isMenuOpen;
    }
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

  $: path = $page.path;

  async function navigateBack() {
    const paths = path.split("/");
    if (paths[paths.length - 1] === "") {
      paths.pop();
    }
    return goto(paths.slice(0, paths.length - 1).join("/") + "/");
  }

  let screenWidth;
  $: isMobile = screenWidth <= 640;
  $: segment, toggleMenu();

  onMount(() => (isMounted = true));
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div
  id="navbar"
  class="{isMenuOpen ? 'fixed inset-x-0' : ''}
  {$$props.class || ''} bg-primary {dark && 'bg-accent negative-dark'}">
  <div
    class="container mx-auto max-w-screen-lg flex justify-between items-center
    h-20 px-6">
    <Logo {dark} animated={false} />

    {#if !isMobile}
      <div class="flex items-center">
        <Navlink {dark} {segment} text={'blog'} link="blog/" />
        <div class="w-4" />
        <Navlink
          {dark}
          {segment}
          text={'works'}
          on:click={() => onDesktopClick('#works')}
          link="." />
        <div class="w-4" />
        <Navlink
          {dark}
          {segment}
          text={'about'}
          on:click={() => onDesktopClick('#about')}
          link="." />
        <div class="w-4" />
        <Navlink
          {dark}
          {segment}
          text={'contacts'}
          on:click={() => onDesktopClick('#footer')} />
        <div class="w-4" />
        <div on:click={toggleDarkMode} class="cursor-pointer mx-2 my-1 w-6 h-6">
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
        </div>
      </div>
    {:else}
      <div on:click={toggleMenu}>
        <Icon
          icon={isMenuOpen ? timesIcon : barsIcon}
          width={24}
          height={24}
          class={dark ? 'text-primary' : 'text-accent'} />
      </div>
    {/if}
  </div>

  {#if isMenuOpen}
    <div class="fixed inset-0 bg-primary" style="top: 80px">
      <div class="p-6">
        <Navlink {segment} mobile text="blog" class="opacity-60" link="blog/" />
        <div class="h-6" />
        <Navlink {segment} mobile text="works" class="opacity-60" />
        <div class="h-6" />
        <Navlink {segment} mobile text="about" class="opacity-60" />
        <div class="h-6" />
        <Navlink {segment} mobile text="contacts" class="opacity-60" />
      </div>

      <div class="absolute bottom-0 left-0 px-6">
        <div class="bg-accent h-1 w-10 opacity-60" />
        <div class="h-4" />
        <div class="flex flex-row">
          <ContactButton
            textClass="text-accent opacity-60"
            icon={linkedinIcon} />
          <div class="w-3" />
          <ContactButton textClass="text-accent opacity-60" icon={githubIcon} />
          <div class="w-3" />
          <ContactButton
            textClass="text-accent opacity-60"
            icon={twitterIcon} />
          <div class="w-3" />
          <ContactButton
            textClass="text-accent opacity-60"
            icon={instagramIcon} />
        </div>
        <div class="h-20" />
      </div>

    </div>
  {/if}
</div>
