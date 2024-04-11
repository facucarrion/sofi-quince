/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      colors: {
        primary: '#af76d4',
        secondary: '#F5A78B',
        tertiary: '#FAF6F0'
      }
    }
  },
	plugins: [],
}
