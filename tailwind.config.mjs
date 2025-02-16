const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ["Aleo Variable", "Aleo", "AleoVariable", ...defaultTheme.fontFamily.serif],
			},
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}