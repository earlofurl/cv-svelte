import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

let runMode: string;
let hostMode: boolean;

if (process.env.NODE_ENV === 'production') {
	runMode = 'prod';
	hostMode = false;
} else {
	runMode = 'dev';
	hostMode = true;
}

const config: UserConfig = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		host: hostMode,
		port: 3069
	}
};

export default config;
