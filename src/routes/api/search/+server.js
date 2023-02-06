import { error, json } from '@sveltejs/kit';
import { redis } from '$lib/server/redis';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    const query = url.searchParams.get("q")
    if (!query) {
        return error(400);
    }
    const cached = await redis.get(`search:${query}:page:1`);
    if (cached) {
        console.log('Cache HIT');
        return json(JSON.parse(cached));
    } else {
        console.log('Cache MISS');
        let res =  await fetch(`https://api.consumet.org/meta/anilist/${query}`);
        let data = await res.json();
        redis.set(`search:${query}:page:1`, JSON.stringify(data), 'EX', 60 * 60 * 24);
        return res;
    }
};