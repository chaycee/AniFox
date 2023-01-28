/** @type {import('./$types').PageServerLoad} */
export const ssr = true;

export async function load({ fetch }) {
	const popular = fetch('https://api.delusionz.xyz/popular').then((res) => res.json());
	const trending = fetch('https://api.delusionz.xyz/trending').then((res) => res.json());

	const [popularData, trendingData] = await Promise.all([popular, trending]);

	return {
		popular: popularData,
		trending: trendingData
	};
}