<script>
</script>

<svelte:head>
  <title>masbossun</title>
</svelte:head>

<section>
  <div>
    <span class="display-desktop">
      as a software <br /> developer, ryan <br /> does his works <br /> with passion
    </span>
  </div>
  <div class="gap-160" />
  <div class="grid-container">
    <div class="grid-item">item 1</div>
    <div class="grid-item">item 2</div>
    <div class="grid-item">item 3</div>
    <div class="grid-item">item 4</div>
  </div>
  <div class="gap-160" />
  <div>
    <p class="body-24">
      his name is Ryan Setiagi, he currently working as a fulltime mobile
      developer at rukita. basically he does frontend development for web and
      also for mobile app. he quite familiar with react environment such as
      reactjs and react native. not tied to exact same development or
      environment, he can explore another frameworks and works with it if
      needed. <br /> <br /> he has been falling in love with programming since he
      was at college, and coding is how he express his feelings. In the mean time,
      he wrote some stuff on his blog. Just to keep his memory sharp, in case he
      need it in the future. he has a great interests to learning and building something
      new. If you intersted, feel free to contact him.
    </p>
  </div>
</section>

<style>
  section {
    padding: 160px 20px;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    grid-auto-rows: minmax(100px, auto);
  }
  @media (max-width: 660px) {
    .grid-container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
      grid-auto-rows: minmax(100px, auto);
    }
  }
  .grid-item {
    background-color: tomato;
    aspect-ratio: 1;
  }
</style>
