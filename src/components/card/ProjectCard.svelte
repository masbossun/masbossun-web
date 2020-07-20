<script>
  import { onDestroy } from "svelte";

  import { goto } from "@sveltech/routify";
  import { Title, Subtitle } from "../typography";
  import { Spacer } from "../common";
  import { random } from "../../helper.js";

  export let project;
  const INITIAL_SERIES = 1;
  let currentSeries = INITIAL_SERIES;
  let randomlyChangeSource;

  function changeSource() {
    randomlyChangeSource = setInterval(() => {
      currentSeries = random(1, 5, currentSeries);
    }, 1000);
  }

  function stopChangeSource() {
    clearInterval(randomlyChangeSource);
    currentSeries = INITIAL_SERIES;
  }

  onDestroy(() => {
    stopChangeSource();
  });
</script>

<div
  class={$$props.class || ''}
  on:mouseover={changeSource}
  on:mouseout={stopChangeSource}>
  <a target="_blank" rel="noopener noreferrer" href={project.url}>
    <img
      src={`${project.thumbnail}-${currentSeries}.webp`}
      srcset={`${project.thumbnail}-${currentSeries}.webp,
             ${project.thumbnail}-${currentSeries}@2x.webp 2x,`}
      alt={project.thumbnail} />
  </a>
  <Spacer height={8} />
  <Title size={16}>
    {project.name}
    <span class="tracking-normal font-normal opacity-60">
      — {project.category}, {project.started_at}
    </span>
  </Title>
</div>
