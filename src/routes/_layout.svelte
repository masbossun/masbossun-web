<script lang="ts">
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment: string;
</script>

<main>
  <Nav {segment} />
  <slot />
  <Footer />
</main>

<style>
  main {
    position: relative;
    min-height: 100vw;
    max-width: 720px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  @media only screen and (max-width: 800px) {
    main {
      position: relative;
      min-height: 100vw;
      max-width: 660px;
      margin: 0 auto;
      box-sizing: border-box;
    }
  }
</style>
