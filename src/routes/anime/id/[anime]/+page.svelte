<script>
	/** @type {import('./$types').PageData} */
	export let data;

	$:({ animeInfo } = data);
	
</script>

<svelte:head>
	<title>{animeInfo.title.english}</title>
</svelte:head>
