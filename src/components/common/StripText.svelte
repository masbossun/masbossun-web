<script>
  import { Subtitle } from "../typography";
  import Spacer from "./Spacer.svelte";

  export let stripColor = "dark";
</script>

<div class="flex flex-row items-center">
  <div class="{stripColor === 'dark' ? 'bg-accent' : 'bg-primary'} w-12 h-2" />
  <Spacer width={8} />
  <Subtitle weight="regular">
    <slot />
  </Subtitle>
</div>
