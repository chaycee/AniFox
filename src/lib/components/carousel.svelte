<script>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/themes/splide-default.min.css';
    export let data;
    $: data;
</script>
<div
	class=" w-full h-full flex items-center justify-center rounded-xl text-gray-400  mx-auto max-w-8xl"
>
	<Splide
		aria-label="My Favorite Images"
		class="rounded-3xl w-full h-full hidden md:block"
		options={{
			type: 'loop',
			perPage: 1,
			perMove: 1,
			gap: '1rem',
			autoplay: true,
			pauseOnHover: true,
			resetProgress: false,
			interval: 3000
		}}
	>
		{#each data.trending as item, i}
			{#if item.mappings.thevdb.artworks}
				<SplideSlide class="flex items-end relative">
					<img
						src={`https://images.weserv.nl/?url=cors.consumet.stream/${item.mappings.thevdb.artworks.backgrounds[0]}&w=1700&h=560&fit=cover&output=webp&af`}
						width="1700px"
						height="660px"
						class="rounded-3xl"
						alt="Anime Cover"
					/>
					<div
						class="absolute inset-0 rounded-3xl  flex flex-col justify-between bg-gradient-to-l from-transparent via-black/50 to-secondary/90"
					>
						<div class="text-white  m-auto ml-20">
							<article class="prose  lg:prose-base text-white">
								<h1 class="text-red-300">{item.title.english}</h1>

								<span>
									<div class="flex items-center gap-2  text-sm lg:text-base font-normal">
										<div class="flex items-center ">
											<svg
												class="hi-solid hi-clock inline-block w-4 h-4 opacity-75"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
												><path
													fill-rule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
													clip-rule="evenodd"
												/></svg
											>

											<span>{item.duration}m</span>
										</div>
										<div class="flex items-center">
											<svg
												class="hi-solid hi-calendar inline-block w-4 h-4 opacity-75"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
												><path
													fill-rule="evenodd"
													d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
													clip-rule="evenodd"
												/></svg
											>
											<span>{item.releaseDate}</span>
										</div>
										<div class="flex items-center">
											<svg
												class="hi-solid hi-play inline-block w-4 h-4 opacity-75"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
												><path
													fill-rule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
													clip-rule="evenodd"
												/></svg
											>
											<span>{item.type}</span>
										</div>
									</div>
								</span>
								<p class="w-[450px] text-left leading-5 line-clamp-6">
									{item.description.replace(/<[^>]*>?/gm, '')}
								</p>
								<!-- ... -->
								<div class="flex items-center justify-between w-96">
									<div class="text-white font-normal">Rating
									<span class="flex list-none">
										<li>
										  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
											<path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
										  </svg>
										</li>
										<li>
										  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
											<path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
										  </svg>
										</li>
										<li>
										  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
											<path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
										  </svg>
										</li>
										<li>
										  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
											<path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
										  </svg>
										</li>
										<li>
										  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
											<path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
										  </svg>
										</li>
									  </span>
									</div>
									<!-- genres -->
									<div class="font-normal h-full ">Genres
									<div class="flex flex-wrap mt-[6px]">
									  {#each item.genres.slice(0,3) as genre}
										<span class="text-xs text-gray-400 ">{genre}|</span>
									  {/each}
									</div>
								</div>
							</div>
							<button type="button" class="inline-flex mt-2 justify-center items-center space-x-2 rounded-md border font-semibold focus:outline-none px-4 py-2 leading-5 text-sm border-gray-200 bg-white text-black hover:text-black hover:bg-gray-200 hover:border-gray-800 focus:ring focus:ring-gray-500 focus:ring-opacity-50 active:bg-gray-100 active:border-gray-300">
								<svg class="bi bi-play inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/></svg>Watch Now
							  </button>
							</article>
						</div>
					</div>
				</SplideSlide>
			{/if}
		{/each}
	</Splide>
</div>