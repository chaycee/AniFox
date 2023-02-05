export async function load({ fetch }) {
	const popular = async () => {
		return await fetch('https://api.delusionz.xyz/popular')
			.then((res) => res.json())
			.then((data) => {
				return data;
			});
	};

	const trending = async () => {
		return await fetch('https://api.delusionz.xyz/trending')
			.then((res) => res.json())
			.then((data) => {
				return data;
			});
	};
	const recent = async () => {
		return await fetch('https://api.consumet.org/meta/anilist/recent-episodes?page=1&provider=zoro')
			.then((res) => res.json())
			.then((data) => {
				return data;
			});
	};

	const [popularData, trendingData, recentData] = await Promise.all([
		popular(),
		trending(),
		recent()
	]);
	return {
		popular: popularData,
		trending: trendingData,
		recent: recentData
	};
}
