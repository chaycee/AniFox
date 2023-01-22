/** @type {import('./$types').PageServerLoad} */
export const ssr = true;
// TODO: Switch to consument api instead to use natibe svelte fetch
export async function load({fetch }) {
	const popular = async () => {
		return await fetch('https://api.consumet.org/meta/anilist/popular').then((res) => res.json());
	}
	const trendingAnime = async () => {
		return await fetch('https://api.consumet.org/meta/anilist/trending?perPage=3').then((res) => res.json());
	}
	const RecentEpisodes = async () => {
		return await fetch('https://api.consumet.org/meta/anilist/recent-episodes?perPage=15').then((res) => res.json());
	}



	return {
		popular: popular(),
		trending: trendingAnime(),
		recent: RecentEpisodes()
	};
}
