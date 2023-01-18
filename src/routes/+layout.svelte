<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
</script>

<div
	id="page-container"
	class="flex flex-col mx-auto w-full min-h-screen dark:bg-slate-900 bg-[#dde4e6]"
>
	<Navbar />
	
			<slot />


</div>
