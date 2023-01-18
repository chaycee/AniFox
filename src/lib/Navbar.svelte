<script>
	import MobileMenu from './MobileMenu.svelte';
	let showMenu = false;
	function toggleMobileMenu() {
		showMenu = !showMenu;
	}
</script>

<header id="page-header" class="flex flex-none items-center z-1">
	<div class="container xl:max-w-7xl mx-auto px-4 lg:px-8">
		<div class="flex justify-between py-10">
			<!-- Left Section -->
			<div class="flex items-center space-x-2 lg:space-x-6">
				<!-- Logo -->
				<a
					href="javascript:void(0)"
					class="group inline-flex items-center space-x-2 font-semibold text-slate-200 hover:text-white active:text-slate-200 uppercase tracking-wider"
				>
					<img
						src="logo.png"
						alt="logo"
						class="w-10 h-10 text-indigo-400 transition -rotate-12 group-hover:rotate-0 group-active:opacity-50"
					/>
					<span class="inline:block sm:inline-block  ">Streamsy</span>
				</a>
				<!-- END Logo -->
			</div>
			<!-- END Left Section -->
			<ul class="text-slate-200  gap-2 items-center text-md hidden lg:text-sm xl:flex lg:flex xl:text-lg font-light ">
				<li class="">
					<a href="#" class="group transition"
						>Home<span
							class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-sky-600"
						/></a
					>
				</li>
				<li class="">
					<a href="#" class="group transition"
						>Most Popular<span
							class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-sky-600"
						/></a
					>
				</li>
				<li class="">
					<a href="#" class="group transition"
						>Subbed Anime<span
							class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-sky-600"
						/></a
					>
				</li>
				<li class="">
					<a href="#" class="group transition"
						>Dubbed Anime<span
							class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-sky-600"
						/></a
					>
				</li>
				<li class="">
					<a href="#" class="group transition"
						>OVAs
						<span
							class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-sky-600"
						/>
					</a>
				</li>
			</ul>
			<!-- Right Section -->
			<div class="flex items-center space-x-2 lg:space-x-4">
				<!-- Search -->
				<form onsubmit="return false;" class="w-40 sm:w-72 lg:w-80 md:w-80">
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
							class="w-full block rounded-full pl-12 pr-5 py-3 leading-5 text-sm bg-slate-800 text-slate-200 placeholder:text-slate-400 border-transparent focus:border-transparent hover:border-transparent focus:ring focus:ring-slate-500 focus:ring-opacity-50"
							id="search"
							name="search"
							placeholder="Search.."
						/>
					</div>
				</form>
				<!-- END Search -->
				<button
					type="button"
					class="hidden md:inline-flex justify-center items-center space-x-2 rounded-md border font-semibold focus:outline-none px-3 py-2 leading-6 border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
				>
					Login
				</button>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="mobile-menu cursor-pointer" on:click={toggleMobileMenu}>
					<svg
						class="hi-solid hi-menu inline-block w-7 h-7 sm:block md:hidden"
						fill="white"
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
		<MobileMenu />
	</div>
</header>
<!-- END Page Header -->
