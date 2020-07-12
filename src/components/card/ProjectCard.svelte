<script>
  import { goto } from "@sveltech/routify";
  import { Title, Body, Subtitle } from "../typography";
  import { Spacer } from "../common";

  export let href;
  export let imageSource;
  export let imageAlt;
  export let cardBgColor;
</script>

<a
  target="_blank"
  rel="noopener noreferrer"
  href={() => $goto(href)}
  {...$$props}
  class={$$props.class || ''}>
  <div
    class="flex items-center justify-center"
    style="background-color: {cardBgColor}">
    <img
      class="object-contain p-6"
      src={imageSource}
      alt={imageAlt}
      style="height: 290px" />
  </div>
</a>
