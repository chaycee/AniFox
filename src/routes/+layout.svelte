<script>
	import '../app.css';
	import Footer from '$lib/components/footer.svelte';

	let genres = [
		'Action',
		'Adventure',
		'Cars',
		'Comedy',
		'Drama',
		'Fantasy',
		'Horror',
		'Mahou Shoujo',
		'Mecha',
		'Music',
		'Mystery',
		'Psychological',
		'Romance',
		'Sci-Fi',
		'Slice of Life',
		'Sports',
		'Supernatural',
		'Thriller'
	];
	let searchInput = false;
	const toggleSidebar = () => {
		const pageContainer = document.getElementById('page-container');
		const pageSidebar = document.getElementById('page-sidebar');
		const pageHeader = document.getElementById('page-header');

		// container and header

		pageContainer.classList.toggle('lg:pl-64');
		pageHeader.classList.toggle('lg:pl-64');
		// desktop
		pageSidebar.classList.toggle('lg:translate-x-0');
		pageSidebar.classList.toggle('lg:-translate-x-full');

		// mobile
		pageSidebar.classList.toggle('translate-x-0');
		pageSidebar.classList.toggle('-translate-x-full');
	};

	function getRainbowColor(index) {
		var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#8b00ff'];
		return colors[index % colors.length];
	}
</script>

<!-- Page Container -->
<!--
  Sidebar on Desktop
    Closed '' (no class)
    Opened 'lg:pl-64'
	pageContainer.classList.toggle('lg:pl-64');
		pageHeader.classList.toggle('lg:pl-64');
-->
<div id="page-container" class="flex flex-col mx-auto w-full min-h-screen bg-primary lg:pl-64">
	<!-- Page Sidebar -->
	<!--
      Sidebar on Mobile
        Closed '-translate-x-full'
        Opened 'translate-x-0'

      Sidebar on Desktop
        Closed 'lg:-translate-x-full'
        Opened 'lg:translate-x-0'
    -->

	<nav
		id="page-sidebar"
		class="flex flex-col fixed top-0 left-0 bottom-0 w-full md:w-64 lg:w-64 h-full bg-primary border-r-[0.2px] border-secondary text-themeWhite z-50 transform transition-transform duration-500 ease-out -translate-x-full lg:translate-x-0 side_bar"
		aria-label="Main Sidebar Navigation "
	>
		<!-- Sidebar Header -->
		<div
			class="h-16 bg-themedarkerPurple bg-opacity-25 flex-none flex items-center justify-between lg:justify-center px-4  w-full"
		>
			<!-- Brand -->
			<a
				href="/"
				class="inline-flex items-center mr-5  space-x-2 font-bold text-2xl font-Monse tracking-wide text-white hover:opacity-75"
			>
				<img
					src="/images/logo.png"
					alt="Logo"
					class="-rotate-12 hover:rotate-0 duration-150 inline-block w-12 h-12 mt-3 text-pink-400"
					width="48px"
					height="48px"
				/>

				<span
					class="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-themeWhite"
					>AniFox</span
				>
			</a>
			<!-- END Brand -->

			<!-- Close Sidebar on Mobile -->
			<div class="lg:hidden">
				<!-- TODO: learn class: -->
				<button
					type="button"
					on:click={toggleSidebar}
					class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-transparent text-white opacity-75 hover:opacity-100 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:opacity-75"
				>
					<svg
						class="hi-solid hi-x inline-block w-4 h-4 -mx-1"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/></svg
					>
				</button>
			</div>
			<!-- END Close Sidebar on Mobile -->
		</div>
		<!-- END Sidebar Header -->

		<!-- Sidebar Navigation -->
		<div class="overflow-y-auto">
			<div class="p-4 w-full">
				<nav class="space-y-1 text-gray-300">
					<a
						data-sveltekit-preload-data="hover"
						href="/"
						class="flex items-center space-x-3 px-3 font-medium rounded text-gray-300 bg-themePurple bg-opacity-60"
					>
						<span class="flex-none flex items-center opacity-50">
							<svg
								class="hi-outline hi-home inline-block w-5 h-5"
								stroke="currentColor"
								fill="none"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
								/></svg
							>
						</span>
						<span class="py-2 grow">Home</span>
					</a>
					<div class="px-3 pt-5 pb-2 text-xs font-medium uppercase tracking-wider text-gray-400">
						Anime
					</div>
					<a
						href="javascript:void(0)"
						class="flex items-center space-x-3 px-3 font-medium rounded  hover:text-gray-100 hover:bg-themelightPurple hover:bg-opacity-60 active:bg-themelightPurple active:bg-opacity-40"
					>
						<span class="flex-none flex items-center opacity-50">
							<svg
								class="bi bi-star inline-block w-5 h-5"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 16 16"
								aria-hidden="true"
								><path
									d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
								/></svg
							>
						</span>
						<span class="py-2 grow">Most Popular</span>
					</a>
					<a
						href="javascript:void(0)"
						class="flex items-center space-x-3 px-3 font-medium rounded  hover:text-gray-100 hover:bg-themelightPurple hover:bg-opacity-60 active:bg-themelightPurple active:bg-opacity-40"
					>
						<span class="flex-none flex items-center opacity-50">
							<svg
								class="bi bi-graph-up-arrow inline-block w-5 h-5"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 16 16"
								aria-hidden="true"
								><path
									fill-rule="evenodd"
									d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
								/></svg
							>
						</span>
						<span class="py-2 grow">Trending</span>
					</a>
					<a
						href="/recently-updated"
						class="flex items-center space-x-3 px-3 font-medium rounded  hover:text-gray-100 hover:bg-themelightPurple hover:bg-opacity-60 active:bg-themelightPurple active:bg-opacity-40"
					>
						<span class="flex-none flex items-center opacity-50">
							<svg
								class="bi bi-clock-history inline-block w-5 h-5"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 16 16"
								aria-hidden="true"
								><path
									d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"
								/><path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" /><path
									d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
								/></svg
							>
						</span>
						<span class="py-2 grow">Recent Episodes</span>
					</a>
					<a
						href="javascript:void(0)"
						class="flex items-center space-x-3 px-3 font-medium rounded  hover:text-gray-100 hover:bg-themelightPurple hover:bg-opacity-60 active:bg-themelightPurple active:bg-opacity-40"
					>
						<span class="flex-none flex items-center opacity-50">
							<svg
								class="hi-mini hi-newspaper inline-block w-5 h-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								><path
									fill-rule="evenodd"
									d="M2 3.5A1.5 1.5 0 013.5 2h9A1.5 1.5 0 0114 3.5v11.75A2.75 2.75 0 0016.75 18h-12A2.75 2.75 0 012 15.25V3.5zm3.75 7a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zm0 3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM5 5.75A.75.75 0 015.75 5h4.5a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75h-4.5A.75.75 0 015 8.25v-2.5z"
									clip-rule="evenodd"
								/><path d="M16.5 6.5h-1v8.75a1.25 1.25 0 102.5 0V8a1.5 1.5 0 00-1.5-1.5z" /></svg
							>
						</span>
						<span class="py-2 grow">Anime News</span>
					</a>
					<a
						href="javascript:void(0)"
						class="flex items-center space-x-3 px-3 font-medium rounded  hover:text-gray-100 hover:bg-themelightPurple hover:bg-opacity-60 active:bg-themelightPurple active:bg-opacity-40"
					>
						<span class="flex-none flex items-center opacity-50">
							<svg
								class="hi-mini hi-calendar inline-block w-5 h-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								><path
									fill-rule="evenodd"
									d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
									clip-rule="evenodd"
								/></svg
							>
						</span>
						<span class="py-2 grow">Episode Schedule</span>
					</a>
				</nav>
				<details
					class="px-5 pt-5 pb-2 text-xs font-medium uppercase tracking-wider text-gray-400 hover:cursor-pointer list-none "
				>
					<summary class="list-outside    relative left-2 text-sm">Genres</summary>

					{#each genres as genre, index}
						<a
							href="javascript:void(0)"
							class="flex items-center space-x-3 px-3 font-medium rounded  hover:text-gray-100 hover:bg-themelightPurple hover:bg-opacity-60 active:bg-themelightPurple active:bg-opacity-40"
						>
							<span class="flex-none flex items-center opacity-70">
								<svg
									class="hi-outline hi-bookmark-alt inline-block w-6 h-7"
									stroke="currentColor"
									fill={getRainbowColor(index)}
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 3 4-3V5a2 2 0 00-2-2H7a2 2 0 00-2 2v8z"
									/></svg
								>
							</span>
							<span class="py-2 grow">{genre}</span>
						</a>
					{/each}
				</details>
			</div>
		</div>
		<!-- END Sidebar Navigation -->
	</nav>

	<!-- Page Sidebar -->

	<!-- Page Header -->
	<!--
      Sidebar on Desktop
        Closed '' (no class)
        Opened 'lg:pl-64'
    -->
	<header
		id="page-header"
		class="flex flex-none items-center h-16 bg-primary shadow-sm fixed top-0 right-0 left-0 z-30 lg:pl-64"
	>
		<div class="flex justify-between max-w-10xl mx-auto px-4 lg:px-8 w-full">
			<!-- Left Section -->
			<div class="flex items-center space-x-2">
				<!-- Toggle Sidebar on Desktop -->
				<div class="hidden lg:block">
					<button
						type="button"
						on:click={toggleSidebar}
						id="sidebarBtn"
						class="inline-flex justify-center items-center space-x-2  font-semibold focus:outline-none px-3 py-3 leading-6 rounded border-slate-700  bg-primary border-[1px] text-gray-800 shadow-sm hover:text-gray-800 hover:bg-secondary hover:border-secondary hover:shadow focus:ring focus:ring-secondary focus:ring-opacity-25 active:bg-secondary active:border-slate-600 active:shadow-none"
					>
						<svg
							class="hi-solid hi-menu-alt-1 inline-block w-5 h-5"
							fill="purple"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							/></svg
						>
					</button>
				</div>
				<!-- END Toggle Sidebar on Desktop -->

				<!-- Toggle Sidebar on Mobile -->
				<div class="lg:hidden">
					<button
						type="button"
						on:click={toggleSidebar}
						class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
					>
						<svg
							class="hi-solid hi-menu-alt-1 inline-block w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							/></svg
						>
					</button>
				</div>
				<!-- END Toggle Sidebar on Mobile -->

				<!-- Search -->
				<div
					class:hidden={searchInput}
					class=" hidden sm:block sm:relative top-16 sm:top-0 "
					id="search-input"
				>
					<form onsubmit="return false;">
						<label
							for="search"
							class="absolute top-1/2 pl-2 sm:pl-0 sm:left-2 transform -translate-y-1/2 "
						>
							<svg
								class="hi-solid hi-search inline-block w-5 h-5 fill-gray-600 stroke-current stroke-3"
								fill="black"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								><path
									fill-rule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clip-rule="evenodd"
								/></svg
							>
						</label>
						<input
							type="text"
							class="sm:w-96 w-full block border-2  bg-primary border-slate-700 rounded-md pl-8 py-3 leading-5 text-sm placeholder-gray-500 text-white focus:border-gray-500/50  focus:bg-primary focus:ring-gray-500/50 focus:ring-opacity-50 "
							id="search"
							name="search"
							placeholder="Search Anime.."
						/>
					</form>
				</div>
				<div class="sm:hidden" id="">
					<!-- class:hidden on click -->
					<button
						type="button"
						on:click={() => {
							searchInput = !searchInput;
						}}
						class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
					>
						<svg
							class="hi-solid hi-search inline-block w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clip-rule="evenodd"
							/></svg
						>
					</button>
				</div>
				<!-- END Search -->
			</div>
			<!-- END Left Section -->

			<!-- Right Section -->
			<div class="flex items-center space-x-2">
				<div class="relative inline-block" />
			</div>
			<!-- END Right Section -->
		</div>
	</header>
	<!-- END Page Header -->

	<!-- Page Content -->
	<main id="page-content" class="flex flex-auto flex-col max-w-full pt-16 pattern-dots-sm">
		<!-- Page Section -->
		<div class="max-w-10xl mx-auto p-4 lg:p-8 w-full font-opensans">
			<slot />
		</div>
		<!-- END Page Section -->
	</main>
	<!-- END Page Content -->
	<Footer />
</div>

<!-- END Page Container -->
<style>

	::-webkit-scrollbar {
		height: 12px;
		width: 6px;
		background: #000;
	}

	::-webkit-scrollbar-thumb {
		background: #464849;
		-webkit-border-radius: 1ex;
		-webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
	}

	::-webkit-scrollbar-corner {
		background: #000;
	}
	#page-container,
	#page-header {
		/* smooth transition on close sidebar */
		transition: all 0.3s ease-in-out;
	}
</style>
