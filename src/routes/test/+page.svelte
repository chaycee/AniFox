<script>
	import { onMount } from 'svelte';

	import 'vidstack/styles/base.css';
	// the following styles are optional - remove to go headless.
	import 'vidstack/styles/ui/buttons.css';
	import 'vidstack/styles/ui/sliders.css';
	import { defineCustomElements } from 'vidstack/elements';

	onMount(() => {
		defineCustomElements();
	});
</script>

<vds-media>
	<!-- remove `controls` attribute if you're designing a custom UI -->
	<vds-hls-video controls poster="https://media-files.vidstack.io/poster.png">
	  <video src="https://cors.proxy.consumet.org/https://c-an-ca4.betterstream.cc:2223/hls-playback/91e47a7e9a3eb23c56ed059835c5b71b3fcaae9c30a4cfda376f4a8ffdf655b3663be4db55fb646d01bce131d5ad152b6f8a341ee64631f79abf9cc40ee280ac8b6304db92a91329164e71d29d629656bd96cd1147ad405d2da2d05e6046d8b75542a4434db7fa449e5136fde9d9c55a773e2d8169124e65d25e3465fe6c315e2dbfee31944937eca48e82686364bd7a/index-f3-v1-a1.m3u8" preload="none"></video>
	</vds-hls-video>
  </vds-media>