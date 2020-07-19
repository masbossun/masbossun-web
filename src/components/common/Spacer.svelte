<script>
  export let width = "auto";
  export let height = "auto";

  $: h = height ? height + "px" : "auto";
  $: w = width ? width + "px" : "auto";
</script>

<span style="height: {h}; width: {w}" class="block {$$props.class || ''}" />
