<script>
	import { onMount } from 'svelte';
	import OpenPlayerJS from 'openplayerjs';
	import { goto } from '$app/navigation';
	export let epId;
	export let episodes;
	export let animeId;
	let searchValue = '';
	let player = null;
	const proxy = 'https://cors.consumet.stream/';
	const backupProxy = 'https://corsproxy.io/';

	//TODO: smth not working right with the sources provided in episodes idk
	async function changeEpisode(id) {
		const searchParams = new URLSearchParams(window.location.search);
		searchParams.set('ep', id);
		await goto(window.location.pathname + '?' + searchParams.toString(), { noScroll: true });
		streamEpisode(id);
	}
	function setSubsLang(lang) {
		if (lang.subtitles) {
			const allowedLanguages = ['Russian', 'English', 'German', 'Spanish', 'Arabic'];
			const subtitles = lang.subtitles;
			for (const sub of subtitles) {
				if (!allowedLanguages.includes(sub.lang)) {
					continue;
				}
				var track = document.createElement('track');
				track.srclang = sub.lang;
				track.label = sub.lang;
				track.src = `${proxy}${sub.url}`;
				player.addCaptions(track);
			}
		}
	}
	async function streamEpisode(id) {
		// TODO: player stop or player pause?
		player.stop();
		const response = await fetch(`${proxy}https://api.anify.tv/sources/${animeId}/Zoro/${encodeURIComponent(id)}`);
		const streamingSrc = await response.json();
		player.src = `${proxy}${streamingSrc.sources[0].url}`;

		setSubsLang(streamingSrc);
		player.load();
		// TODO: autoplay?
		player.play();
	}

	function fixId(badId) {
		const good = badId.substring(7);
		return good;
	}
	onMount(async () => {
		let response;
		if (epId) {
			response = await fetch(`${proxy}https://api.anify.tv/sources/${animeId}/Zoro/${encodeURIComponent(epId)}`);
		} else {
			response = await fetch(
				`${proxy}https://api.anify.tv/sources/${animeId}/Zoro/${encodeURIComponent(fixId(episodes[0].id))}`
			);
		}
		const firstEp = await response.json();
		console.log(firstEp);
		player = new OpenPlayerJS('video', {
			mode: 'responsive',
			detachMenus: true,
			autoplay: true,
			width: '160%',
			height: '500px',
			alwaysVisible: false,
			step: 0,
			hidePlayBtnTimer: 100,
			media: {
				pauseOnClick: true
			},
			controls: {
				layers: {
					left: ['play', 'time', 'volume'],
					middle: ['progress'],
					right: ['captions', 'settings', 'levels', 'fullscreen']
				}
			}
		});
		// add others with foreach
		// TODO: optimize check for default quality
		// TODO: sources[5] wasn't working so changed to 6 with new api (maybe good, maybe bad idk)
		if (firstEp.sources.length >= 5) {
			player.src = `${proxy}${firstEp.sources[6].url}`;
		} else {
			player.src = `${proxy}${firstEp.sources[0].url}`;
		}

		setSubsLang(firstEp);
		player.init();
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/openplayerjs@latest/dist/openplayer.min.css"
	/>
</svelte:head>
<section class="px-2 text-white     ">
	<div class="flex h-full flex-col lg:flex-row ">
		<!-- svelte-ignore a11y-media-has-caption -->
		<video
			class="op-player op-player__media border border-gray-800"
			id="video"
			controls
			playsinline
			preload="metadata"
		/>
		<div class=" w-full  flex-col flex  ">
			<ul
				class="w-full rounded  h-96 grow border border-gray-700 overflow-x-hidden scroll-smooth bg-primary  divide-y divide-gray-700"
			>
				<li
					class="p-4 sticky top-0 flex gap-4 items-center cursor-pointer justify-between text-slate-400 bg-primary "
				>
				<span class="font-bold text-sm font-sans ">List of episodes:</span>
					<div class="font-semibold inline-flex  leading-4 text-xs rounded-full mr-6  ">
						<input type="search" bind:value={searchValue} class=" w-full  block border-2  bg-primary border-slate-700 rounded-md  py-3 leading-5 text-sm placeholder-gray-500 text-white focus:border-gray-500/50  focus:bg-primary focus:ring-gray-500/50 focus:ring-opacity-50  "
						placeholder="Search..."
						/>
					</div>


				</li>
				{#each episodes as ep, i}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<li
						class={`p-4 flex gap-4 items-center cursor-pointer text-slate-400
						hover:text-slate-200 hover:bg-themedarkerPurple  ${i %
						2 ===
					  0
						? 'bg-secondary'
						: 'bg-[#181717]'} ${searchValue === '' || i + 1 === Number(searchValue) ? '' : 'hidden'}`}
						on:click={changeEpisode(fixId(ep.id))}
					>
						<div class="font-semibold inline-flex  leading-4 text-xs rounded-full text-themePurple ">
							{i + 1}
						</div>

						<span class="font-semibold text-sm  ">{ep.title}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	::-webkit-scrollbar {
		height: 12px;
		width: 6px;
		background: #000;
	}

	::-webkit-scrollbar-thumb {
		background: #464849;
		-webkit-border-radius: 1ex;
		-webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
	}

	::-webkit-scrollbar-corner {
		background: #000;
	}
</style>
