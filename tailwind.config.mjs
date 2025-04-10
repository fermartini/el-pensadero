/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				cinzel: ['"Cinzel Decorative"', 'cursive'],
				cormorant: ['"Cormorant Garamond"', 'serif'],
				spectral: ['Spectral', 'serif'],
			  },
		},
	},
	plugins: [],
}
