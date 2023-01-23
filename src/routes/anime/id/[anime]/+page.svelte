<script>
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);
</script>

<svelte:head>
	<title>{data.details.title.english}</title>
</svelte:head>
<div class="w-full h-96 border-2 border-red-500">test</div>
