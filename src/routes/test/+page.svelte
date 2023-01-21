<script>
	import { onMount } from 'svelte';

	import 'vidstack/styles/base.css';
	// the following styles are optional - remove to go headless.
	import 'vidstack/styles/ui/buttons.css';
	import 'vidstack/styles/ui/sliders.css';
	import { defineCustomElements } from 'vidstack/elements';
	import {
		MediaCanPlayEvent,
		MediaPlayEvent,
		MediaStartedEvent,
		MediaTimeUpdateEvent
	} from 'vidstack';
	onMount(() => {
		defineCustomElements();
		const provider = document.querySelector('vds-hls-video');
		provider.addEventListener('play', (event) => {
			// request events are attached to media events.
			const playRequestEvent = event.request;
			console.log('play request was satisfied.');
		});
	});

	import 'openplayerjs/dist/openplayer.min.css';
</script>

<vds-media>
	<!-- remove `controls` attribute if you're designing a custom UI -->
	<vds-hls-video controls poster="https://media-files.vidstack.io/poster.png" tabindex="0">
		<video
			src="https://wwwx15.gofcdn.com/videos/hls/tmzDnXFi176kQyaSX-jqlw/1674316051/193284/5b9accdaf29e09ff95a707901618bd49/ep.1.1664990410.1080.m3u8"
			preload="none"
		/>
	</vds-hls-video>
</vds-media>
