<script>
  import { goto } from "@sveltech/routify";
  import { Title } from "../typography";
  import { Spacer } from "../common";

  export let project;
</script>

<div class={$$props.class || ''}>
  <a target="_blank" rel="noopener noreferrer" href={() => $goto(project.href)}>
    <img
      src={`${project.thumbnail}.png`}
      srcset={`${project.thumbnail}.png,
             ${project.thumbnail}@2x.png 2x,`}
      alt={project.thumbnail}
      class="w-full" />
  </a>
  <Spacer height={16} />
  <Title size={20}>
    {project.name}
    <span class="font-normal">— {project.category}, {project.started_at}</span>
  </Title>
</div>
