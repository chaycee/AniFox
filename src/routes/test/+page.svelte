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
				hls: {
					overrideNative: true,
					smoothQualityChange: true,
					startLevel: 0,
					fragLoadingTimeOut: 10000,
					fragLoadingMaxRetry: 2,
					lowBufferWatchdogPeriod: 0.5, // 0.5 seconds
					highBufferWatchdogPeriod: 3,
					capLevelToPlayerSize: true,
					// optimize buffering
					maxMaxBufferLength: 60,
					maxBufferLength: 60,
					maxBufferSize: 60 * 1000 * 1000,
					maxBufferHole: 0.5,
					// lower qualiry if video buffering
					
					maxLoadingDelay: 4,
					maxFragLookUpTolerance: 0.2,
					// seek
					maxSeekHole: 2,
					seekHoleNudgeDuration: 0.01,

				},
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
		src="https://cors.proxy.consumet.org/https://wwwx12.gofcdn.com/videos/hls/bUpU7rMtZie2t8KsiM8RPQ/1674246582/194011/9f11c469545a167de45769fe76e00090/ep.4.1666433492.m3u8"
	/>
</video>
