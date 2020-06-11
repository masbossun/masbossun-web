<script>
  export let classes = "";
  export let segment;

  import { ArrowLeftIcon, MenuIcon, XIcon } from "svelte-feather-icons";
  import Logo from "../common/Logo.svelte";
  import Navlink from "./Navlink.svelte";
  import { goto, stores } from "@sapper/app";

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  const { page } = stores();
  $: path = $page.path;

  async function navigateBack() {
    const paths = path.split("/");
    return goto(paths.slice(0, paths.length - 1).join("/"));
  }
</script>

{#if segment === 'blog'}
  <div class="flex justify-between items-center py-8 px-6 lg:px-0 {classes}">
    <button on:click={navigateBack} class="w-8">
      <ArrowLeftIcon />
    </button>
  </div>
{:else}

  <div class="flex justify-between items-center p-2 {classes}">
    <Logo />
    <div on:click={toggleMenu} class="flex md:hidden cursor-pointer w-8 h-8">
      <MenuIcon />
    </div>
    {#if isMenuOpen}
      <div class="fixed inset-0 bg-white z-40">
        <div class="flex flex-col justify-around items-center h-full py-64">
          <Navlink
            {segment}
            on:click={toggleMenu}
            text={'bio'}
            link="."
            scrollTo={'#bio'} />
          <Navlink
            {segment}
            on:click={toggleMenu}
            text={'projects'}
            link="."
            scrollTo={'#projects'} />
          <Navlink {segment} on:click={toggleMenu} text={'blog'} link="blog" />
          <Navlink
            {segment}
            link="."
            on:click={toggleMenu}
            text={'contact me'}
            scrollTo={'#footer'}
            hasShadow={true} />
        </div>
        <button
          on:click={toggleMenu}
          class="fixed bottom-0 right-0 z-50 mr-16 mb-16 w-12">
          <XIcon />
        </button>
      </div>
    {/if}
    <div class="hidden md:flex">
      <Navlink {segment} text={'bio'} scrollTo={'#bio'} link="." />
      <Navlink {segment} text={'projects'} scrollTo={'#projects'} link="." />
      <Navlink {segment} text={'blog'} link="blog" />
      <Navlink
        {segment}
        text={'contact me'}
        scrollTo={'#footer'}
        hasShadow={true} />
    </div>
  </div>
{/if}
