<script>
	import Carousel from '$lib/components/carousel.svelte';
	export let data;
	$:data;
</script>

<Carousel data={data} />

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
		{#each data.trending.slice(0,3) as card}
			<a
				data-sveltekit-preload-code="hover"
				href="/anime/id/{card.id}"
				class="group relative overflow-hidden aspect-w-16 aspect-h-10 bg-black/25 rounded-2xl transition hover:ring-4 hover:ring-red-500/50 active:opacity-75 active:ring-red-500/25"
			>
				<img
					class="object-cover h-full opacity-100"

					src="https://images.weserv.nl/?url=cors.proxy.consumet.org/{card.image}&output=webp&w=456&h=656&af"

					alt="trending anime"
				/>
				<div
					class="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-transparent  via-black/60 to-black"
				>
					<div class="p-4 flex items-end justify-start space-x-2" />
					<div class="px-4 py-5 flex items-end justify-between space-x-2">
						<div class="space-y-1">
							<h3 class="text-sm w-[99%] xl:text-base font-semibold  text-white">{card.title.english}</h3>
							<section class="text-sm font-semibold w-max text-slate-500">
								{card.releaseDate}
								{#each card.genres.slice(0, 3) as genre}
									<div
										class="font-semibold inline-flex px-2 py-[1px] leading-4 text-xs rounded text-[#dc5a5b] ml-2 bg-[#201e27]"
									>
										{genre}
									</div>
								{/each}
							</section>
						</div>

						<div
							class="flex absolute right-3 items-center justify-center w-10 h-10 rounded-full transition text-slate-400 bg-[#201e27] group-hover:bg-[#523343] group-hover:text-white group-hover:scale-110 group-active:scale-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="#dc5a5b"
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
