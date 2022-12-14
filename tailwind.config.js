/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		extend: {
			sans: ["Josefin Sans", "sans-serif"],
		},
	},
	plugins: [],
};
