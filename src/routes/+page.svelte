<script lang="ts">
  import { enhance } from '$app/forms';

  export let data;
  let hello = data.hello.slice(0);
  console.log({ svelte: 'yes', hello, name: 'brian' });
</script>

<h1>Welcome to SvelteKit</h1>
<p>Data.hello is now {data.hello}</p>
<form method="POST">
  Change it to
  <input name="hello" bind:value={hello} type="text" />
  <input type="submit" />
</form>
