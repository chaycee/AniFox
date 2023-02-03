<script>
	import { onMount } from 'svelte';
	import OpenPlayerJS from 'openplayerjs';
	import { goto } from '$app/navigation';

	export let epId;
	export let source;
	let player = null;
	const proxy = 'https://cors.consumet.stream/';

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
		player.pause();
		const response = await fetch(`https://api.consumet.org/meta/anilist/watch/${id}?provider=zoro`);
		const streamingSrc = await response.json();
		player.src = `${proxy}${streamingSrc.sources[3].url}`;

		setSubsLang(streamingSrc);
		player.load();
		// TODO: autoplay?
		player.play();
	}

	onMount(async () => {
		let response;
		if (epId) {
			response = await fetch(`https://api.consumet.org/meta/anilist/watch/${epId}?provider=zoro`);
		} else {
			response = await fetch(
				`https://api.consumet.org/meta/anilist/watch/${source.episodes[0].id}?provider=zoro`
			);
		}
		const firstEp = await response.json();

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
		if (firstEp.sources.length >= 5) {
			player.src = `${proxy}${firstEp.sources[5].url}`;
		} else {
			player.src = `${proxy}${firstEp.sources[3].url}`;
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
<!-- TODO: ADD NUMERATION START FROM 1 -->
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
				class="w-full rounded h-96 grow border border-gray-700 overflow-x-hidden scroll-smooth bg-primary  divide-y divide-gray-700"
			>
				{#each source.episodes as ep, i}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<li
						class="p-4 flex gap-4 items-center cursor-pointer text-slate-400 hover:bg-gray-700 hover:text-slate-200"
						on:click={changeEpisode(ep.id)}
					>
						<div class="font-semibold inline-flex  leading-4 text-xs rounded-full text-accent ">
							{i + 1}
						</div>

						<span class="font-semibold text-sm ">{ep.title}</span>
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
