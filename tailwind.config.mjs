import typography from '@tailwindcss/typography'
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
		  fadeIn: 'fadeIn 0.5s ease-out forwards',
		  fadeOut: 'fadeOut 0.3s ease-in forwards',
		  fadeInScale: 'fadeInScale 0.3s ease-out forwards',
		  fadeOutScale: 'fadeOutScale 0.2s ease-in forwards',
		},
		keyframes: {
		  flotar1: {
			'0%, 100%': { transform: 'translate(0, 0)' },
			'50%': { transform: 'translate(5000px,50000px)' },
		  },
		  flotar2: {
			'0%, 100%': { transform: 'translate(0, 0)' },
			'50%': { transform: 'translate(-30px,-500px)' },
		  },
		  fadeIn: {
			'0%': { opacity: '0' },
			'100%': { opacity: '1' },
		  },
		  fadeOut: {
			'0%': { opacity: '1' },
			'100%': { opacity: '0' },
		  },
		  fadeInScale: {
			'0%': { opacity: '0', transform: 'scale(0.95)' },
			'100%': { opacity: '1', transform: 'scale(1)' },
		  },
		  fadeOutScale: {
			'0%': { opacity: '1', transform: 'scale(1)' },
			'100%': { opacity: '0', transform: 'scale(0.95)' },
		  },
		},
	  },
	},
	plugins: [typography],
  }
  