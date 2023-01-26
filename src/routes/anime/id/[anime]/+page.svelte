<script>
	import Tabs from '$lib/Tabs.svelte';
	export const router = false;
	/** @type {import('./$types').PageData} */
	export let data;

	$:({ animeInfo } = data);
	$:console.log(animeInfo)
</script>

<svelte:head>
	<title>{animeInfo.title.english}</title>
</svelte:head>
<!-- Page Container -->
<section class="space-y-6 xl:px-0 dark:text-slate-200 absolute top-0 w-full ">
	<div class="relative">
		<img src="https://images.weserv.nl/?url=cors.proxy.consumet.org/{animeInfo.cover}&output=webp&w=1950&h=450&af" alt="" class="absolute inset-0 object-cover w-full h-[490px] blur-sm" />
		<div class=" absolute w-full h-full bg-[#16151d] bg-opacity-80  " />

		<div class="flex flex-col items-center justify-center relative">
			<div class="flex flex-col  items-center mt-24">
				<img src="https://images.weserv.nl/?url=cors.proxy.consumet.org/{animeInfo.image}&output=webp&w=350&h=350&fit=contain&af" alt="anime pooster" class="h-52 w-52" />
				<div class="font-semibold text-xl px-2 py-3  tracking-wide text-center">
					{animeInfo.title.english}
				</div>
				<div class="text-slate-300" id="film-stats">
					<span
						class="font-semibold inline-flex px-1 leading-4 text-xs rounded text-slate-200 bg-transparent border-solid border-red-300 border-2"
						>{animeInfo.countryOfOrigin}</span
					>
					<span
						class="font-semibold inline-flex  px-1 leading-4 text-xs rounded text-slate-200 bg-transparent border-solid border-red-300 border-2"
						>HD</span
					>
					<span
						class="font-semibold inline-flex px-1 leading-4 text-xs rounded text-slate-200 bg-transparent border-solid border-red-300 border-2"
						>{animeInfo.subOrDub}</span
					>
					<span class="do ml-1 py-1">|</span>
					<span>{animeInfo.type}</span>
					<span class="do py-1">|</span>
					<span>Ep {animeInfo.totalEpisodes}</span>
					<span class="do  py-1">|</span>
					<span>{animeInfo.duration}m</span>
				</div>
				<a
					data-sveltekit-preload-code="hover"
					href="#"
					type="button"
					class="inline-flex justify-center items-center space-x-2 rounded-full border font-semibold focus:outline-none px-4 py-2 mt-2 leading-6 border-red-400 bg-red-400 text-red-700 hover:text-red-700 hover:bg-red-300 hover:border-red-300 focus:ring focus:ring-red-500 focus:ring-opacity-50 active:bg-red-200 active:border-red-200 gap-1"
				>
					<svg
						class="hi-solid hi-play inline-block w-5 h-5 "
						fill="currentColor "
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
							clip-rule="evenodd"
						/></svg
					>
					Watch Now
				</a>
			</div>

			<!-- Tabs Component: Pills Justified -->
			<Tabs {animeInfo} />
			<div />
		</div>
	</div>
</section>
