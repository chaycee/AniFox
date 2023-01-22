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
			minSize: 1,
			maxSize: 4,
			style: 'both',
			bounce: false,
			drift: 5.9,
			glow: 0,
			twinkle: false,
			color: ['#ffffff', '#68e8f6', '#3bd4f5', '#017a98', '#017a98', '#017a98'],
			shape: 'circle',
			imageUrl: ''
		};

	function addSparticles(node) {
		new Sparticles(node, options);
	}
</script>

<div class="relative ">
	<div class=" inset-0 fixed" use:addSparticles />
	<div
		id="page-container"
		class="z-1 flex flex-col mx-auto w-full min-h-screen dark:bg-slate-900 bg-[#dde4e6] "
	>
		<Navbar />

		<main id="page-content" class="flex flex-auto flex-col max-w-full ">
			<div
				class="container xl:max-w-8xl mx-auto px-4 py-8 lg:py-8 space-y-16 lg:space-y-16 relative"
			>
				<slot />
			</div>
		</main>
	</div>
</div>
