<script>
</script>

<svelte:head>
  <title>masbossun</title>
</svelte:head>

<section>
  <div>
    <h1>
      as a software <br /> developer, ryan <br /> does his works <br /> with passion
    </h1>
  </div>
  <div class="gap-160" />
  <div class="grid-container">
    <div class="grid-item">
      <img src="/images/index/works-winsen.png" alt="winsen site" />
    </div>
    <div class="grid-item">
      <img src="/images/index/works-rekber.png" alt="winsen site" />
    </div>
    <div class="grid-item">
      <img src="/images/index/works-bukom-digital.png" alt="winsen site" />
    </div>
    <div class="grid-item">
      <img src="/images/index/works-hijrah.png" alt="winsen site" />
    </div>
    <!-- <div class="grid-item">item 2</div>
    <div class="grid-item">item 3</div>
    <div class="grid-item">item 4</div> -->
  </div>
  <div class="gap-160" />
  <div>
    <p class="body-18">
      his name is Ryan Setiagi, he currently working as a fulltime mobile
      developer at <a href="https://rukita.co">rukita</a>. basically he does
      frontend development for web and also for mobile app. he quite familiar
      with react environment such as <a href="https://reactjs.org">react</a> and
      <a href="https://reactnative.dev">react native</a>. not tied to exact same
      development or environment, he can explore another frameworks and works
      with it if needed. <br /> <br /> he has been falling in love with
      programming since he was at college, and coding is how he express his
      feelings. In the mean time, he wrote some stuff on his
      <a href="/blog">blog</a>. Just to keep his memory sharp, in case he need
      it in the future. he has a great interests to learning and building
      something new. If you intersted, feel free to
      <a href="/contacts">contact</a> him.
    </p>
  </div>
</section>

<style>
  section {
    padding: 160px 16px;
  }
  a {
    color: #f45d48;
    text-decoration: none;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    grid-auto-rows: minmax(100px, auto);
  }
  @media (max-width: 660px) {
    .grid-container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 24px;
      grid-auto-rows: minmax(100px, auto);
    }
  }
  .grid-item {
    aspect-ratio: 1;
  }
  .grid-item > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
