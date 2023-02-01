<script>
	import { onMount } from 'svelte';
	import OpenPlayerJS from 'openplayerjs';
	import Hls from 'hls.js';
	export let source;
	let test;
	$: test;
	$: console.log(source);
	const proxy = 'https://cors.consumet.stream/';
	onMount(async () => {
		const response = await fetch(
			`https://api.consumet.org/meta/anilist/watch/${source.episodes[0].id}?provider=zoro`
		);
		test = await response.json();

		const player = new OpenPlayerJS('video', {
			width: '60%',
			height: '70%',
			controls: {
				alwaysVisible: false,
				layers: {
					left: ['play', 'time', 'volume'],
					middle: ['progress'],
					right: ['captions', 'settings', 'fullscreen']
				}
			}
		});
		player.init().then(() => {
			player.src = `https://cors.consumet.stream/${test.sources[3].url}`;
			var track = document.createElement('track');
			track.kind = 'captions';
			track.label = 'English captions';
			track.srclang = 'en';
            track.title = 'English caption'
			track.src = `https://cors.consumet.stream/${test.subtitles[1].url}`;


			player.addCaptions(track);

			player.load();

			try {
				player.play();
			} catch (err) {
				throw new Error('error');
			}
		});
	});
	$: console.log(test);
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/openplayerjs@latest/dist/openplayer.min.css"
	/>
</svelte:head>
<div class="flex">
	<video class="op-player__media " id="video" controls playsinline>
        <!-- <source src="https://diqvirsbuges6.cloudfront.net/cases/3916-2/interview/bank_00.m3u8"> -->
		<!-- <track kind="captions" src="https://cors.consumet.stream/{test.subtitles[0].url}" srclang="en" label="English" /> -->
	</video>
	<div class="grow border-2">test</div>
</div>
