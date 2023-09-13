import { defineConfig } from 'vite';
import ssr from 'vite-plugin-ssr/plugin';

export default defineConfig({
	plugins: [ssr()],
	build: {
		outDir: 'build',
		ssr: 'build',
	},
});
