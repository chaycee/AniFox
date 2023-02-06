/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const popular = async () => {
		return await fetch('https://api.delusionz.xyz/popular')
			.then((res) => res.json())

			.then((data) => {

				return data;
			});
	};
	return {

			popular: await popular(),
		
	};
}
