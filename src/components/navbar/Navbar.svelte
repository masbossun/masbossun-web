<script>
  import { onMount } from "svelte";
  import { url } from "@sveltech/routify";
  import Icon from "@iconify/svelte";
  import sunIcon from "@iconify/icons-uil/sun";
  import moonIcon from "@iconify/icons-uil/moon";
  import * as animateScroll from "svelte-scrollto";
  import Logo from "../common/Logo.svelte";
  import Navlink from "./Navlink.svelte";
  import { bossunBars } from "../icon";
  import bossunTimes from "../icon/bossunTimes";
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
    return animateScroll.scrollTo({ element, offset: 80 });
  }

  function onMobilePress(element) {
    if (element) {
      animateScroll.scrollTo({ element, offset: 80 });
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
  class="mx-0 sm:mx-auto max-w-320 sm:max-w-screen-lg h-20 absolute inset-x-0
  z-20 bg-primary {dark && 'bg-accent negative-dark'} grid grid-cols-8">
  <div class="col-start-2 col-span-6 flex justify-between items-center">
    <Logo on:click={() => (isMenuOpen = false)} animated={false} />
    {#if !isMobile}
      <div class="flex items-center">
        <Navlink {dark} text={'blog'} link={$url('/blog/')} />
        <Navlink
          {dark}
          text={'works'}
          on:click={() => onDesktopClick('#works')}
          link="#works" />
        <Navlink
          {dark}
          text={'about'}
          on:click={() => onDesktopClick('#about')}
          link="#about" />
        <Navlink
          {dark}
          text={'contacts'}
          on:click={() => onDesktopClick('#contacts')}
          link="#contacts" />
        <button
          on:click={toggleDarkMode}
          class="cursor-pointer mx-2 my-1 w-4 h-4">
          {#if isDark}
            <Icon
              icon={sunIcon}
              width={16}
              height={16}
              class={dark ? 'text-primary' : 'text-accent'} />
          {:else}
            <Icon
              icon={moonIcon}
              width={16}
              height={16}
              class={dark ? 'text-primary' : 'text-accent'} />
          {/if}
        </button>
      </div>
    {:else}
      <div class="flex items-center">
        {#if isMenuOpen}
          <button
            on:click={toggleDarkMode}
            class="cursor-pointer mx-2 my-1 w-4 h-4">
            {#if isDark}
              <Icon
                icon={sunIcon}
                width={16}
                height={16}
                class={dark ? 'text-primary' : 'text-accent'} />
            {:else}
              <Icon
                icon={moonIcon}
                width={16}
                height={16}
                class={dark ? 'text-primary' : 'text-accent'} />
            {/if}
          </button>
          <Spacer width={16} />
        {/if}
        <div on:click={toggleMenu}>
          {#if isMenuOpen}
            <Icon
              icon={bossunTimes}
              width={16}
              height={16}
              class="text-accent" />
          {:else}
            <Icon
              icon={bossunBars}
              width={16}
              height={16}
              class="text-accent" />
          {/if}
        </div>
      </div>
    {/if}
  </div>
</div>

{#if isMenuOpen}
  <div class="fixed inset-0 z-10 overflow-hidden bg-primary">
    <div class="mx-0 md:mx-auto max-w-320 md:max-w-screen-lg grid grid-cols-8">
      <Spacer class="col-span-8" height={160} />
      <div class="col-start-2 col-span-6">
        <Navlink mobile text="index" on:click={toggleMenu} link="/" />
        <Spacer height={16} />
        <Navlink
          mobile
          text="blog"
          on:click={toggleMenu}
          link={$url('/blog/')} />
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
        <div class="absolute opacity-60 flex flex-col" style="bottom: 40px">
          <Caption>
            v3.0.0-rc &copy; {new Date().getFullYear()} masbossun
          </Caption>
          <Caption>proudly made by ryan in Jakarta, ID</Caption>
        </div>
      </div>
    </div>
  </div>
{/if}
