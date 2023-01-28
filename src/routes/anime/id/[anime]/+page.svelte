<script>
	/** @type {import('./$types').PageData} */
	export let data;

	$:({ animeInfo } = data);
	$:console.log(animeInfo)
</script>

<svelte:head>
	<title>{animeInfo.title.english}</title>
</svelte:head>
