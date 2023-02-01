<script>
	import { onMount } from 'svelte';
	import OpenPlayerJS from 'openplayerjs';
	import Hls from 'hls.js';
	export let source;
	$: source = source;
	let player = null;
	const proxy = 'https://cors.consumet.stream/';
	async function streamEpisode(id) {
		const response = await fetch(`https://api.consumet.org/meta/anilist/watch/${id}?provider=zoro`);
		const streamingSrc = await response.json();
		player.src = `${proxy}${streamingSrc.sources[3].url}`;
		console.log(streamingSrc.sources[3]);
		// english subtitles
		const englishSubFilter = streamingSrc.subtitles.filter((sub) => sub.lang === 'English')[0];
		var englishSub = document.createElement('track');
		englishSub.srclang = 'en';
		englishSub.src = `${proxy}${englishSubFilter.url}`;
		player.addCaptions(englishSub);
		// russian subtitles
		const russianSubFilter = streamingSrc.subtitles.filter((sub) => sub.lang === 'Russian')[0];
		if (russianSubFilter) {
			var russianSub = document.createElement('track');
			russianSub.label = 'Russian';
			russianSub.srclang = 'ru';
			russianSub.src = `${proxy}${russianSubFilter.url}`;
			player.addCaptions(russianSub);
		}

		player.load();
	}
	// fix subs background styles doesnt apply
	onMount(async () => {
		const response = await fetch(
			`https://api.consumet.org/meta/anilist/watch/${source.episodes[0].id}?provider=zoro`
		);
		const firstEp = await response.json();
		console.log(firstEp);
		player = new OpenPlayerJS('video', {
			mode: 'responsive',
			detachMenus: true,
			startVolume: 0.5,
			width: '70%',
			height: '60%',
			controls: {
				layers: {
					left: ['play', 'time', 'volume'],
					middle: ['progress'],
					right: ['captions', 'settings', 'levels', 'fullscreen']
				}
			}
		});
		// add others with foreach
		player.src = `${proxy}${firstEp.sources[3].url}`;
		const englishSubFilter = firstEp.subtitles.filter((sub) => sub.lang === 'English')[0];
		var englishSub = document.createElement('track');
		englishSub.srclang = 'en';

		console.log(englishSub);
		englishSub.src = `${proxy}${englishSubFilter.url}`;
		player.addCaptions(englishSub);
		// russian subtitles
		const russianSubFilter = firstEp.subtitles.filter((sub) => sub.lang === 'Russian')[0];
		if (russianSubFilter) {
			var russianSub = document.createElement('track');
			russianSub.label = 'Russian';
			russianSub.srclang = 'ru';
			russianSub.src = `${proxy}${russianSubFilter.url}`;
			player.addCaptions(russianSub);
		}
		player.init();
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/openplayerjs@latest/dist/openplayer.min.css"
	/>
</svelte:head>
<section class="space-y-6 py-6 px-2 text-white     ">
	<div class="flex">
		<!-- svelte-ignore a11y-media-has-caption -->
		<video class="op-player op-player__media" id="video" controls playsinline />
		<div class="grow border-2 w-32">
			{#each source.episodes as ep, i}
				<button
					data-sveltekit-preload-data="hover"
					on:click={streamEpisode(ep.id)}
					type="button"
					id="src-btn"
					class="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-3 py-2 leading-6 border-red-200 bg-red-200 text-red-700 hover:text-red-700 hover:bg-red-300 hover:border-red-300 focus:ring focus:ring-red-500 focus:ring-opacity-50 active:bg-red-200 active:border-red-200"
				>
					E{i}
				</button>
			{/each}
		</div>
	</div>
</section>

<style>

</style>
