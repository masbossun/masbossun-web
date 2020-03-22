<script>
  import Navbar from "../components/navbar/Navbar.svelte";
  import Footer from "../components/footer/Footer.svelte";

  export let segment;
</script>

<header class="container mx-auto">
  <Navbar {segment} />
</header>

<main class="container mx-auto">
  <slot />
</main>

<Footer />
