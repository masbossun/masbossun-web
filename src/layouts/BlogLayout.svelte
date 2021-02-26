<script>
  export let title;
  export let date;
</script>

<h1>{title}</h1>
<p class="date">on: {date}</p>
<slot>
  <!-- the mdsvex content will be slotted in here -->
</slot>
