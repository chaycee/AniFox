/** @type {import('./$types').PageServerLoad} */
export async function load({fetch, params, url}) {
	const episodeId = url.searchParams.get('ep');
	const fetchDetails = async (id) => {
		return await fetch(`https://api.consumet.org/meta/anilist/info/${id}?provider=zoro`).then((res) => res.json());
	}

	return {
		episodeId,
		animeInfo: fetchDetails(params.anime)
	};
}
