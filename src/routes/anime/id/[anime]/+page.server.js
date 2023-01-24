/** @type {import('./$types').PageServerLoad} */
export const ssr = true;
export async function load({fetch, params}) {
		const fetchDetails = async (id) => {
			const res = await fetch(`https://api.consumet.org/meta/anilist/info/${id}?provider=zoro`);
			const data = await res.json();
			console.log(data);
			return data;
		}
	return {
		animeInfo: fetchDetails(params.anime)
	};
}
