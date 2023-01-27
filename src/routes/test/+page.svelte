<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css/themes/splide-skyblue.min.css';
    export let data;
    $: console.log(data);

</script>

<!--

    ADD YOUR MAIN CONTENT BELOW

        <!-- Placeholder -->
<div
	class="w-full h-full flex items-center justify-center rounded-xl  text-gray-400 "
>
	<Splide aria-label="My Favorite Images" class="rounded-3xl "
        options={{

            height: '35rem',
            type: 'loop',
            perPage: 1,
            perMove: 1,
            gap: '1rem',
            autoplay: true,
            pauseOnHover: false,
            resetProgress: false,
            interval: 3000,
            pagination: true,
            arrows: true,


        }}
    >
        {#each data.popular as item,i}

        {#if item.mappings.thevdb.artworks}
		<SplideSlide class='' >


			<img src={`https://images.weserv.nl/?url=cors.proxy.consumet.org/${item.mappings.thevdb.artworks[0]}&w=1600&h=560&fit=fill&output=webp&af`} class="rounded-3xl" alt="Anime Cover"/>



		</SplideSlide>
        {/if}
        {/each}
	</Splide>
</div>

<!--

    ADD YOUR MAIN CONTENT ABOVE

    -->
