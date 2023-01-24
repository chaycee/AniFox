<script>
	import { onMount } from 'svelte';
	export let animeInfo;

	console.log(animeInfo);
	onMount(() => {
		const buttons = document.querySelectorAll('[role="tab"]');
		buttons.forEach(function (button) {
			button.addEventListener('click', function () {
				buttons.forEach((b) => {
					if (b === button) {
						b.setAttribute('aria-selected', true);
					} else {
						b.setAttribute('aria-selected', false);
					}
				});
				let target = button.getAttribute('aria-controls');
				document.getElementById(target).classList.remove('hidden');
				buttons.forEach((b) => {
					if (b !== button) {
						let target = b.getAttribute('aria-controls');
						document.getElementById(target).classList.add('hidden');
					}
				});
			});
		});
	});
</script>

<!-- TODO: you can reduce javascript here by checking aria-selected: in tailwind to set visible and hidden by default -->
<div class="relative mt-4">
	<!-- Nav Tabs -->
	<!--
	  aria-selected
		Set value to 'true' when a tab button is clicked (set others to 'false')
	-->
	<div class="flex items-center space-x-1 md:space-x-2 text-sm ">
		<button
			type="button"
			id="overview-tab"
			role="tab"
			aria-controls="overview-tab-pane"
			aria-selected="true"
			class="grow px-3 md:px-5 py-2.5 font-medium transition flex items-center justify-center space-x-2 rounded-md text-gray-400 border-b-2 border-solid border-x-0 border-t-0 border-transparent aria-selected:border-red-300 active:border-red-300 focus:border-border-300 hover:text-rose-600  focus:text-red-300 focus:font-semibold"
		>
			Overview
		</button>
		<button
			type="button"
			id="related-tab"
			role="tab"
			aria-controls="related-tab-pane"
			aria-selected="false"
			class="grow px-3 md:px-5 py-2.5 font-medium transition flex items-center justify-center space-x-2 rounded-md  text-gray-400 border-b-2 border-solid border-x-0 border-t-0 border-transparent aria-selected:border-red-300 hover:text-rose-600  focus:text-red-300 focus:font-semibold"
		>
			Related
		</button>
		<button
			type="button"
			id="recommendations-tab"
			role="tab"
			aria-controls="recommendations-tab-pane"
			aria-selected="false"
			class="grow px-3 md:px-5 py-2.5 font-medium transition flex items-center justify-center space-x-2 rounded-md text-gray-400 border-b-2 border-solid border-x-0 border-t-0 border-transparent aria-selected:border-red-300 hover:text-rose-600  focus:text-red-300 focus:font-semibold"
		>
			Recommendations
		</button>
	</div>
	<!-- END Nav Tabs -->

	<!-- Tab Content -->
	<!--
	  Remove 'hidden' class from the active tab content div when its related button is clicked (add 'hidden' class to others)
	-->
	<div class="py-">
		<!-- Overview Tab -->

		<div class="relative">
			<div
				class=" absolute w-full h-full bg-gray-700 bg-opacity-60 backdrop-blur-lg drop-shadow-lg"
			/>
			<div
				id="overview-tab-pane"
				class="relative px-2 py-2 text-sm font- flex flex-col gap-2"
				tab="tabpanel"
				aria-labelledby="overview-tab"
				tabindex="0"
			>
				<article class=" h-28 overflow-scroll text-slate-200 text-left">
					<h4 class="text-slate-200 ">Overview:</h4>
					<p class="text-slate-500 text-sm font-thin">
						{animeInfo.description.replace(/<[^>]*>?/gm, '')}
					</p>
				</article>
				<div class="">
					<span class="gap-2 mb-2 font-extrabold">Japanese: </span>
					<span class="font-extralight">{animeInfo.title.native}</span>
				</div>
				<div>
					<span class="gap-2 mb-2 font-extrabold">Synonyms: </span>
					<span class="font-extralight">{animeInfo.synonyms}</span>
				</div>
				<div>
					<span class="gap-2 mb-2 font-extrabold">Aired: </span>
					<span class="font-extralight"
						>    {[animeInfo.startDate.year, new Intl.DateTimeFormat('en-US', {month: 'long'}).format(new Date(2022, animeInfo.startDate.month-1, 1)), animeInfo.startDate.day].join(" ")} to {[animeInfo.endDate.year, new Intl.DateTimeFormat('en-US', {month: 'long'}).format(new Date(2022, animeInfo.endDate.month-1, 1)), animeInfo.endDate.day].join(" ")}  </span
					>
				</div>
				<div>
					<span class="gap-2 mb-2 font-extrabold">Status: </span>
					<span class="font-extralight">{animeInfo.status}</span>
				</div>
				<div>
					<span class="gap-2 mb-2 font-extrabold">genres: </span>
					<span class="font-normal ">
						{#each animeInfo.genres as genre}
						<div class="font-extralight inline-flex px-2 py-1 leading-4 text-xs rounded-full text-gray-200 border-[1px] border-red-400  ml-1">{genre}</div>
						{/each}
					</span>
				</div>
				<div>
					<span class="gap-2 mb-2 font-extrabold">Studios: </span>
					<span class="font-extralight">{animeInfo.studios}</span>
				</div>
				<!-- <div class=" flex gap-2 mb-2 ">Aired:</div>
				<div class=" flex gap-2 mb-2 ">Status:</div>
				<div class="  flex gap-2 mb-2 ">Genres:</div>
				<div class=" flex gap-2 mb-2 ">Studios:</div>
				<div class="  flex gap-2 mb-2 ">Producers:</div> -->
			</div>
		</div>
		<!-- END Overview Tab -->

		<!-- Related Tab -->
		<div class="related-wrapper">
			<div
				class="hidden"
				id="related-tab-pane"
				tab="tabpanel"
				aria-labelledby="related-tab"
				tabindex="0"
			>
				<h4 class="text-lg font-bold mb-2">Profile Title</h4>
				<p class="text-sm leading-relaxed text-gray-700">
					Integer sed dolor erat. Fusce erat ipsum, varius vel euismod sed, tristique et lectus?
					Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida
					sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis
					scelerisque? Proin rhoncus dui at ligula vestibulum ut facilisis ante sodales! Suspendisse
					potenti. Aliquam tincidunt sollicitudin sem nec ultrices. Sed at mi velit. Ut egestas
					tempor est, in cursus enim venenatis eget! Nulla quis ligula ipsum.
				</p>
			</div>
		</div>
		<!-- END Related Tab -->

		<!-- Recommendations Tab -->
		<div class="recommendations-wrapper">
			<div
				class="hidden"
				id="recommendations-tab-pane"
				tab="tabpanel"
				aria-labelledby="recommendations-tab"
				tabindex="0"
			>
				<h4 class="text-lg font-bold mb-2">Settings Title</h4>
				<p class="text-sm leading-relaxed text-gray-700">
					Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida
					sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis
					scelerisque? Proin rhoncus dui at ligula vestibulum ut facilisis ante sodales! Suspendisse
					potenti. Aliquam tincidunt sollicitudin sem nec ultrices. Sed at mi velit. Ut egestas
					tempor est, in cursus enim venenatis eget! Nulla quis ligula ipsum. Integer sed dolor
					erat. Fusce erat ipsum, varius vel euismod sed, tristique et lectus?
				</p>
			</div>
		</div>
		<!-- END Recommendations Tab -->
	</div>
	<!-- END Tab Content -->
</div>
<!-- END Tabs Component: Pills Justified -->
