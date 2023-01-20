<script>
	import { page } from '$app/stores';
</script>

<!-- Page Container -->
<div id="page-container" class="flex flex-col mx-auto w-full min-h-screen bg-gray-100">
	<!-- Page Content -->
	<main id="page-content" class="flex flex-auto flex-col max-w-full">
		<div class="bg-[#0f172a] min-h-screen flex items-center relative overflow-hidden">
			<!-- Left/Right Background -->
			<div
				class="absolute left-0 top-0 bottom-0 w-48 bg-[#0f172a] transform skew-x-6 -ml-48 md:-ml-28"
			/>
			<div
				class="absolute right-0 top-0 bottom-0 w-48 bg-[#0f172a] transform skew-x-6 -mr-48 md:-mr-28"
			/>
			<!-- END Left/Right Background -->

			<!-- Error Content -->
			<div
				class="text-center space-y-10 relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32"
			>
				<div>
					<div class="text-6xl md:text-9xl font-extrabold mb-10 md:mb-20 inline-block relative">
						<div class="absolute inset-0 border-4 border-orange-50 animate-ping" />
						<span
							class="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 relative"
						>
							{$page.status}
						</span>
					</div>
					<h2 class="text-3xl md:text-4xl font-extrabold mb-4">Error Occured</h2>
					<h3
						class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto"
					>
						{$page.error.message}
					</h3>
				</div>
				<a
					href="../"
					class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded  bg-[#5145cd] text-gray-800 shadow-sm hover:text-gray-800 hover:bg-[#473db8] border-none hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25   active:shadow-none"
				>
					<svg
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						class="opacity-50 hi-solid hi-arrow-left inline-block w-5 h-5"
						><path
							fill-rule="evenodd"
							d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
							clip-rule="evenodd"
						/></svg
					>
					<span>Back to Home</span>
				</a>
			</div>
			<!-- END Error Content -->
		</div>
	</main>
	<!-- END Page Content -->
</div>
<!-- END Page Container -->
