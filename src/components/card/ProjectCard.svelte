<script>
  import { onDestroy } from "svelte";

  import { goto } from "@sveltech/routify";
  import { Title } from "../typography";
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
  <a target="_blank" rel="noopener noreferrer" href={() => $goto(project.href)}>
    <img
      src={`${project.thumbnail}-${currentSeries}.png`}
      srcset={`${project.thumbnail}-${currentSeries}.png,
             ${project.thumbnail}-${currentSeries}@2x.png 2x,`}
      alt={project.thumbnail}
      class="w-full" />
  </a>
  <Spacer height={16} />
  <Title size={20}>
    {project.name}
    <span class="font-normal">— {project.category}, {project.started_at}</span>
  </Title>
</div>
