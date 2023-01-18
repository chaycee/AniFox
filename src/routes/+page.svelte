<script>
	function dark() {
		document.documentElement.classList.add('dark');
	}

	import { CarouselTransition } from 'flowbite-svelte'
	let showThumbs = false;
	let showCaptions = false;
	let showIndicators = false;
	let slideControls = false;
	export const images = [
		{
			id: 0,
			name: 'Cosmic timetraveler',
			imgurl:
				'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg',
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
			thumbWidth: 1000
		},
		{
			id: 1,
			name: 'Cristina Gottardi',
			imgurl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-PEn1CTc93blC.jpg',
			attribution: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com'
		},
		{
			id: 2,
			name: 'Johannes Plenio',
			imgurl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1535-lawCwhzhi96X.jpg',
			attribution: 'johannes-plenio-RwHv7LgeC7s-unsplash.com'
		},
		{
			id: 3,
			name: 'Jonatan Pie',
			imgurl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21459-DUKLgasrgeNO.jpg',
			attribution: 'jonatan-pie-3l3RwQdHRHg-unsplash.com',
			thumbWidth: 20
		},
		{
			id: 4,
			name: 'Mark Harpur',
			imgurl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11061-sIpBprNRfzCe.png',
			attribution: 'mark-harpur-K2s_YE031CA-unsplash'
		},
		{
			id: 5,
			name: 'Pietro De Grandi',
			imgurl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-bbBWj4pEFseh.jpg',
			attribution: 'pietro-de-grandi-T7K4aEPoGGk-unsplash'
		},
		{
			id: 6,
			name: 'Sergey Pesterev',
			imgurl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21087-UV2tu6exrfXz.jpg',
			attribution: 'sergey-pesterev-tMvuB9se2uQ-unsplash'
		},
		{
			id: 7,
			name: 'Solo travel goals',
			imgurl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx20605-fmnHdfurM7m6.jpg',
			attribution: 'solotravelgoals-7kLufxYoqWk-unsplash'
		}
	];
</script>

<div class="max-w-max  opacity-60 object-cover">
	<CarouselTransition {images} loop transitionType="fade" transitionParams="{{ duration: 1000 }}" showCaptions={false} showThumbs={false} slideControls={false} duration="50000" />
</div>
