/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		colors: {
			'primary-color': '#349999',
			'secondary-color': '#A7C5C5',
			white: '#fff',
			black: '#111',
			red: '#F20519',
			blue: '#304269',
			gray: '#9ca3af',
			// msg - #35393B
			// msg - 2nd = #3D4244
			'gray-400': '#94a3b8',
			'light-gray': '#f5f5f5',
			'black-bg-primary': '#5A5A5A',
			'black-bg-secondary': '#333333 ',
			'teal-900': '#042f2e',

			'teal-700': '#0f766e',

			'teal-500': '#14b8a6',

			'teal-200': '#99f6e4',

			'teal-100': '#ccfbf1',
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [],
	},
};
