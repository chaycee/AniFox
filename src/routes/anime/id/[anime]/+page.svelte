<script>
	/** @type {import('./$types').PageData} */
	import Player from '$lib/components/player.svelte';
	export let data;

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	$: ({ animeInfo, episodeId, episodes, animeId } = data);
	$:(console.log(animeInfo))
</script>

<svelte:head>
	<title>{animeInfo.title.english}</title>
</svelte:head>

<div class="relative">
	<img
		src="https://images.weserv.nl/?url=cors.consumet.stream/{animeInfo.cover}&w=3000&h=560&fit=cover&output=webp"
		class="absolute inset-0 rounded-xl  w-max  h-full "
		alt=""
	/>
	<div class="absolute inset-0 bg-black opacity-80  " />
	<section class="space-y-6 py-6 px-2 text-white relative  mx-auto backdrop-blur-sm ">
		<div class="flex flex-col px-6 lg:flex-row" id="info-wrapper">
			<div id="img-wrapper" class="flex justify-center">
				<div class="relative w-fit">
					<div
						class="absolute inset-0 bg-gradient-to-r from-themePurple via-themedarkerPurple to-themelightPurple blur-[4px] rounded-xl"
					/>
					<img
						src="https://images.weserv.nl/?url=cors.consumet.stream/{animeInfo.image}&output=webp&af"
						alt=""
						loading="lazy"
						class="w-60 relative h-80 rounded-xl "
					/>
				</div>
			</div>
			<div class="grow my-6 lg:mx-6 rounded-xl" id="info-wrapper">
				<h1 class="text-xl font-semibold grid gap-2 text-center md:text-left">
					{animeInfo.title.english}
					<span aria-hidden="true" class="grow bg-gray-700 rounded h-0.5" />
				</h1>
				<section class="info flex flex-col gap-3 mt-3">
					<div class="flex  px-4">
						{@html '<strong>Type:</strong>'}
						<span class="text-gray-800 opacity-70">..................................</span>
						<span class="text-slate-100">{animeInfo.type}</span>
					</div>
					<div class="flex  px-4">
						{@html '<strong>Episodes:</strong>'}
						<span class="text-gray-800 opacity-70">...........................</span>
						<span class="text-slate-100">{animeInfo.totalEpisodes}</span>
					</div>
					<div class="flex  px-4">
						{@html '<strong>Status:</strong>'}
						<span class="text-gray-800 opacity-70">................................</span>
						<span class="text-slate-100">{animeInfo.status}</span>
					</div>
					<div class="flex  px-4">
						<!-- TODO: Add space between genres -->
						{@html '<strong>Genre:</strong>'}
						<span class="text-gray-800 opacity-70">................................</span>
						<span class="text-slate-100 line-clamp-1"
							>{animeInfo.genres.toString().replaceAll(',', ', ')}</span
						>
					</div>
					<div class="flex  px-4">
						{@html '<strong>Release:</strong>'}
						<span class="text-gray-800 opacity-70">..............................</span>
						{#if animeInfo.endDate.year === null || animeInfo.endDate.day === null || animeInfo.endDate.month === null || animeInfo.endDate.month === undefined}
							<span class="text-slate-100">
								{months[animeInfo.startDate.month - 1]}
								{animeInfo.startDate.day}, {animeInfo.startDate.year} to Present</span
							>
						{:else}
							<span class="text-slate-100">
								{months[animeInfo.startDate.month - 1]}
								{animeInfo.startDate.day}, {animeInfo.startDate.year} to {months[
									animeInfo.endDate.month - 1
								]}
								{animeInfo.endDate.day}, {animeInfo.endDate.year}</span
							>
						{/if}
					</div>
					<div class="flex  px-4">
						{@html '<strong>Age restrictions:</strong>'}
						<span class="text-gray-800 opacity-70">.................</span>
						{#if animeInfo.isAdult === false}
							<span class="text-slate-100"
								><div
									class="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded text-themeWhite ring-themedarkerPurple ring-2"
								>
									R+
								</div></span
							>
						{:else}
							<span class="text-accent">
								<div
									class="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded text-red-700 bg-red-200"
								>
									18+
								</div></span
							>
						{/if}
					</div>
				</section>
			</div>
		</div>
	</section>
</div>
<section class="" id="middle-section">
	<p class="w-full text-slate-300 px-1 py-3">
		{animeInfo.description.replace(/<[^>]*>?/gm, '')}
	</p>
	<Player {episodes} epId={episodeId} {animeId} />
</section>
<section id="lower-section" class="flex mt-4">
	<div class="flex-grow flex flex-col max-w-10xl mx-auto p-4 lg:p-8 x-3 w-full">
		<!--

		ADD YOUR MAIN CONTENT BELOW

		-->

		<!-- Placeholder -->
		<div
			class="flex-auto flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 py-64"
		>
			Main Content
		</div>

		<!--

		ADD YOUR MAIN CONTENT ABOVE

		-->
	</div>
	<div class="flex-none h-min lg:flex flex-col w-full lg:w-80 xl:w-96 p-4 lg:p-4 mx-2 bg-secondary">

		<!-- Placeholder -->
		<h2 class="text-slate-400 font-semibold text-xl">Related Anime</h2>
		<div
			class="  rounded-xl bg-secondary   text-gray-400 "
		>

			<div class="wrapper  ">
				{#each animeInfo.relations.filter(e => e.type === 'OVA' || e.type === 'TV' || e.type === 'MOVIE' ).slice(0,6) as related}
				<!-- TODO: FIX WIDTH -->
				<a href="/anime/id/{related.id}">
				<div class="slot mx-1 mt-2 gap-2 flex border-b border-slate-700 p-2 w-[100%]">
				<img src="https://images.weserv.nl/?url=cors.consumet.stream/{related.image}&output=webp&w=150" alt="" class=" h-16">
				<div class="info">
					{#if related.title.english === null}
						<h1 class="text-slate-100 font-semibold text-sm lg:text-base line-clamp-1 ">{related.title.romaji}</h1>
					{:else}
					<h1 class="text-slate-100 font-semibold text-sm lg:text-base line-clamp-1 ">{related.title.english}</h1>
					{/if}
					<div class="flex items-center gap-3  text-sm lg:text-base font-normal">
						<div class="flex items-center gap-1">
							<svg class="bi bi-collection-play inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z"/><path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z"/></svg>

							<span>{related.episodes}ep</span>
						</div>
						<div class="flex items-center gap-1">
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
							<span>{related.status}</span>
						</div>
						<div class="flex items-center gap-1">
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
							<span>{related.type}</span>
						</div>
					</div>
				</div>
			</div>
		</a>
		{/each}

			</div>
		</div>
	</div>
	<!-- END Side Content -->
</section>
