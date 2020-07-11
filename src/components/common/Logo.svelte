<script>
  import { createEventDispatcher } from "svelte";
  import { Subtitle } from "../typography";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";

  export let animated = false;
  export let dark = false;

  const dispatch = createEventDispatcher();

  function onClick() {
    dispatch("click");
  }
</script>

<a href="/" class="cursor-pointer {$$props.class || ''}" on:click={onClick}>
  {#if animated}
    <LottiePlayer
      src="/images/masbossun-lottie.json"
      width={200}
      height="auto"
      autoplay={true}
      loop={false}
      renderer="svg"
      background="transparent"
      controls={false}
      controlsLayout={[]} />
  {:else}
    <div class="{dark ? 'bg-primary' : 'bg-accent'} py-3 px-4">
      <Subtitle weight="bold" class={dark ? 'text-accent' : 'text-primary'}>
        masbossun
      </Subtitle>
    </div>
  {/if}
</a>
