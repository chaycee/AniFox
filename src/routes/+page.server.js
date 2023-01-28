/** @type {import('./$types').PageServerLoad} */
export const ssr = true;

export async function load({ fetch }) {
	const popular = async () => {
		return await fetch('https://api.delusionz.xyz/popular').then((res) => res.json());
	};
	const trending = async () => {
		return await fetch('https://api.delusionz.xyz/trending').then((res) => res.json());
	}

	return {

		popular: await popular(),
		trending: await trending()
	};
}
