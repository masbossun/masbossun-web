<script>
  import { Title, Subtitle } from "../typography";

  export let title = "hero-title";
  export let subtitle = "hero-subtitle";
</script>

<header id="hero" class="{$$props.class || ''} bg-accent negative-dark">
  <div class="h-56" />
  <div class="container mx-auto max-w-screen-lg">
    <div class="flex flex-row items-center">
      <Title size={36} class="text-primary">{title}</Title>
      <div class="h-1 w-24 bg-primary mx-3" />
    </div>
    <Subtitle weight="regular" class="text-primary">{subtitle}</Subtitle>
  </div>
  <div class="h-32" />
</header>
