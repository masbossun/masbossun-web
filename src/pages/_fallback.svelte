<script>
  import { url } from "@sveltech/routify";
  import { Display, Subtitle } from "../components/typography";
</script>

<style>
  section {
    min-height: 70vh;
  }
</style>

<section class="flex flex-col items-center justify-center">
  <Display class="text-center">404</Display>
  <Subtitle class="text-center">
    Page not found.
    <a href={$url('../')}>Go back</a>
  </Subtitle>
</section>
