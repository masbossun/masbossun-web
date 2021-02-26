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
        class="subtitle-regular">blog</a
      >
    </li>
    <li>
      <a
        aria-current={segment === "works" ? "page" : undefined}
        href="works"
        class="subtitle-regular">works</a
      >
    </li>
    <li>
      <a
        aria-current={segment === "contacts" ? "page" : undefined}
        href="contacts"
        class="subtitle-regular">contacts</a
      >
    </li>
  </ul>
</nav>

<style>
  nav {
    padding: 20px;
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
    font-weight: 600;
  }

  [aria-current]::after {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    display: block;
  }
</style>
