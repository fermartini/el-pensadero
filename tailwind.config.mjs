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
			animation: {
				flotar1: "flotar1 20s ease-in-out infinite",
				flotar2: "flotar2 20s ease-in-out infinite",
			},
			keyframes: {
				flotar1: {
					'0%, 100%': { transform: 'translate(0, 0)' },
					'50%': { transform: 'translate(50px,500px)' },
				},
				flotar2: {
					'0%, 100%': { transform: 'translate(0, 0)' },
					'50%': { transform: 'translate(-30px,-500px)' },
				},
			},
		},
		plugins: [],
	}
}