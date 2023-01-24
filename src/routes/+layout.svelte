<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Sparticles from 'sparticles';
	import { onMount } from 'svelte';
	onMount(() => {
		let myElement = document.getElementById('Particles');
		let count = /Mobi|Android/i.test(navigator.userAgent) ? 0 : 500;
		console.log(count);
		let options = {
			composition: 'source-over',
			count: 1000,
			speed: 100,
			parallax: 50,
			direction: 360,
			xVariance: 50,
			yVariance: 50,
			rotate: true,
			rotation: 1,
			alphaSpeed: 10,
			alphaVariance: 1,
			minAlpha: 0,
			maxAlpha: 1,
			minSize: 100,
			maxSize: 100,
			style: 'fill',
			bounce: false,
			drift: 50,
			glow: 15,
			twinkle: false,
			color: ['#000000'],
			shape: 'circle',
			imageUrl: ''
		};
		let mySparticles = new Sparticles(myElement, options);
	});
</script>

<div class="relative  font-opensans">
	<div class=" inset-0 fixed" id="Particles" />
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
