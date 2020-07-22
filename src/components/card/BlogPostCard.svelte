<script>
  import { Title, Caption, Subtitle, Body } from "../typography";

  export let href;
  export let subtitle;
  export let title;
  export let description;
  let isHover = false;
  let screenWidth;

  $: isMobile = screenWidth <= 640;

  const onMouseEnter = () => {
    isHover = true;
  };

  const onMouseLeave = () => {
    isHover = false;
  };
</script>

<style>
  div :global(.max-line-5) {
    text-overflow: ellipsis;
    overflow: hidden;
    max-height: calc(48px * 5);
    line-height: 48px;
  }
</style>

<svelte:window bind:outerWidth={screenWidth} />

<li
  {...$$restProps}
  on:mouseenter={onMouseEnter}
  on:mouseleave={onMouseLeave}
  class="negative-dark bg-accent cursor-pointer {$$restProps.class || ''}">
  <a {href}>
    <div class="p-6 lg:p-10">
      <div class="h-1 w-12 bg-primary" />
      <div class="h-6" />
      {#if isMobile}
        <Caption class="text-primary">{subtitle}</Caption>
      {:else}
        <Subtitle weight="regular" class="text-primary">{subtitle}</Subtitle>
      {/if}
      <div class="h-2" />
      <div>
        {#if !isMobile && isHover}
          <Body size={24} class=" text-primary max-line-5">{description}</Body>
        {:else}
          <Title size={isMobile ? 24 : 36} class="text-primary">{title}</Title>
        {/if}
      </div>
    </div>
    <div class="h-20" />
    <div class="p-6 lg:p-10">
      <Subtitle weight="bold" class="text-primary">read more</Subtitle>
    </div>
  </a>
</li>
