<script>
	import Carousel from '$lib/components/carousel.svelte';
	export let data;
	$: data;
</script>

<Carousel {data} />

<section class="space-y-6 py-6 px-2 text-white mx-auto max-w-8xl">
	<div class="flex items-center justify-between ">
		<h2 class="text-slate-400 font-semibold text-xl">Trending Anime</h2>
		<a
			data-sveltekit-preload-code="hover"
			href="javascript:void(0)"
			class="group flex items-center space-x-1 text-sm transition dark:text-slate-400 dark:hover:text-white active:text-slate-400"
		>
			<span>See All</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="w-5 h-5 opacity-50 transition ease-out group-hover:opacity-100 group-active:translate-x-2"
			>
				<path
					fill-rule="evenodd"
					d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>
	</div>
	<nav class="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 ">
		<!-- Movie -->
		{#each data.trending.slice(0, 3) as card}
			<a
				data-sveltekit-preload-code="hover"
				href="/anime/id/{card.id}"
				class="group relative overflow-hidden aspect-w-16 aspect-h-10 bg-black/25 rounded-2xl transition hover:ring-4 hover:ring-purple-500/50 active:opacity-75 active:ring-purple-500/25"
			>
				<img
					class="object-cover rounded-2xl h-full opacity-100 transform transition duration-300 ease-out group-hover:scale-105 group-focus:scale-105 group-focus-within:scale-105"
					src="https://images.weserv.nl/?url=cors.consumet.stream/{card.image}&output=webp&w=500&h=700"
					alt="trending anime"
				/>


				<div
					class="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-transparent  via-black/60 to-black"
				>
					<div class="p-4 flex items-end justify-start space-x-2" />
					<div class="px-4 py-5 flex items-end justify-between space-x-2">
						<div class="space-y-1">
							<h3 class="text-sm  xl:text-[15px] font-sans font-semibold  text-white w-[99%]">
								{card.title.english}
							</h3>
							<!-- FIXME: procentage on md breakpoint -->
							<section class="text-sm font-semibold w-max text-slate-500">
								{card.releaseDate}
								{#each card.genres.slice(0, 3) as genre}
									<div
										class="font-semibold inline-flex px-2 py-[1px] leading-4 text-xs rounded text-themePurple ml-2 bg-[#201e27]"
									>
										{genre}
									</div>
								{/each}
							</section>
						</div>

						<div
							class=" hidden xl:flex absolute right-3 items-center justify-center w-10 h-10 rounded-full transition text-slate-400 bg-secondary group-hover:bg-[#312e30] group-hover:text-white group-hover:scale-110 group-active:scale-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="#636AF2"
								class="hi-mini hi-play w-5 h-5 translate-x-0.5"
							>
								<path
									d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
								/>
							</svg>
						</div>
					</div>
				</div>
			</a>
			<!-- END Movie -->
		{/each}
	</nav>
</section>
<section class="space-y-6 py-4 px-2 text-white mx-auto max-w-8xl">

	<nav class="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20 ">

		<div
		class="bg-[#181717] flex flex-col  text-2xl font-normal overflow-hidden bg-black/25 rounded-[40px] p-4 gap-2"
	>
		<div class="h-16  flex justify-center  w-full  dark:text-slate-400">Most Popular</div>
		{#each data.popular.slice(0,5) as item}
		<div class="t">
		<div class="w-full  px-5  flex mb-2">
			<a data-sveltekit-preload-data='hover' href="/anime/id/{item.id}" >
			<img
				src="https://images.weserv.nl/?url=cors.consumet.stream/{item.image}&output=webp&w=150"
				alt=""
				loading="lazy"
				class="w-30 h-32"
			/>
		</a>
			<div class="m-2 flex flex-col justify-between">
				<div class="top-part">
					<a data-sveltekit-preload-data='hover' href='/anime/id/{item.id}' class=" font-bold text-sm lg:text-base hover:text-gray-400">{item.title.english}</a>

					<div class="flex items-center">
						<svg
							aria-hidden="true"
							class="w-9 h-8 text-purple-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><title>First star</title><path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/></svg
						>

						<p class="ml-2 text-sm font-bold text-gray-100">{parseInt(item.mappings.kitsu.attributes.averageRating)}%</p>
					</div>
				</div>
				<div id="under-section " class="text-sm  text-gray-300 flex gap-2">
					<span>{item.duration} min</span><span>{item.totalEpisodes} Ep</span><span>{item.status}</span>
				</div>
			</div>

		</div>
		<div class="border-b-[0.5px] relative mx-auto w-[615px] m-2 border-gray-700"></div>
	</div>
		{/each}

	</div>
	<div
			class="bg-[#181717] flex flex-col  text-2xl font-normal overflow-hidden bg-black/25 rounded-[40px] p-4 gap-2"
		>
			<div class="h-16  flex justify-center  w-full  dark:text-slate-400">Top Airing</div>
			{#each data.trending.slice(3,8) as item}
			<div class="t">
			<div class="w-full  px-5  flex mb-2">
				<a data-sveltekit-preload-data='hover' href="/anime/id/{item.id}" >
				<img
					src="https://images.weserv.nl/?url=cors.consumet.stream/{item.image}&output=webp&w=150"
					alt=""
					loading="lazy"
					class="w-30 h-32"
				/>
			</a>
				<div class="m-2 flex flex-col justify-between">
					<div class="top-part">
						<a data-sveltekit-preload-data='hover' href='/anime/id/{item.id}' class=" font-bold text-sm lg:text-base hover:text-gray-400">{item.title.english}</a>

						<div class="flex items-center">
							<svg
								aria-hidden="true"
								class="w-9 h-8 text-purple-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><title>First star</title><path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/></svg
							>

							<p class="ml-2 text-sm font-bold text-gray-100">{parseInt(item.mappings.kitsu.attributes.averageRating)}%</p>
						</div>
					</div>
					<div id="under-section " class="text-sm  text-gray-300 flex gap-2">
						<span>{item.duration} min</span><span>{item.totalEpisodes} Ep</span><span>{item.status}</span>
					</div>
				</div>

			</div>
			<div class="border-b-[0.5px] relative mx-auto w-[615px] m-2 border-gray-700"></div>
		</div>
			{/each}

		</div>
	</nav>
</section>
<section class="space-y-6 py-6 px-2 text-white mx-auto max-w-8xl">
	<div class="flex items-center justify-between">
		<h2 class="dark:text-slate-400 font-semibold text-xl">Recent Episodes</h2>
		<a
			data-sveltekit-preload-code="hover"
			href="javascript:void(0)"
			class="group flex items-center space-x-1 text-sm transition dark:text-slate-400 dark:hover:text-white active:text-slate-400"
		>
			<span>See All</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="w-5 h-5 opacity-50 transition ease-out group-hover:opacity-100 group-active:translate-x-2"
			>
				<path
					fill-rule="evenodd"
					d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>
	</div>

	<nav class="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 xl:grid-cols-7 gap-4 lg:gap-8">
		<!-- Movie -->
		{#each data.recent.results.filter((ep) => ep.title.english ) as card}

			<a
				data-sveltekit-preload-code="hover"
				href="/anime/id/{card.id}?ep={card.episodeId}"
				class="group relative overflow-hidden aspect-w-3 aspect-h-4 bg-black/25 rounded-2xl transition hover:ring-4 hover:ring-red-500/50 active:opacity-75"
			>
				<img
					class="object-cover rounded-2xl"
					src="https://images.weserv.nl/?url=cors.consumet.stream/{card.image}&output=webp"
					loading="lazy"
					alt="recent episodes"
				/>
				<div
					class="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-transparent via-black/30 to-black"
				>
					<div class="p-4 flex items-center justify-start space-x-2">
						<div
							class="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded-md text-themePurple bg-primary shadow-sm
							opacity-100 shadow-black"
						>
							<span>Ep {card.episodeNumber}</span>
						</div>
					</div>
					<div class="px-4 py-5 flex items-end justify-between space-x-2">
						<div class="space-y-1">
							<h3 class="text-sm xl:text-base font-normal text-white line-clamp-2 ">{card.title.english}</h3>
							<div class="text-sm font-normal text-slate-500">
								{card.type}
							</div>
						</div>
					</div>
				</div>
			</a>
			<!-- END Movie -->
		{/each}
	</nav>
</section>