<script>
	import { DarkMode } from 'flowbite-svelte';
	import MobileMenu from './MobileMenu.svelte';
	import { mobileMenuState } from './stores.js';

	let showMenu = false;
	mobileMenuState.subscribe((value) => {
		showMenu = value;
	});
	function toggleMobileMenu() {
		showMenu = !showMenu;
		mobileMenuState.set(true);
	}
	let mobileSearch = false;
	function toggleMobileSearch() {
		mobileSearch = !mobileSearch;
	}

	// Dark Mode
</script>

<header
	id="page-header"
	class="flex flex-none items-center z-1 text-black dark:text-white"
	ondragstart="false"
>
	<div class="container xl:max-w-8xl mx-auto lg:px-0">
		<div class="flex justify-between pt-10 relative">
			<!-- Left Section -->
			<div class="flex items-center space-x-2 lg:space-x-6 " ondragstart="false">
				<!-- Logo -->
				<a
					data-sveltekit-preload-code="hover"
					href="/"
					class="group inline-flex items-center space-x-2 font-semibold text-slate-200 hover:text-white active:text-slate-200 uppercase tracking-wider mr-4 xl:mr-0"
				>
					<img
						src="/images/logo.png"
						alt="logo"
						class=" h-14 transition -rotate-12  group-hover:rotate-0 group-active:opacity-60"
					/>
					<span
						class="font-Monse inline-block text-black text-lg md:text-xs xl:text-xl dark:text-slate-200 mb-3"
						>Anifox</span
					>
				</a>
				<!-- END Logo -->
			</div>
			<!-- TODO: add curent clicked Tab color and change hover color -->
			<!-- END Left Section -->
			<ul
				class="text-black dark:text-slate-300  gap-8 items-center text-md hidden lg:text-sm xl:flex lg:flex xl:text-lg font-light mx-1 mb-2 "
			>
				<li class="">
					<a
						data-sveltekit-preload-code="hover"
						href="/"
						id="http://localhost:3000"
						class="group transition  target:text-blue-700"
						>Home<span
							class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-[#dc5a5b]"
						/></a
					>
				</li>
				<li class="">
					<a
						data-sveltekit-preload-code="hover"
						href="#"
						class="group transition focus:text-blue-700"
						>Most Popular<span
							class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-[#dc5a5b]"
						/></a
					>
				</li>
				<li class="">
					<a
						data-sveltekit-preload-code="hover"
						href="#"
						class="group transition focus:text-blue-700"
						>Subbed Anime<span
							class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-[#dc5a5b]"
						/></a
					>
				</li>
				<li class="">
					<a
						data-sveltekit-preload-code="hover"
						href="#"
						class="group transition focus:text-blue-700"
						>Dubbed Anime<span
							class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-[#dc5a5b]"
						/></a
					>
				</li>
			</ul>
			<form onsubmit="return false;" class="w-40 sm:w-72 lg:w-80  hidden md:block">
				<div class="relative">
					<div class="absolute top-0 left-0 bottom-0 flex items-center justify-center w-14">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="w-5 h-5 text-slate-500"
						>
							<path
								fill-rule="evenodd"
								d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>

					<input
						type="text"
						class="w-full block  rounded-full pl-12 pr-5 py-3 leading-5 text-sm bg-slate-400 dark:bg-[#201e27] text-black dark:text-slate-200 placeholder-slate-500 dark:placeholder:text-slate-400 border-transparent focus:border-transparent hover:border-transparent focus:ring focus:ring-slate-500 focus:ring-opacity-50"
						id="search"
						name="search"
						placeholder="Search.."
					/>
				</div>
			</form>
			{#if mobileSearch}
				<form onsubmit="return false;" class="w-full absolute  px-1 top-20  md:hidden">
					<div class="relative">
						<div class="absolute top-0 left-0 bottom-0 flex items-center justify-center w-14">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="w-5 h-5 text-slate-500"
							>
								<path
									fill-rule="evenodd"
									d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>

						<input
							type="text"
							class="w-full   block rounded-md pl-12 pr-5 py-3 leading-5 text-sm bg-slate-300 dark:bg-slate-800 text-black dark:text-slate-200 placeholder-slate-500 dark:placeholder:text-slate-400 border-transparent focus:border-transparent hover:border-transparent focus:ring focus:ring-slate-500 focus:ring-opacity-50"
							id="search"
							name="search"
							placeholder="Search.."
						/>
					</div>
				</form>
			{/if}
			<!-- Right Section -->
			<div class="flex items-center space-x-2 lg:space-x-4 mb-2">
				<button class=" block md:hidden" id="mobile-search" on:click={toggleMobileSearch}>
					<svg
						class="hi-solid hi-search inline-block w-7 h-6"
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
				<!-- Search -->

				<!-- END Search -->
				<button
					type="button"
					class="hidden md:inline-flex justify-center items-center space-x-2 rounded-md border font-semibold focus:outline-none px-3 py-2 leading-6 border-[#442b38] bg-[#442b38] text-red-500 hover:text-red-400 hover:bg-[#523343] hover:border-[#442b38] focus:ring focus:ring-red-500 focus:ring-opacity-50 active:bg-[#442b38] active:border-[#442b38]"
				>
					Login
				</button>
				<!-- <DarkMode class="hidden md:inline-block">
					<svelte:fragment slot="lightIcon">
						<svg
							class="hi-solid hi-sun inline-block w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
								clip-rule="evenodd"
							/></svg
						>
					</svelte:fragment>
					<svelte:fragment slot="darkIcon">
						<svg
							class="hi-solid hi-moon inline-block w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg
						>
					</svelte:fragment>
				</DarkMode> -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="mobile-menu cursor-pointer" on:click={toggleMobileMenu}>
					<svg
						class="hi-solid hi-menu inline-block w-7 h-7 sm:block md:hidden"
						fill="#606070"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						/></svg
					>
				</div>

				<!-- END User Dropdown -->
			</div>
			<!-- END Right Section -->
		</div>
		<MobileMenu {showMenu} />
	</div>
</header>
<!-- END Page Header -->
