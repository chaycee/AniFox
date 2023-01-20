/** @type {import('./$types').PageServerLoad} */
import { META } from '@consumet/extensions';
const anilist = new META.Anilist();
export async function load() {
	const popularAnime = anilist.fetchPopularAnime().then((data) => {
		return data;
	});
	const trendingAnime = anilist.fetchTrendingAnime().then((data) => {
		return data;
	});

	const Airing = anilist.fetchAiringSchedule(1, 20, 1, 5, true).then((data) => {
		return data;
	});
	const search = anilist.fetchEpisodeSources("youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-tv-episode-12").then(data => {
		console.log(data);
	  })

	return {
		popular: Promise.resolve(popularAnime),
		trending: Promise.resolve(trendingAnime),
		airing: Promise.resolve(Airing),
		search: Promise.resolve(search)
	};
}
