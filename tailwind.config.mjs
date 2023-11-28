/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@wp-block-tools/styles/**/*.js',
	],
	theme: {
		extend: {
			colors: {
				"starlight" 	:	"var(--color--starlight)",
				"black-hole"	:	"var(--color--black-hole)",
				"event-horizon" :	"var(--color--event-horizon)",
				"blast-off"		:	"var(--color--blast-off)",	
			}
		},
	},
	plugins: [],
}
