<script>
  import { Title } from "../typography";
  import Spacer from "./Spacer.svelte";

  export let stripColor = "dark";
</script>

<div class="flex flex-row items-center">
  <div class="{stripColor === 'dark' ? 'bg-accent' : 'bg-primary'} w-12 h-2" />
  <Spacer width={8} />
  <Title size={16}>
    <slot />
  </Title>
</div>
