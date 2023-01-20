<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
</script>

<div
	id="page-container"
	class="flex flex-col mx-auto w-full min-h-screen dark:bg-slate-900 bg-[#dde4e6]"
>
	<Navbar />
	<main id="page-content" class="flex flex-auto flex-col max-w-full">
		<div class="container xl:max-w-7xl mx-auto px-4 py-8 lg:px-8 lg:py-8 space-y-10 lg:space-y-16">
			<slot />
		</div>
	</main>

</div>
