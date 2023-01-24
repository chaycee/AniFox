<script>
	export let data;
	let pagination;
	$: ({ popular } = data);
	$: ({ trending } = data);
	$: ({ recent } = data);
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/themes/splide-skyblue.min.css';
	import { onMount } from 'svelte';
	onMount(()=>{
		pagination = /Mobi|Android/i.test(navigator.userAgent) ? false : true;
	})
</script>

<svelte:head>
	<title>Streamsy</title>
</svelte:head>
<div
				class="container xl:max-w-8xl mx-auto  lg:px-1  lg:py-8 space-y-16 lg:space-y-8 relative font-opensans"
			>
<Splide
	aria-label="My Favorite Images"
	class=" "
	options={{
		rewind: true,
		height: 360,

		cover: true,
		autoplay: true,
		pauseOnHover: false,
		pauseOnFocus: false,
		trimSpace: false,
		perPage: 1,
		easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
		perMove: 1,
		interval: 4000,
		arrows: false,
		pagination,

	}}
>
	<!-- TODO: Change cover to image on mobile view  -->
	<!-- TODO: Reduce the mobile slider in -->
	{#each popular.results as data}
		<SplideSlide class="flex items-end ">
			<img src={data.cover} alt="Ima" class="" loading="lazy" />

			<div
				class="absolute inset-0 flex flex-col justify-between bg-gradient-to-bl from-transparent via-black/5 to-black "
			/>
			<div
				class="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-transparent via-black/5 to-black "
			/>
			<div
				class="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-transparent via-black/5 to-black "
			/>
			<!-- Card -->
			<div
				class="flex flex-col mb-1 xl:mb-5 rounded shadow-sm text-white overflow-hidden z-1 opacity-75 "
			>
				<!-- Card Header -->
				<div class="px-5 lg:px-6 w-full ">
					<h3 class="lg:font-bold font-extrabold text-white text-lg lg:text-3xl">
						{data.title.english}
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

								<span>{data.duration}m</span>
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
								<span>{data.releaseDate}</span>
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
								<span>{data.type}</span>
							</div>
						</div>
					</h3>
				</div>
				<!-- END Card Header -->

				<!-- Card Body -->
				<div class="px-5 py-2 xl:p-6 grow lg:w-[800px] h-20 text-left xl:mb-3">
					<div class=" pb-1  xl:pb-1 text-left line-clamp-3 lg:line-clamp-3 font-extralight xl:line-clamp-4">
						{data.description.replace(/<[^>]*>?/gm, '')}
					</div>
				</div>
				<!-- END Card Body -->

				<!-- Card Footer -->
				<div class="xl:py-4  px-5 lg:px-6 w-full text-sm text-gray-100 ">
					<!-- END Card Footer -->
					<a
						data-sveltekit-preload-code='hover'
						href="/anime/id/{data.id}"
						class=" mb-4 mt-2 xl:mt-5  xl:mb-0 gap-1 inline-flex justify-center items-center space-x-2 rounded-full border font-semibold focus:outline-none px-6 py-2 leading-6 border-[#442b38] bg-[#442b38] text-red-500 hover:text-red-400 hover:bg-[#523343] hover:border-[#442b38] focus:ring focus:ring-red-500 focus:ring-opacity-50 active:bg-[#442b38] active:border-[#442b38]"
					>
						<svg
							class="hi-solid hi-play inline-block w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
								clip-rule="evenodd"
							/></svg
						>Watch Now
					</a>
				</div>
				<!-- END Card -->
			</div></SplideSlide
		>
	{/each}
</Splide>
<section class="space-y-6 px-2 xl:px-0">
	<div class="flex items-center justify-between">
		<h2 class="dark:text-slate-400 font-semibold text-xl">Trending Anime</h2>
		<a
		data-sveltekit-preload-code='hover'
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
		{#each trending.results as card}
			<a
			data-sveltekit-preload-code='hover'
				href="/anime/id/{card.id}"
				class="group relative overflow-hidden aspect-w-16 aspect-h-10 bg-black/25 rounded-2xl transition hover:ring-4 hover:ring-red-500/50 active:opacity-75 active:ring-red-500/25"
			>
				<!-- TODO: REMOVE black div on bottom and redisgn genres and title -->
				<img class="object-cover h-[150%] opacity-100" src={card.image} loading="lazy" alt="trending anime"/>
				<div
					class="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-transparent  via-black/60 to-black"
				>
					<div class="p-4 flex items-end justify-start space-x-2" />
					<div class="px-4 py-5 flex items-end justify-between space-x-2">
						<div class="space-y-1">
							<h3 class="text-lg font-semibold  text-white">{card.title.english}</h3>
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
<section class="space-y-6 px-2 xl:px-0">
	<div class="flex items-center justify-between">
		<h2 class="dark:text-slate-400 font-semibold text-xl">Recent Episodes</h2>
		<a
			data-sveltekit-preload-code='hover'
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
	<nav class="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-8">
		<!-- Movie -->
		{#each recent.filter(ep => ep.title.english) as card}
			<a

				data-sveltekit-preload-code='hover'
				href="javascript:void(0)"
				class="group relative overflow-hidden aspect-w-3 aspect-h-4 bg-black/25 rounded-2xl transition hover:ring-4 hover:ring-red-500/50 active:opacity-75"
			>
				<img class="object-cover" src={card.image} loading="lazy" alt="recent episodes"/>
				<div
					class="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-transparent via-black/30 to-black"
				>
					<div class="p-4 flex items-center justify-start space-x-2">
						<div
							class="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded-md text-[#141414] bg-[#e6067a] shadow-sm shadow-black"
						>
							<span>Ep {card.episodeNumber}</span>
						</div>
					</div>
					<div class="px-4 py-5 flex items-end justify-between space-x-2">
						<div class="space-y-1">
							<h3 class="text-md font-normal text-white line-clamp-2 ">{card.title.english}</h3>
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
<!-- END Movie -->
</div>
<!-- END Continue Watching -->
<style>

</style>
