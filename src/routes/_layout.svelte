<script context="module">
  export function preload() {
    return this.fetch(`index.json`)
      .then((r) => r.json())
      .then((data) => {
        return {
          data: {
            experiences: data.experiences,
            studies: data.studies,
            contacts: data.contacts,
          },
        };
      });
  }
</script>

<script>
  import tailwindcss from "../tailwindcss.svelte";
  import Navbar from "../components/navbar/Navbar.svelte";
  import Footer from "../components/footer/Footer.svelte";

  export let segment;
  export let data;
</script>

<tailwindcss />

<header id="header">
  <Navbar {segment} />
</header>

<main>
  <slot />
</main>

<Footer {data} />
