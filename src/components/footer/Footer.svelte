<script>
  import Content from "../common/Content.svelte";
  import Logo from "../common/Logo.svelte";
  import {
    LinkedinIcon,
    TwitterIcon,
    InstagramIcon,
    GithubIcon
  } from "svelte-feather-icons";
  let currentYear = new Date().getFullYear();
</script>

<footer id="footer" class="container mx-auto">
  <hr class="my-12" />

  <div>
    <div class="flex flex-col lg:flex-row items-center justify-between mb-24">
      <span class="font-sans font-bold text-2xl mb-8 lg:mb-0">
        get in touch
      </span>
      <div class="flex">
        <a href="https://linkedin.com/in/ryan-setiagi">
          <div class="w-8 text-black mx-4">
            <LinkedinIcon />
          </div>
        </a>
        <a href="https://github.com/masbossun">
          <div class="w-8 text-black mx-4">
            <GithubIcon />
          </div>
        </a>
        <a href="https://twitter.com/masbossun">
          <div class="w-8 text-black mx-4">
            <TwitterIcon />
          </div>
        </a>
        <a href="https://instagram.com/masbossun">
          <div class="w-8 text-black mx-4">
            <InstagramIcon />
          </div>
        </a>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row justify-between items-center mb-8">
      <Logo classes="mb-8 lg:mb-0" />
      <div class="flex items-center flex-col lg:flex-row">
        <span class="font-sans text-black mx-4 mb-4 lg:mb-0">
          proudly made in jakarta, ID
        </span>
        <a href=".">
          <span class="font-serif text-black">
            @{currentYear} / masbossun LLC.
          </span>
        </a>
      </div>
    </div>
  </div>
</footer>
