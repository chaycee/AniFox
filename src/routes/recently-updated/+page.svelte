<script>
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);
	let proxy = 'https://cors.consumet.stream/'

</script>

<section class="space-y-6 py-6 px-2 text-white max-w-8xl">
	{#each data.popular as card}
	<img src="{card.image}" alt="" class="w-44 ">
	{/each}
</section>
<style>

</style>