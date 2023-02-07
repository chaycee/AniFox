<script>
	import { onMount } from 'svelte';
	import { clickOutside } from '$lib/outside.js';

	let list = ['One Piece', 'Death Note', 'Kiminonawa'];

	let showSearching = false;
	let isResults = false;
	let queryTimeoutId;
	let value;
	$: onQueryChange(value);

	function onQueryChange(query) {
		if (query) {
			if (queryTimeoutId) {
				clearTimeout(queryTimeoutId);
			}
			queryTimeoutId = setTimeout(async () => {
				doSearch(query);
			}, 1000);
		}
	}
	// E.title.native will give japanese or chinese title instead i changed to e.title.romaji
	async function doSearch(query) {
		fetch('/api/search?q=' + query).then((r) => {
			r.json().then((res) => {
				list = res.results.slice(0, 5).map((e) => {
					return {
						title: e.title.english ?? e.title.romaji,
						id: e.id,
						img: e.image,
                        type: e.type,
                        release: e.releaseDate,
                        status: e.status
					};
				});
				isResults = true;
			});
		});
	}
</script>

<div class="relative">
	<input
		type="text"
		class="sm:w-96 w-full block border-2  bg-primary border-slate-700 rounded-md pl-8 py-3 leading-5 text-sm placeholder-gray-500 text-white focus:border-gray-500/50  focus:bg-primary focus:ring-gray-500/50 focus:ring-opacity-50 "
		id="search"
		name="search"
		placeholder="Search Anime.."
		bind:value
		on:click={() => {
			showSearching = true;
		}}
	/>
	{#if showSearching && isResults}
		<div
			class="absolute left-0 w-full border-2 bg-primary border-slate-700 border-t-transparent rounded-md px-3 py-3 text-md text-white focus:border-gray-500/50  focus:bg-primary focus:ring-gray-500/50 focus:ring-opacity-50"
			use:clickOutside
			on:outclick={() => {
				showSearching = false;
			}}
		>
			{#each list as el, i}
			<!-- maybe preload?  -->
				<a
					on:click={() => {
						showSearching = false;
					}}
					href="/anime/id/{el.id}"
					class="hover:bg-themedarkerPurple hover:bg-opacity-25 rounded-md border-2 border-transparent block pb-2 border-b-slate-800"
					class:pt-2={i !== 0}
				>
					<div class="flex  ">
						<div class="w-16 px-2 ">
                            <!-- https://images.weserv.nl/?url=cors.consumet.stream/{el.img}&output=webp&w=120&h=120? -->
							<img
								src="{el.img}"
                                class="h-[70px] w-[50px]"
								alt="Anime cover"
                                loading="lazy"
							/>
						</div>
						<div class="search-info  w-[80%] flex flex-col gap-1 text-slate-400 ">
							<h3 class="text-themeWhite text-base line-clamp-1">{el.title}</h3>
							<div class="flex items-center gap-2   lg:text-xs font-normal">
								<div class="flex items-center">
									<svg
										class="hi-solid hi-clock text-sm inline-block w-4 h-4 opacity-75"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
										><path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
											clip-rule="evenodd"
										/></svg
									>

									<span>{el.status}</span>
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
									<span>{el.release}</span>
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
									<span>{el.type.charAt(0).toUpperCase() + el.type.slice(1).toLowerCase()}</span>
								</div>
							</div>
						</div>
					</div>
				</a>
			{/each}
			<!-- preload here too? not sure -->
			<a
				on:click={() => {
					showSearching = false;
				}}
				href="/search?q={value}"
				class="bg-themedarkerPurple hover:bg-purple-900 hover:bg-opacity-25 rounded-md border-2 border-transparent block pt-2"
			>
				<span class="flex items-center justify-center">View All results<svg class="hi-mini hi-chevron-right inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"/></svg></span>
			</a>
		</div>
	{/if}
</div>
