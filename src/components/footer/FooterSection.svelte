<script>
  export let data = {
    title: "title",
    items: [
      {
        title: "items-title",
        caption: "items-caption",
        subtitle: "items-subtitle"
      }
    ]
  };

  import { Title, Subtitle, Caption } from "../typography";
</script>

<section {...$$restProps}>
  <Title>{data.title}</Title>
  <div class="h-4" />
  {#each data.items as item}
    <Subtitle weight="regular opacity-60">{item.subtitle}</Subtitle>
    <div class="h-1" />
    <Subtitle weight="bold">{item.title}</Subtitle>
    <div class="h-1" />
    <Caption class="opacity-60">{item.caption}</Caption>
    <div class="h-4" />
  {/each}
</section>
