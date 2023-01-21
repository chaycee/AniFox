<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Sparticles from 'sparticles';
	

	let sparticles,
		options = {
			composition: 'source-over',
			count: 221,
			speed: 1.2,
			parallax: 1,
			direction: 180,
			xVariance: 2,
			yVariance: 2,
			rotate: true,
			rotation: 1,
			alphaSpeed: 10,
			alphaVariance: 1,
			minAlpha: 0,
			maxAlpha: 1,
			minSize: 1,
			maxSize: 10,
			style: 'fill',
			bounce: false,
			drift: 1,
			glow: 0,
			twinkle: false,
			color: ['#729fcf'],
			shape: 'diamond',
			imageUrl: null
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
				class="container xl:max-w-7xl mx-auto px-4 py-8 lg:px-4 lg:py-8 space-y-16 lg:space-y-16 relative"
			>
				<slot />
			</div>
		</main>
	</div>
</div>
