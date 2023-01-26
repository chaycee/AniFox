<script>
	import { onMount } from 'svelte';
	export let animeInfo;
	import {
		afterNavigate,
		beforeNavigate,
		disableScrollHandling,
		goto,
		invalidate,
		invalidateAll,
		preloadCode,
		preloadData
	} from '$app/navigation';
	$: animeInfo;
	const handleClick = (event) => {
		const button = event.target;
		const buttons = document.querySelectorAll('[role="tab"]');
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
	};
	const resetTab = () => {
		// Get the tab buttons and tab panes
		const buttons = document.querySelectorAll('[role="tab"]');
		const panes = document.querySelectorAll('[tab="tabpanel"]');

		// Loop through the buttons and set the aria-selected attribute of the overview tab to true and of the other tabs to false
		buttons.forEach((button) => {
			if (button.getAttribute('aria-controls') === 'overview-tab-pane') {
				button.setAttribute('aria-selected', true);
			} else {
				button.setAttribute('aria-selected', false);
			}
		});

		// Loop through the tab panes and show the overview tab and hide the other tabs
		panes.forEach((pane) => {
			if (pane.id === 'overview-tab-pane') {
				pane.classList.remove('hidden');
			} else {
				pane.classList.add('hidden');
			}
		});
	};
</script>

<!-- TODO: you can reduce javascript here by checking aria-selected: in tailwind to set visible and hidden by default -->
<div class="relative mt-4 w-full">
	<!-- Nav Tabs -->
	<!--
	  aria-selected
		Set value to 'true' when a tab button is clicked (set others to 'false')
	-->
	<div class="flex items-center space-x-1 md:space-x-2 text-sm ">
		<button
			on:click|preventDefault={handleClick}
			type="button"
			id="overview-tab"
			role="tab"
			aria-controls="overview-tab-pane"
			aria-selected="true"
			class="grow px-3 md:px-5 py-2.5 font-semibold transition flex items-center justify-center space-x-2 rounded-md text-gray-400 border-b-2 border-solid border-x-0 border-t-0 border-transparent aria-selected:border-red-300 active:border-red-300 focus:border-border-300 hover:text-rose-600  focus:text-red-300 focus:font-bold"
		>
			Overview
		</button>
		<button
			on:click|preventDefault={handleClick}
			type="button"
			id="related-tab"
			role="tab"
			aria-controls="related-tab-pane"
			aria-selected="false"
			class="grow px-3 md:px-5 py-2.5 font-semibold transition flex items-center justify-center space-x-2 rounded-md  text-gray-400 border-b-2 border-solid border-x-0 border-t-0 border-transparent aria-selected:border-red-300 hover:text-rose-600  focus:text-red-300 focus:font-bold"
		>
			Related
		</button>
		<button
			on:click|preventDefault={handleClick}
			type="button"
			id="recommendations-tab"
			role="tab"
			aria-controls="recommendations-tab-pane"
			aria-selected="false"
			class="grow px-3 md:px-5 py-2.5 font-semibold transition flex items-center justify-center space-x-2 rounded-md text-gray-400 border-b-2 border-solid border-x-0 border-t-0 border-transparent aria-selected:border-red-300 hover:text-rose-600  focus:text-red-300 focus:font-bold"
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
		<!-- FIXME: backdrop-blur-md -->
		<div class="relative">
			<div class=" absolute w-full h-full bg-gray-700 bg-opacity-100  " />
			<div
				id="overview-tab-pane"
				class="relative px-2 py-2  text-sm  flex flex-col gap-5 h-max"
				tab="tabpanel"
				aria-labelledby="overview-tab"
			>
				<article
					class=" h-28 xl:h-max overflow-scroll overflow-y-visible overflow-x-hidden xl:overflow-visible text-slate-200 text-left"
				>
					<h4 class="text-slate-200 ">Overview:</h4>
					<p class="text-slate-400 text-xs font-thin">
						{animeInfo.description.replace(/<[^>]*>?/gm, '')}
					</p>
				</article>
				<div class="">
					<span class="gap-2 mb-2 font-extrabold">Japanese: </span>
					<span class="  text-xs font-thin">{animeInfo.title.native}</span>
				</div>
				<div>
					<span class="gap-2 mb-2 font-extrabold">Synonyms: </span>
					<span class="text-xs font-thin">{animeInfo.synonyms}</span>
				</div>
				<div>
					<span class="gap-2 mb-2 font-extrabold">Aired: </span>
					<span class="font-thin  text-xs">
						{[
							animeInfo.startDate.year,
							new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
								new Date(2022, animeInfo.startDate.month - 1, 1)
							),
							animeInfo.startDate.day
						].join(' ')} to {[
							animeInfo.endDate.year,
							new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
								new Date(2022, animeInfo.endDate.month - 1, 1)
							),
							animeInfo.endDate.day
						].join(' ')}
					</span>
				</div>
				<div>
					<span class="gap-2 mb-2 font-extrabold">Status: </span>
					<span class="text-xs font-thin">{animeInfo.status}</span>
				</div>
				<div>
					<span class="gap-2 mb-2 font-extrabold">genres: </span>
					<span class="text-xs font-normal ">
						{#each animeInfo.genres as genre}
							<div
								class="font-extralight inline-flex px-2 py-1 leading-4 text-xs rounded-full text-gray-200 border-[1px] border-red-400  ml-1"
							>
								{genre}
							</div>
						{/each}
					</span>
				</div>
				<div>
					<span class="gap-2 mb-2 font-extrabold">Studios: </span>
					<span class=" text-xs font-thin">{animeInfo.studios}</span>
				</div>
			</div>
		</div>
		<!-- END Overview Tab -->

		<!-- Related Tab -->
		<div class="related-wrapper">
			<div class="relative">
				<div class=" absolute w-full h-full bg-gray-700 bg-opacity-70  " />
				<div
					class="hidden relative"
					id="related-tab-pane"
					tab="tabpanel"
					aria-labelledby="related-tab"
				>
					<section class="space-y-6 px-2 xl:px-0 ">
						<nav
							class="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-8 py-5"
						>
							<!-- Movie -->
							{#each animeInfo.relations.filter((ep) => ep.type === 'OVA' || ep.type === 'MOVIE') as relation}
								<a
									data-sveltekit-preload-code="hover"
									href="javascript:void(0)"
									class="group relative overflow-hidden aspect-w-3 aspect-h-4 bg-black/25 rounded-2xl transition hover:ring-4 hover:ring-red-500/50 active:opacity-75  "
								>
									<img
										class="object-cover "
										src="https://images.weserv.nl/?url=cors.proxy.consumet.org/{relation.image}&output=webp&w=250&h=350&fit=cover"
										loading="lazy"
										alt="recent episodes"
									/>
									<div
										class="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-transparent via-black/30 to-black "
									>
										<div class="p-4 flex items-center justify-start space-x-2" />
										<div class="px-4 py-5 flex items-end justify-between space-x-2">
											<div class="space-y-1">
												{#if relation.title.english !== null}
													<h3 class="text-sm xl:text-base font-normal text-white line-clamp-2 ">
														{relation.title.english}
													</h3>
												{:else}
													<h3 class="text-sm xl:text-base font-normal text-white line-clamp-2 ">
														{relation.title.romaji}
													</h3>
												{/if}
												<div class="text-sm font-normal text-slate-500">
													{relation.type}
												</div>
											</div>
										</div>
									</div>
								</a>
							{/each}
						</nav>
					</section>
				</div>
			</div>
		</div>
		<!-- END Related Tab -->

		<!-- Recommendations Tab -->
		<div class="recommendations-wrapper">
			<div class="relative">
				<div class=" absolute w-full h-full bg-gray-700 bg-opacity-70  " />
				<div
					class="hidden relative "
					id="recommendations-tab-pane"
					tab="tabpanel"
					aria-labelledby="recommendations-tab"
				>
					<section class="space-y-6 px-2 xl:px-0 ">
						<nav
							class="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-8 py-5"
						>
							<!-- Movie -->
							<!-- FIXME: proper way of reload data or make it faster -->
							{#each animeInfo.recommendations as relation}
								<a
									on:click={() => {
										invalidateAll();
										window.location.href = `/anime/id/${relation.id}`;

									}}

									data-sveltekit-preload-code="hover"
									class="group relative overflow-hidden aspect-w-3 aspect-h-4 bg-black/25 rounded-2xl transition hover:ring-4 hover:ring-red-500/50 active:opacity-75  "
								>
									<img
										class="object-cover "
										src="https://images.weserv.nl/?url=cors.proxy.consumet.org/{relation.image}&output=webp&w=250&h=350&fit=cover"
										loading="lazy"
										alt="recent episodes"
									/>
									<div
										class="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-transparent via-black/30 to-black "
									>
										<div class="p-4 flex items-center justify-start space-x-2" />
										<div class="px-4 py-5 flex items-end justify-between space-x-2">
											<div class="space-y-1">
												{#if relation.title.english !== null}
													<h3 class="text-sm xl:text-base font-normal text-white line-clamp-2 ">
														{relation.title.english}
													</h3>
												{:else}
													<h3 class="text-sm xl:text-base font-normal text-white line-clamp-2 ">
														{relation.title.romaji}
													</h3>
												{/if}
												<div class="text-sm font-normal text-slate-500">
													{relation.type}
												</div>
											</div>
										</div>
									</div>
								</a>
							{/each}
						</nav>
					</section>
				</div>
			</div>
		</div>
		<!-- END Recommendations Tab -->
	</div>
	<!-- END Tab Content -->
</div>

<!-- END Tabs Component: Pills Justified -->
<style>
	#overview-tab::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		background-color: #12122b;
		border-radius: 10px;
	}

	#overview-tab::-webkit-scrollbar {
		width: 10px;
		background-color: #f5f5f5;
	}

	#overview-tab::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-image: -webkit-gradient(
			linear,
			left bottom,
			left top,
			color-stop(0.44, rgb(122, 153, 217)),
			color-stop(0.72, rgb(73, 125, 189)),
			color-stop(0.86, rgb(28, 58, 148))
		);
	}
</style>
