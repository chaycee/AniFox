
import NodeCache from 'node-cache';

const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

export async function load({ fetch }) {

	const populardata = myCache.get("popular");
	if(populardata){
	  console.log("Data is cached:");
	} else {
	  console.log("Data is not cached, making API call...");
	  // make API call and store data in cache
	}
	const popular = async () => {
	  const popularData = myCache.get("popular");
	  if(popularData){
		return popularData;
	  } else {
		return await fetch('https://api.delusionz.xyz/popular')
		  .then((res) => res.json())
		  .then((data) => {
			myCache.set("popular", data);
			return data;
		  });
	  }
	};

	const trending = async () => {
	  const trendingData = myCache.get("trending");
	  if(trendingData){
		return trendingData;
	  } else {
		return await fetch('https://api.delusionz.xyz/trending')
		  .then((res) => res.json())
		  .then((data) => {
			myCache.set("trending", data);
			return data;
		  });
	  }
	};

	const [popularData, trendingData] = await Promise.all([popular(), trending()]);
	return {
	  popular: popularData,
	  trending: trendingData
	};
  }
