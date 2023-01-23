/** @type {import('./$types').PageServerLoad} */
export const ssr = true;
// TODO: Switch to consument api instead to use natibe svelte fetch
export async function load({ fetch }) {
	const popular = async () => {
		return await fetch('https://api.consumet.org/meta/anilist/popular').then((res) => res.json());
	};
	const trendingAnime = async () => {
		return await fetch('https://api.consumet.org/meta/anilist/trending?perPage=3').then((res) =>
			res.json()
		);
	};
	const RecentEpisodes = async () => {
		// fetch page 1 and 2
		const page1 = await fetch(
			'https://api.consumet.org/meta/anilist/recent-episodes?provider=zoro?page=1'
		).then((res) => res.json());
		const page2 = await fetch(
			'https://api.consumet.org/meta/anilist/recent-episodes?provider=zoro&page=2'
		).then((res) => res.json());
		// merge the two pages
		const combined = { ...page1, ...page2 };

		return combined;
	};

	return {
		// cache for 1 hour
		maxAge: 60 * 60,
		popular: popular(),
		trending: trendingAnime(),
		recent: RecentEpisodes()
	};
}
