<script lang="ts">
  export let data;
  let hello: string;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Hello is now {data.hello}</p>
<form method="POST">
  Change it to
  <input name="hello" bind:value={hello} type="text" />
  <input type="submit" />
</form>
