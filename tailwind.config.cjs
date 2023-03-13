/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"black-pearl": {
					50: "#eaffff",
					100: "#cbfdff",
					200: "#9efaff",
					300: "#5bf2ff",
					400: "#12e1fe",
					500: "#00c4e5",
					600: "#009bc0",
					700: "#047b9a",
					800: "#0d637d",
					900: "#061f28",
				},
				shakespeare: {
					50: "#effafc",
					100: "#d6f0f7",
					200: "#b2e1ef",
					300: "#7dcce3",
					400: "#46afd0",
					500: "#2691b4",
					600: "#227498",
					700: "#225f7c",
					800: "#244f66",
					900: "#224357",
				},
				primary: "#2ca1e0",
				"blue-bell": "#acb9ee",
				"blue-bell-2": "#8be6ed",
				"primary-2": "#1d303b",
				"secondary-2": "#21d3a9",
				"third-2": "#2ca482",
			},
			fontSize: {
				fluid: "clamp(0.9rem, 3vw - 1rem, 0.9rem)",
			},
		},
	},
	plugins: [],
};
