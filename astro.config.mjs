import { defineConfig } from "astro/config"
import partytown from "@astrojs/partytown"
import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
	integrations: [
		svelte(),
		tailwind(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
	],
	site: "https://uplionsserve.org",
	output: "static",
})
