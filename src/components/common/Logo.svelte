<script>
  export let classes = "";
  export let animated = false;
</script>

<a href="https://masbossun.web.id" class="cursor-pointer{classes}">
  {#if animated}
    <div id="logo-container" />
  {:else}
    <img src="images/masbossun-logo.svg" alt="masbossun's logo" />
  {/if}
</a>
