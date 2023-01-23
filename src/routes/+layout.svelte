<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Sparticles from 'sparticles';

	let sparticles,
		options = {
			composition: 'source-over',
			count: 799,
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

	function addSparticles(node) {
		new Sparticles(node, options);
	}
</script>

<div class="relative  font-opensans">
	<div class=" inset-0 fixed" use:addSparticles />
	<div
		id="page-container"
		class="z-1 flex flex-col mx-auto w-full min-h-screen dark:bg-[#16151d] bg-[#dde4e6] "
	>
		<Navbar />

		<main id="page-content" class="flex flex-auto flex-col max-w-full font-opensans">
			<div
				class="container xl:max-w-8xl mx-auto px-1 py-8 lg:py-8 space-y-16 lg:space-y-8 relative font-opensans"
			>
				<slot />
			</div>
		</main>
	</div>
</div>
