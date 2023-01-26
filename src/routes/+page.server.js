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
	// TODO: u can split it to avoid waterfall issues possibly fixed?
	const RecentEpisodes = async () => {
		// fetch page 1 and 2
		return await fetch(
			'https://api.consumet.org/meta/anilist/recent-episodes?provider=zoro?page=1'
		).then((res) => res.json())

	};
	const [popularData, trendingData, recentData] = await Promise.all([popular(), trendingAnime(), RecentEpisodes()])
	return {
		// cache for 1 hour

		popular: popularData,
		trending: trendingData,
		recent: recentData
	};
}
