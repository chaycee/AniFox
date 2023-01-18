import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	vitePlugin: {
		experimental: {
			inspector: {
				toggleKeyCombo: 'shift',
				// hold and release key to toggle inspector mode
				holdMode: true,
				// show or hide the inspector option
				showToggleButton: 'always',
				// inspector position
				toggleButtonPos: 'top-right'
			}
		}
	},

	kit: {
		adapter: adapter()
	},
	preprocess: vitePreprocess()
};

export default config;
