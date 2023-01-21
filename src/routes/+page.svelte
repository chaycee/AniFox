<script>
	export let data;

	const { popular } = data;
	const { trending } = data;
	let images = [];
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/themes/splide-skyblue.min.css';
	import { onMount } from 'svelte';
</script>

<Splide
	aria-label="My Favorite Images"
	class=""
	options={{
		rewind: true,
		height: 450,
		cover: true,
		autoplay: true,
		pauseOnHover: false,
		pauseOnFocus: false,
		trimSpace: false,
		perPage: 1,
		easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
		perMove: 1,
		interval: 3000,
		arrows: false
	}}
>
	<!-- TODO: Change cover to image on mobile view  -->
	{#each popular.results as data}
		<SplideSlide class="relative flex rounded-2xl items-end">
			<img src={data.cover} alt="Ima" class="" />
			<div
				class="absolute inset-0 flex flex-col justify-between bg-gradient-to-bl from-transparent via-black/25 to-black "
			/>
			<div
				class="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-transparent via-black/25 to-black "
			/>
			<div
				class="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-transparent via-black/10 to-black "
			/>
			<!-- Card -->
			<div class="flex flex-col rounded shadow-sm text-white overflow-hidden z-1 opacity-75">
				<!-- Card Header -->
				<div class="px-5 lg:px-6 w-full ">
					<h3 class="font-normal  text-lg lg:text-3xl">
						{data.title.english}
						<div class="flex items-center gap-2  text-sm lg:text-base">
							<div class="flex items-center">
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
				<div class="px-5 py-2 lg:p-6 grow lg:w-[800px] h-20 text-left mb-2">
					<p class=" text-left line-clamp-2 font-extralight lg:line-clamp-3">
						{data.description.replace(/<[^>]*>?/gm, '')}
					</p>
				</div>
				<!-- END Card Body -->

				<!-- Card Footer -->
				<div class="py-4 px-5 lg:px-6 w-full text-sm text-gray-100 ">
					<!-- END Card Footer -->
				</div>
				<!-- END Card -->
			</div></SplideSlide
		>
	{/each}
</Splide>
<section class="space-y-6 ">
	<div class="flex items-center justify-between">
		<h2 class="dark:text-slate-200 font-semibold text-xl">Latest Anime</h2>
		<a
			href="javascript:void(0)"
			class="group flex items-center space-x-1 text-sm transition text-black dark:text-slate-400 hover:text-white active:text-slate-400"
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
	<nav class="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
		<!-- Movie -->
		{#each trending.results.slice(0, 6) as card}
			<a
				href="javascript:void(0)"
				class="group relative overflow-hidden aspect-w-16 aspect-h-10 bg-black/25 rounded-2xl transition hover:ring-4 hover:ring-indigo-500/50 active:opacity-75 active:ring-indigo-500/25"
			>
				<img class="object-cover h-[150%]" src={card.image} />
				<div
					class="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-transparent via-black/75 to-black "
				>
					<div class="p-4 flex items-end justify-start space-x-2" />
					<div class="px-4 py-5 flex items-end justify-between space-x-2">
						<div class="space-y-1">
							<h3 class="text-lg font-semibold  text-white">{card.title.english}</h3>
							<section class="text-sm font-semibold w-max text-slate-500">
								{card.releaseDate}
								{#each card.genres.slice(0, 3) as genre}
									<div
										class="font-semibold inline-flex px-2 py-[1px] leading-4 text-xs rounded text-blue-700 ml-2 bg-[#0f172a]"
									>
										{genre}
									</div>
								{/each}
							</section>
						</div>

						<div
							class="flex absolute right-2 items-center justify-center w-10 h-10 rounded-full transition text-slate-400 bg-slate-500/25 group-hover:bg-indigo-500 group-hover:text-white group-hover:scale-110 group-active:scale-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
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
<section class="space-y-6">
	<div class="flex items-center justify-between">
		<h2 class="dark:text-slate-200 font-semibold text-xl">Continue Watching</h2>
		<a
			href="javascript:void(0)"
			class="group flex items-center space-x-1 text-sm transition dark:text-slate-400 hover:text-white active:text-slate-400"
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
	<nav class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
		<!-- Movie -->
		<a
			href="javascript:void(0)"
			class="group relative overflow-hidden aspect-w-16 aspect-h-9 bg-black/25 rounded-2xl transition hover:ring-4 hover:ring-indigo-500/50 active:opacity-75 active:ring-indigo-500/25"
		>
			<img
				class="object-cover"
				src="https://images.unsplash.com/photo-1601513445506-2ab0d4fb4229?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2Njc3NjQ2Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
			/>
			<div
				class="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent via-black/75 to-black"
			>
				<div class="px-4 pb-5 space-y-2">
					<div class="flex items-start justify-between space-x-2">
						<div class="space-y-1">
							<h3 class="text-xl font-semibold text-white">Hidden but here</h3>
							<p class="text-sm font-semibold text-slate-500">2017</p>
						</div>
						<div
							class="flex items-center justify-center w-10 h-10 rounded-full transition-all text-slate-400 bg-slate-500/25 group-hover:bg-indigo-500 group-hover:text-white group-hover:scale-110 group-active:scale-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="hi-mini hi-play w-5 h-5 translate-x-0.5"
							>
								<path
									d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
								/>
							</svg>
						</div>
					</div>
					<div class="flex items-center space-x-2 text-xs font-medium text-white">
						<div>10:23</div>
						<div class="grow flex items-center w-full h-1 bg-white/25 rounded-lg overflow-hidden">
							<div
								role="progressbar"
								aria-valuenow="10"
								aria-valuemin="0"
								aria-valuemax="100"
								class="flex items-center justify-center self-stretch transition-all duration-500 ease-out bg-indigo-500"
								style="width: 10%;"
							/>
						</div>
						<div>1:40:00</div>
					</div>
				</div>
			</div>
		</a>
		<!-- END Movie -->

		<!-- Movie -->
		<a
			href="javascript:void(0)"
			class="group relative overflow-hidden aspect-w-4 aspect-h-3 bg-black/25 rounded-2xl transition hover:ring-4 hover:ring-indigo-500/50 active:opacity-75 active:ring-indigo-500/25"
		>
			<img
				class="object-cover"
				src="https://images.unsplash.com/photo-1517488629431-6427e0ee1e5f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2Njc3NjczOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
			/>
			<div
				class="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent via-black/75 to-black"
			>
				<div class="px-4 pb-5 space-y-2">
					<div class="flex items-start justify-between space-x-2">
						<div class="space-y-1">
							<h3 class="text-xl font-semibold text-white">The Happy Team</h3>
							<p class="text-sm font-semibold text-slate-500">2006</p>
						</div>
						<div
							class="flex items-center justify-center w-10 h-10 rounded-full transition-all text-slate-400 bg-slate-500/25 group-hover:bg-indigo-500 group-hover:text-white group-hover:scale-110 group-active:scale-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="hi-mini hi-play w-5 h-5 translate-x-0.5"
							>
								<path
									d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
								/>
							</svg>
						</div>
					</div>
					<div class="flex items-center space-x-2 text-xs font-medium text-white">
						<div>30:25</div>
						<div class="grow flex items-center w-full h-1 bg-white/25 rounded-lg overflow-hidden">
							<div
								role="progressbar"
								aria-valuenow="32"
								aria-valuemin="0"
								aria-valuemax="100"
								class="flex items-center justify-center self-stretch transition-all duration-500 ease-out bg-indigo-500"
								style="width: 32%;"
							/>
						</div>
						<div>1:25:00</div>
					</div>
				</div>
			</div>
		</a>
		<!-- END Movie -->

		<!-- Movie -->
		<a
			href="javascript:void(0)"
			class="group relative overflow-hidden aspect-w-4 aspect-h-3 bg-black/25 rounded-2xl transition hover:ring-4 hover:ring-indigo-500/50 active:opacity-75 active:ring-indigo-500/25"
		>
			<img
				class="object-cover"
				src="https://images.unsplash.com/photo-1486525546686-3cd5484691f4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2Njc3Njg0Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
			/>
			<div
				class="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent via-black/75 to-black"
			>
				<div class="px-4 pb-5 space-y-2">
					<div class="flex items-start justify-between space-x-2">
						<div class="space-y-1">
							<h3 class="text-xl font-semibold text-white">Everest: The Real Story</h3>
							<p class="text-sm font-semibold text-slate-500">2021</p>
						</div>
						<div
							class="flex items-center justify-center w-10 h-10 rounded-full transition-all text-slate-400 bg-slate-500/25 group-hover:bg-indigo-500 group-hover:text-white group-hover:scale-110 group-active:scale-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="hi-mini hi-play w-5 h-5 translate-x-0.5"
							>
								<path
									d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
								/>
							</svg>
						</div>
					</div>
					<div class="flex items-center space-x-2 text-xs font-medium text-white">
						<div>1:45:30</div>
						<div class="grow flex items-center w-full h-1 bg-white/25 rounded-lg overflow-hidden">
							<div
								role="progressbar"
								aria-valuenow="80"
								aria-valuemin="0"
								aria-valuemax="100"
								class="flex items-center justify-center self-stretch transition-all duration-500 ease-out bg-indigo-500"
								style="width: 80%;"
							/>
						</div>
						<div>2:08:00</div>
					</div>
				</div>
			</div>
		</a>
		<!-- END Movie -->
	</nav>
</section>

<!-- END Continue Watching -->
<style>
</style>
