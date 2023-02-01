<script>
	import { onMount } from 'svelte';
	import OpenPlayerJS from 'openplayerjs';
	import Hls from 'hls.js';
	export let source;
	let test;
	$: test;
	$: console.log(source);
	let russian;
	$: console.log(russian);
	const proxy = 'https://cors.consumet.stream/';
	onMount(async () => {
		const response = await fetch(
			`https://api.consumet.org/meta/anilist/watch/${source.episodes[0].id}?provider=zoro`
		);
		test = await response.json();

		const player = new OpenPlayerJS('video', {
			width: '60%',
			height: '70%',
			detachMenus: true,
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
			track.title = 'English caption';
			track.src = `https://cors.consumet.stream/${test.subtitles[1].url}`;

			for (let i = 0; i < test.subtitles.length; i++) {
				if (test.subtitles[i].lang === 'Russian') {
					russian = test.subtitles[i];
					var track2 = document.createElement('track');
					track2.kind = 'captions';
					track2.label = 'Russian captions';
					track2.srclang = 'ru';
					track2.title = 'Russian caption';

					track2.src = `https://cors.consumet.stream/${russian.url || test.subtitles[1].url}`;
					player.addCaptions(track2);
				}
			}

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
		<!-- <track kind="captions" src="https://cors.consumet.stream/{test.subtitles[0].url}" srclang="en" label="English" /> -->
	</video>
	<div class="grow border-2">test</div>
</div>
