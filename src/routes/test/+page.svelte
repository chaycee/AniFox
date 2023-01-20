<script>
	import { onMount } from 'svelte';
	import OpenPlayerJS from 'openplayerjs';

	import 'openplayerjs/dist/openplayer.min.css';

	onMount(() => {
		document.querySelectorAll('.op-player__media').forEach((player) => {
			if (player.id === 'video3') {
				return;
			}
			const p = new OpenPlayerJS(player.id, {
				startTime: 10,
				startVolume: 0.5,
				controls: {
					layers: {
						left: ['play', 'time', 'volume'],
						middle: ['progress'],
						right: ['levels', 'captions', 'settings', 'fullscreen']
					}
				}
			});
			p.init();
		});
	});
</script>

<video class="op-player__media" id="video1" controls playsinline>
	<source
		src="https://cors.proxy.consumet.org/https://wwwx15.gofcdn.com/videos/hls/EtiimCKVPtb_ZNKCKTj7IA/1674241776/193284/5b9accdaf29e09ff95a707901618bd49/ep.1.1664990410.m3u8"
	/>
</video>
