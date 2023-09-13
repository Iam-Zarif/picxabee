// /// <reference types="vitest" />
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [react()],
// 	test: {
// 		globals: true,
// 		environment: 'jsdom',
// 		setupFiles: './src/test/setup.js',
// 		css: true,
// 	},
// });



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': '/path/to/your/source',
		},
	},
	// Other Vite configurations go here...

	// Vitest (testing) configuration
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/test/setup.js', // Update this path to match your setup file
		css: true,
	},
});

