<script>
	// FIXME: ASK tommy about particles in onmount
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
		let mySparticles = new Sparticles(myElement, options);
	});
</script>



				<slot />
