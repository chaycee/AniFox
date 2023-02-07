<script>
    import { onMount } from "svelte";
    import { clickOutside } from "$lib/outside.js";


    let list = [
        "One Piece",
        "Death Note",
        "Kiminonawa"
    ]

    let showSearching = false;
    let isResults = false;
    let queryTimeoutId;
    let value;
    $: onQueryChange(value);

    function onQueryChange(query) {
        if (query) {
            if (queryTimeoutId) {
                clearTimeout(queryTimeoutId);
            }
            queryTimeoutId = setTimeout(async () => {
                doSearch(query)
            }, 1000)
        }
    }
// E.title.native will give japanese or chinese title instead i changed to e.title.romaji
    async function doSearch(query) {
        fetch("/api/search?q=" + query).then((r) => {
            r.json().then((res) => {
                list = res.results.slice(0, 5).map((e) => {
                    return {
                        title: e.title.english ?? e.title.romaji,
                        id: e.id,
                        img: e.image
                    }
                })
                isResults = true;
            })
        });
    }
</script>

<div class="relative">
    <input
        type="text"
        class="sm:w-96 w-full block border-2  bg-primary border-slate-700 rounded-md pl-8 py-3 leading-5 text-sm placeholder-gray-500 text-white focus:border-gray-500/50  focus:bg-primary focus:ring-gray-500/50 focus:ring-opacity-50 "
        id="search"
        name="search"
        placeholder="Search Anime.."
        bind:value
        on:click={() => {showSearching = true}}
    />
    {#if showSearching && isResults}
    <div
        class="absolute left-0 w-full border-2 bg-primary border-slate-700 border-t-transparent rounded-md px-3 py-3 text-md text-white focus:border-gray-500/50  focus:bg-primary focus:ring-gray-500/50 focus:ring-opacity-50"
        use:clickOutside
        on:outclick={() => {showSearching = false}}
    >
        {#each list as el, i}
        <a on:click={() => { showSearching = false }} href="/anime/id/{el.id}" class="hover:bg-themedarkerPurple hover:bg-opacity-25 rounded-md border-2 border-transparent block pb-2 border-b-slate-800" class:pt-2={i !== 0}>
            <div class="flex">
                <div class="w-8 px-2">
                    <img src={el.img} alt="Anime cover"/>
                </div>
                {el.title}
            </div>
        </a>
        {/each}
        <a on:click={() => { showSearching = false }} href="/search?q={value}" class="hover:bg-themedarkerPurple hover:bg-opacity-25 rounded-md border-2 border-transparent block pt-2">
            More
        </a>
    </div>
    {/if}
</div>