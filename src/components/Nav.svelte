<script lang="ts">
  export let segment: string;
</script>

<nav>
  <a href=".">
    <div class="logo-container">
      <span class="subtitle-bold logo-content">masbossun</span>
    </div>
  </a>
  <ul>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === "blog" ? "page" : undefined}
        href="blog"
        class="subtitle-bold">blog</a
      >
    </li>
    <!-- <li>
      <a
        aria-current={segment === "works" ? "page" : undefined}
        href="works"
        class="subtitle-bold">works</a
      >
    </li> -->
    <li>
      <a
        aria-current={segment === "contacts" ? "page" : undefined}
        href="contacts"
        class="subtitle-bold">contacts</a
      >
    </li>
  </ul>
</nav>

<style>
  nav {
    padding: 24px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
    padding: 16px;
  }

  [aria-current] {
    text-decoration: underline;
  }

  a {
    text-decoration: none;
    display: block;
  }
</style>
