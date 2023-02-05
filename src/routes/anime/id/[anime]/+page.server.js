import { redis } from '$lib/server/redis';
export async function load({ fetch, params, url, setHeaders }) {
	const episodeId = url.searchParams.get('ep');
	const fetchDetails = async (id) => {
		const cached = await redis.get(`anime:${id}`);
		if (cached) {
			console.log('Cache HIT');
			const ttl = await redis.ttl(`anime:${id}`);
			setHeaders({ 'Cache-Control': `public, max-age=${ttl}` });
			return JSON.parse(cached);
		} else {
			console.log('Cache MISS');
		}

		return await fetch(`https://api.consumet.org/meta/anilist/info/${id}?provider=zoro`).then(
			(res) => res.json()
			.then((data) => {
				redis.set(`anime:${id}`, JSON.stringify(data), 'EX', 60 * 60 * 24);
				return data;
			})
		);
	};

	return {
		episodeId,
		animeInfo: fetchDetails(params.anime)
	};
}
