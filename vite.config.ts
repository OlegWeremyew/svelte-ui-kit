import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocessor from 'svelte-preprocess';
import jsonCombine from 'rollup-plugin-json-combine';
import path from 'path';
import zipPack from 'vite-plugin-zip-pack';
import autoprefixer from 'autoprefixer';
import { fileURLToPath, URL } from 'node:url';
// import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	css: {
		devSourcemap: true,
	},
	cssPreprocessOptions: {
		scss: {
			additionalData: ` @import "@/style/mixins.scss"; `,
		},
	},
	plugins: [
		jsonCombine({
			input: ['src/i18n/*.json'],
			fileName: 'src/store/i18n.json',
			merge: (items) => {
				const i18n = {};
				items.forEach((item) => {
					i18n[item.name] = item.res;
				});
				return i18n;
			},
		}),
		svelte({
			configFile: 'svelte.config.js',
			preprocess: [sveltePreprocessor({
				typescript: true,
				postcss: {
					plugins: [autoprefixer({
						overrideBrowserslist: [
							'> 0.2%',
							'not dead',
							'safari >= 12',
							'ios >= 12',
						],
					})],
				},
			})],
			extensions: ['.svelte'],
		}),
		// viteStaticCopy({
		//   targets: [
		//     {
		//       src: 'content/terms/dist/!(*.php)',
		//       dest: 'terms'
		//     },
		//     {
		//       src: 'content/privacy/dist/!(*.php)',
		//       dest: 'privacy'
		//     }
		//   ]
		// }),
	],
	build: {
		outDir: 'dist',
		assetsDir: 'script',
		rollupOptions: {
			plugins: [
				zipPack({
					outDir: 'dist',
					outFileName: 'index.zip',
				}),
			],
			output: {
				assetFileNames: 'resources/[ext]/[name][extname]',
			},
		},
	},
	server: {
		open: true,
		port: 9000,
	},
	resolve: {
		// alias: [
		// 	{ find: '@', replacement: path.resolve(__dirname, './src') },
		// 	{ find: 'styles', replacement: path.resolve(__dirname, './src/styles') },
		// ],
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			styles: fileURLToPath(new URL("./src/styles", import.meta.url)),
		},
	},
});
