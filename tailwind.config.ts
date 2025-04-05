import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",

		// Path to Tremor module
		"./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				slideInAndBounce: {
				  '0%': { transform: 'translateX(100%)', opacity: '0' },
				  '50%': { transform: 'translateX(0)', opacity: '1' },
				  '60%, 100%': { transform: 'translateY(0)' },
				  '80%': { transform: 'translateY(-5%)' },
				},
				bounceForever: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5%)' },
				  },  
			  },
			  animation: {
				slideInAndBounce: 'slideInAndBounce 2s ease-out, bounceForever 3s infinite ease-in-out 2s',
			  },

			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"custom-radial":
					"radial-gradient(147.22% 131.89% at 16.2% 95.73%, #9DBDC1 0%, rgba(194, 230, 213, 0.44) 53.5%, #9A7B3F 100%)",
				"trandsparent-gradient":
					"linear-gradient(90deg, #FFFFFF00 0%, #DDDDDD7A 48%)",
			},
			fontFamily: {
				pegsaiSFProDisplay: ["var(--font-sf-pro-display)"],
				pegsaiCabinetGrotesk: ["var(--font-cabinet-grotesk)"],
				pegsaiInter: ["var(--font-inter)"],
			},
			spacing: {
				is01px: "1px",
				529: "529px",
			},
			colors: {
				"pegsai-primary-blue": "#435769",
				"pegsai-primary-dark-brown": "#AB5517",
				"pegsai-primary-light-brown": "#F3B875",
				"pegsai-warning": "#E9D502",
				"pegsai-green": "#199B6C",
				"pegsai-text-light-blue": "#526581",
				"pegsai-dark-green": "#1F7959",
				"pegsai-light-green": "#D4F7E4",
				"pegsai-background-grey": "#DEDEDE4F",
				"pegsai-background-white": "#F8FDFF",
				"pegsai-background-light-grey": "#F6F7F7",
				"pegsai-background-green": "#199B6C",
				"pegsai-background-orange": "#F6D6A4",
				"pegsai-border-grey": "#C6C6C6",
				"pegsai-border-light-green": "#77DEB2",
				"pegsai-font-green": "#199B6C",
				"pegsai-font-grey": "#959596",
				"pegsai-font-black": "#18181B",
				"pegsai-font-light-grey": " #959596",
				"pegsai-font-dark-grey": "#636363",
				tremor: {
					brand: {
						faint: colors.blue[50],
						muted: colors.blue[200],
						subtle: colors.blue[400],
						DEFAULT: "#199B6C",
						emphasis: colors.blue[700],
						inverted: colors.white,
					},
					background: {
						muted: colors.gray[50],
						subtle: colors.gray[100],
						DEFAULT: colors.white,
						emphasis: colors.gray[700],
					},
					border: {
						DEFAULT: colors.gray[200],
					},
					ring: {
						DEFAULT: colors.gray[200],
					},
					content: {
						subtle: colors.gray[400],
						DEFAULT: colors.gray[500],
						emphasis: colors.gray[700],
						strong: colors.gray[900],
						inverted: colors.white,
					},
				},
				// "dark-tremor": {
				// 	brand: {
				// 		faint: "#0B1229",
				// 		muted: colors.blue[950],
				// 		subtle: colors.blue[800],
				// 		DEFAULT: colors.blue[500],
				// 		emphasis: colors.blue[400],
				// 		inverted: colors.blue[950],
				// 	},
				// 	background: {
				// 		muted: "#131A2B",
				// 		subtle: colors.gray[800],
				// 		DEFAULT: colors.gray[900],
				// 		emphasis: colors.gray[300],
				// 	},
				// 	border: {
				// 		DEFAULT: colors.gray[800],
				// 	},
				// 	ring: {
				// 		DEFAULT: colors.gray[800],
				// 	},
				// 	content: {
				// 		subtle: colors.gray[600],
				// 		DEFAULT: colors.gray[500],
				// 		emphasis: colors.gray[200],
				// 		strong: colors.gray[50],
				// 		inverted: colors.gray[950],
				// 	},
				// },
			},
			boxShadow: {
				// light
				"tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
				"tremor-card":
					"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
				"tremor-dropdown":
					"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
				// dark
				"dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
				"dark-tremor-card":
					"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
				"dark-tremor-dropdown":
					"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
			},
			borderRadius: {
				"tremor-small": "0.375rem",
				"tremor-default": "0.5rem",
				"tremor-full": "9999px",
			},
			fontSize: {
				"tremor-label": ["0.75rem", { lineHeight: "1rem" }],
				"tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
				"tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
				"tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
			},

			screens: {
				sm: "640px",
				// => @media (min-width: 640px) { ... }

				md: "768px",
				// => @media (min-width: 768px) { ... }

				lg: "1024px",
				// => @media (min-width: 1024px) { ... }

				xl: "1280px",
				// => @media (min-width: 1280px) { ... }

				"2xl": "1536px",
				// => @media (min-width: 1536px) { ... }

				MobileScreen: { max: "480.5px" },
				TabletScreen: { min: "480.5px", max: "1024.5px" },
				DesktopScreen: { min: "1024.5px" },
			},
		},
	},
	variants: {
		extend: {
			borderWidth: ["first", "last"],
		},
	},
	safelist: [
		{
			pattern:
				/^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ["hover", "ui-selected"],
		},
		{
			pattern:
				/^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ["hover", "ui-selected"],
		},
		{
			pattern:
				/^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ["hover", "ui-selected"],
		},
		{
			pattern:
				/^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
		{
			pattern:
				/^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
		{
			pattern:
				/^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
	],

	plugins: [
		require("@headlessui/tailwindcss"),
		require("@tailwindcss/forms"),
		function ({ addUtilities }: any) {
			addUtilities({
				'.flex-center-col': {
          display: 'flex',
          'flex-direction': 'column',
          'justify-content': 'center',
          'align-items': 'center',
        },
				".hide-scrollbar": {
					"scrollbar-width": "none" /* Firefox */,
					"-ms-overflow-style": "none" /* IE and Edge */,
					"&::-webkit-scrollbar": {
						display: "none" /* Chrome, Safari, Opera */,
					},
				},
			});
		},
	],
};

export default config;
