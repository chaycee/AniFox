/** @type {import('./$types').PageServerLoad} */
export const ssr = true;
export async function load({fetch, params}) {
		const fetchDetails = async (id) => {
			return await fetch(`https://api.consumet.org/meta/anilist/info/${id}?provider=zoro`).then((res) => res.json());

		}
	return {
		animeInfo: fetchDetails(params.anime)
	};
}
