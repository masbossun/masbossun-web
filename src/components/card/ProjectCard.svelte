<script>
  import { Title, Body, Subtitle } from "../typography";
  import { Spacer } from "../common";

  export let imageSource;
  export let imageAlt;
  export let cardBgColor;
</script>

<div {...$$props} class={$$props.class || ''}>
  <div
    class="flex items-center justify-center"
    style="background-color: {cardBgColor}">
    <img
      class="object-contain p-6"
      src={imageSource}
      alt={imageAlt}
      style="height: 290px" />
  </div>
</div>
