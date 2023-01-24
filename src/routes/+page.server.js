/** @type {import('./$types').PageServerLoad} */
export const ssr = true;

export async function load({ fetch }) {
	const popular = async () => {
		return await fetch('https://api.consumet.org/meta/anilist/popular').then((res) => res.json());
	};
	const trendingAnime = async () => {
		return await fetch('https://api.consumet.org/meta/anilist/trending?perPage=3').then((res) =>
			res.json()
		);
	};
	// TODO: u can split it to avoid waterfall issues
	const RecentEpisodes = async () => {
		// fetch page 1 and 2
		const page1 = await fetch(
			'https://api.consumet.org/meta/anilist/recent-episodes?provider=zoro?page=1'
		).then((res) => res.json())
		console.log(page1);
		const page2 = await fetch(
			'https://api.consumet.org/meta/anilist/recent-episodes?provider=zoro&page=2'
		).then((res) => res.json());

		// merge the two pages
		const combined = [...page1.results, ...page2.results];
		// concat the two pages


		return combined;
	};

	return {
		// cache for 1 hour

		popular: popular(),
		trending: trendingAnime(),
		recent: RecentEpisodes()
	};
}
