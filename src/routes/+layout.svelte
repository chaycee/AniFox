<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Sparticles from 'sparticles';
	import { onMount } from 'svelte';
	onMount(() => {
		let myElement = document.getElementById('Particles');
		let count = /Mobi|Android/i.test(navigator.userAgent) ? 0 : 500;
		console.log(count);
		let
			options = {
				composition: 'source-over',
			count,
			speed: 13,
			parallax: 17.4,
			direction: 0,
			xVariance: 2.6,
			yVariance: 7.8,
			rotate: true,
			rotation: 1,
			alphaSpeed: 21,
			alphaVariance: 0,
			minAlpha: -2,
			maxAlpha: 2,
			minSize: 3,
			maxSize: 4,
			style: 'both',
			bounce: false,
			drift: 5.9,
			glow: 0,
			twinkle: false,
			color: ['#ed333b', '#e01b24', '#e01b24', '#ed333b', '#dc5a5b', '#f66151'],
			shape: 'circle',
			imageUrl: ''
			};
		let mySparticles = new Sparticles(myElement, options );
	});
</script>

<div class="relative  font-opensans">
	<div class=" inset-0 fixed"  id="Particles" />
	<div
		id="page-container"
		class="z-1 flex flex-col mx-auto w-full min-h-screen dark:bg-[#16151d] bg-[#dde4e6] "
	>
		<Navbar />

		<main id="page-content" class="flex flex-auto flex-col max-w-full font-opensans">
			<!-- TODO: xl:mx-0 pc? -->
			<div
				class="container xl:max-w-8xl mx-auto  lg:px-1  lg:py-8 space-y-16 lg:space-y-8 relative font-opensans"
			>
				<slot />
			</div>
		</main>
	</div>
</div>
