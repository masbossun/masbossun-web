<script>
  import Icon from "@iconify/svelte";

  export let href = "#";
  export let icon;
</script>

<a
  {href}
  target="_blank"
  rel="noopener noreferrer"
  {...$$restProps}
  class="{$$restProps.class}
  ">
  <Icon
    {icon}
    width={24}
    height={24}
    class="{$$restProps.textClass} text-primary" />
</a>
