<script>
  import Body from "./Body.svelte";
  import Caption from "./Caption.svelte";
  import Display from "./Display.svelte";
  import Subtitle from "./Subtitle.svelte";
  import Title from "./Title.svelte";

  export let type;
</script>

{#if type === 'title'}
  <Title {$$restProps}>
    <slot />
  </Title>
{:else if type === 'caption'}
  <Caption {$$restProps}>
    <slot />
  </Caption>
{:else if type === 'display'}
  <Display {$$restProps}>
    <slot />
  </Display>
{:else if type === 'subtitle'}
  <Subtitle {$$restProps}>
    <slot />
  </Subtitle>
{:else}
  <Body {$$restProps}>
    <slot />
  </Body>
{/if}
