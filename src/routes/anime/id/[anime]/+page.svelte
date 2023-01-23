<script>
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);
</script>

<svelte:head>
	<title>{data.details.title.english}</title>
</svelte:head>
<!-- Page Container -->
<div id="page-container" class="flex flex-col mx-auto w-full min-h-screen bg-transparent">
	<!-- Page Content -->
	<main id="page-content" class="flex flex-auto flex-col max-w-full">
	  <!-- Page Section -->
	  <div class="max-w-10xl p-4 lg:p-8 w-full">
		<div class="flex flex-col lg:flex-row">
		  <!-- Anime Details -->
		  <div class="flex flex-col w-full lg:w-1/3">
			test



	  </div>
	  <!-- END Page Section -->
	</main>
	<!-- END Page Content -->
  </div>
  <!-- END Page Container -->