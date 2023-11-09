/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#f37728",
			},
			fontFamily: {
				sans: ["Inter var", ...defaultTheme.fontFamily.sans],
				body: ["Arial"],
			},
		},
	},
	plugins: [],
}
