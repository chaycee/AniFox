import { redis } from '$lib/server/redis';
export async function load({ fetch, setHeaders }) {
	let maxTtl = 0;
	const popular = async () => {
		const cached = await redis.get('popular');
		if (cached) {
			console.log('Cache HIT');
			const ttl = await redis.ttl('popular');
			maxTtl = Math.max(maxTtl, ttl);
			return JSON.parse(cached);
		} else {
			console.log('Cache MISS');
		}
		return await fetch('https://api.delusionz.xyz/popular')
			.then((res) => res.json())

			.then((data) => {
				redis.set('popular', JSON.stringify(data), 'EX', 60 * 60 * 8);
				return data;
			});
	};

	const trending = async () => {
		const cached = await redis.get('trending');
		if (cached) {
			console.log('Cache HIT');
			const ttl = await redis.ttl('trending');
			maxTtl = Math.max(maxTtl, ttl);
			return JSON.parse(cached);
		} else {
			console.log('Cache MISS');
		}
		return await fetch('https://api.delusionz.xyz/trending')
			.then((res) => res.json())
			.then((data) => {
				redis.set('trending', JSON.stringify(data), 'EX', 60 * 60 * 6);
				return data;
			});
	};
	const recent = async () => {
		const cached = await redis.get('recent');
		if (cached) {
			console.log('Cache HIT');
			const ttl = await redis.ttl('recent');
			maxTtl = Math.max(maxTtl, ttl);
			return JSON.parse(cached);
		} else {
			console.log('Cache MISS');
		}

		return await fetch('https://api.consumet.org/meta/anilist/recent-episodes?page=1&provider=zoro')
			.then((res) => res.json())
			.then((data) => {
				redis.set('recent', JSON.stringify(data), 'EX', 60 * 60 * 2);
				return data;
			});
	};

	const [popularData, trendingData, recentData] = await Promise.all([
		popular(),
		trending(),
		recent()
	]);
	setHeaders({ 'Cache-Control': `max-age=${maxTtl}` });
	return {
		popular: popularData,
		trending: trendingData,
		recent: recentData
	};
}
