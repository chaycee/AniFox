<!-- Simple Dark Navigation with Extras -->
<script>
	import { fade, fly } from 'svelte/transition';
	import { mobileMenuState } from './stores.js';
	export let showMenu;
	$: showMenu;
</script>

{#if showMenu}
	<nav
		class="space-y-1 md:hidden absolute z-10  w-60 right-0 top-0 bg-[#201e27] h-full"
		in:fly={{ x: 0, duration: 1000 }}
		out:fade
	>
		<div class="flex justify-end  my-3 items-center">
			<div
				on:click={() => {
					showMenu = false;
					mobileMenuState.set(false);
				}}
				on:keydown={(event) => {
					if (event.keyCode === 13 || event.keyCode === 32) {
					showMenu = false;
					mobileMenuState.set(false);
					}
					}}
				class="font-semibold  inline-flex px-2 py-1 leading-4 items-center space-x-1 text-xs rounded-full text-slate-300 bg-gray-600"
			>
				<span>Close Menu</span>
				<svg
					class="hi-solid hi-arrow-right inline-block w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/></svg
				>
			</div>
		</div>
		<a
			on:click={() => {
				showMenu = false;
				mobileMenuState.set(false);
			}}
			data-sveltekit-preload-code="hover"
			href="/"
			class="flex items-center space-x-3 px-3 font-medium rounded dark:text-gray-50 bg-gray-700 bg-opacity-60 "
		>
			<span class="flex-none flex items-center opacity-50">
				<svg
					class="hi-outline hi-home inline-block w-5 h-5 "
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
		<div
			class="px-3 pt-5 pb-2 text-xs font-medium uppercase tracking-wider dark:text-gray-400 text-gray-700 "
		>
			Anime
		</div>
		<a
			on:click={() => {
				showMenu = false;
				mobileMenuState.set(false);
			}}
			data-sveltekit-preload-code="hover"
			href="javascript:void(0)"
			class="flex items-center  px-3 font-medium rounded-md dark:text-gray-300 hover:text-gray-100 hover:bg-gray-700 hover:bg-opacity-60 active:bg-gray-700 active:bg-opacity-40 border-b-[1px] border-gray-700"
		>
			<span class="flex-none flex items-center opacity-50" />
			<span class="py-2 grow">Most Popular</span>
		</a>
		<a
			on:click={() => {
				showMenu = false;
				mobileMenuState.set(false);
			}}
			data-sveltekit-preload-code="hover"
			href="javascript:void(0)"
			class="flex items-center  px-3 font-medium rounded dark:text-gray-300 hover:text-gray-100 hover:bg-gray-700 hover:bg-opacity-60 active:bg-gray-700 active:bg-opacity-40 border-b-[1px] border-gray-700"
		>
			<span class="flex-none flex items-center opacity-50" />
			<span class="py-2 grow">Trending</span>
		</a>
		<a
			on:click={() => {
				showMenu = false;
				mobileMenuState.set(false);
			}}
			data-sveltekit-preload-code="hover"
			href="javascript:void(0)"
			class="flex items-center  px-3 font-medium rounded dark:text-gray-300 hover:text-gray-100 hover:bg-gray-700 hover:bg-opacity-60 active:bg-gray-700 active:bg-opacity-40 border-b-[1px] border-gray-700"
		>
			<span class="flex-none flex items-center opacity-50" />
			<span class="py-2 grow">Airing Schedule</span>
		</a>
		<a
			on:click={() => {
				showMenu = false;
				mobileMenuState.set(false);
			}}
			data-sveltekit-preload-code="hover"
			href="javascript:void(0)"
			class="flex items-center  px-3 font-medium rounded dark:text-gray-300 hover:text-gray-100 hover:bg-gray-700 hover:bg-opacity-60 active:bg-gray-700 active:bg-opacity-40 border-b-[1px] border-gray-700"
		>
			<span class="flex-none flex items-center opacity-50" />
			<span class="py-2 grow">Recent Episodes</span>
		</a>
		<div
			class="px-3 pt-5 pb-2 text-xs font-medium uppercase tracking-wider dark:text-gray-400 text-gray-700"
		>
			Account
		</div>
		<a
			on:click={() => {
				showMenu = false;
				mobileMenuState.set(false);
			}}
			data-sveltekit-preload-code="hover"
			href="javascript:void(0)"
			class="flex items-center space-x-3 px-3 font-medium rounded dark:text-gray-300 hover:text-gray-100 hover:bg-gray-700 hover:bg-opacity-60 active:bg-gray-700 active:bg-opacity-40 border-b-[1px] border-gray-700"
		>
			<span class="flex-none flex items-center opacity-50">
				<svg
					class="hi-outline hi-user inline-block w-5 h-5"
					stroke="currentColor"
					fill="none"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
					/></svg
				>
			</span>
			<span class="py-2 grow">Profile</span>
		</a>
		<a
			on:click={() => {
				showMenu = false;
				mobileMenuState.set(false);
			}}
			data-sveltekit-preload-code="hover"
			href="javascript:void(0)"
			class="flex items-center space-x-3 px-3 font-medium rounded dark:text-gray-300 hover:text-gray-100 hover:bg-gray-700 hover:bg-opacity-60 active:bg-gray-700 active:bg-opacity-40 border-b-[1px] border-gray-700"
		>
			<span class="flex-none flex items-center opacity-50">
				<svg
					class="hi-outline hi-cog inline-block w-5 h-5"
					stroke="currentColor"
					fill="none"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
					/><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					/></svg
				>
			</span>
			<span class="py-2 grow">Settings</span>
		</a>
		<a
			on:click={() => {
				showMenu = false;
				mobileMenuState.set(false);
			}}
			data-sveltekit-preload-code="hover"
			href="javascript:void(0)"
			class="flex items-center space-x-3 px-3 font-medium rounded dark:text-gray-300 hover:text-gray-100 hover:bg-gray-700 hover:bg-opacity-60 active:bg-gray-700 active:bg-opacity-40 border-b-[1px] border-gray-700"
		>
			<span class="flex-none flex items-center opacity-50">
				<svg
					class="hi-outline hi-lock-open inline-block w-5 h-5"
					stroke="currentColor"
					fill="none"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
					/></svg
				>
			</span>
			<span class="py-2 grow">Log out</span>
		</a>
	</nav>
	<!-- END Simple Dark Navigation with Extras -->
{/if}
