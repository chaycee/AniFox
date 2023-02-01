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
	$: ({ animeInfo } = data);
</script>

<svelte:head>
	<title>{animeInfo.title.english}</title>
</svelte:head>

<div class="relative">
	<img
		src={animeInfo.cover}
		class="absolute inset-0 rounded-xl object-cover w-max  h-full "
		alt=""
	/>
	<div class="absolute inset-0 bg-black opacity-80  " />
	<section class="space-y-6 py-6 px-2 text-white relative  mx-auto backdrop-blur-sm ">
		<div class="flex flex-col px-6 lg:flex-row" id="info-wrapper">
			<div id="img-wrapper" class="flex justify-center">
				<div class="relative w-fit">
					<div
						class="absolute inset-0 bg-gradient-to-r from-accent via-slate-300 to-accent blur rounded-xl"
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
						Type:
						<span class="text-gray-800 opacity-70">..................................</span>
						<span class="text-accent">{animeInfo.type}</span>
					</div>
					<div class="flex  px-4">
						Episodes:
						<span class="text-gray-800 opacity-70">...........................</span>
						<span class="text-accent">{animeInfo.totalEpisodes}</span>
					</div>
					<div class="flex  px-4">
						Status:
						<span class="text-gray-800 opacity-70">................................</span>
						<span class="text-accent">{animeInfo.status}</span>
					</div>
					<div class="flex  px-4">
						Genre:
						<span class="text-gray-800 opacity-70">................................</span>
						<span class="text-accent line-clamp-1">{animeInfo.genres}</span>
					</div>
					<div class="flex  px-4">
						Release:
						<span class="text-gray-800 opacity-70">..............................</span>
						{#if animeInfo.endDate.year === null || animeInfo.endDate.day === null || animeInfo.endDate.month === null || animeInfo.endDate.month === undefined}
							<span class="text-accent">
								{months[animeInfo.startDate.month - 1]}
								{animeInfo.startDate.day}, {animeInfo.startDate.year} to Present</span
							>
						{:else}
							<span class="text-accent">
								{months[animeInfo.startDate.month - 1]}
								{animeInfo.startDate.day}, {animeInfo.startDate.year} to {months[
									animeInfo.endDate.month - 1
								]}
								{animeInfo.endDate.day}, {animeInfo.endDate.year}</span
							>
						{/if}
					</div>
					<div class="flex  px-4">
						Age restrictions
						<span class="text-gray-800 opacity-70">.................</span>
						{#if animeInfo.isAdult === false}
							<span class="text-accent"
								><div
									class="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded text-accent bg-slate-500"
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
	<Player source={animeInfo} />
</section>
