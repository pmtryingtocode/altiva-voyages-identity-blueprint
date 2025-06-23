
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Altiva Voyages Brand Colors
				sage: {
					50: '#f6f7f6',
					100: '#e3e7e3',
					200: '#c7d0c8',
					300: '#a3b3a5',
					400: '#7a917e',
					500: '#5c7560',
					600: '#47594b',
					700: '#3a4a3d',
					800: '#313d33',
					900: '#2a332c',
				},
				mineral: {
					50: '#f0f7ff',
					100: '#e0f0fe',
					200: '#b9e1fe',
					300: '#7cc9fd',
					400: '#36affa',
					500: '#0c95eb',
					600: '#0075c9',
					700: '#015ea3',
					800: '#065086',
					900: '#0b4370',
				},
				sand: {
					50: '#fdf8f3',
					100: '#faf0e4',
					200: '#f4ddc3',
					300: '#ecc498',
					400: '#e2a56b',
					500: '#db8c4a',
					600: '#cd733f',
					700: '#ab5a36',
					800: '#884833',
					900: '#6e3c2d',
				},
				terracotta: {
					50: '#fdf6f3',
					100: '#fbeae4',
					200: '#f6d2c3',
					300: '#efb098',
					400: '#e5896b',
					500: '#dd6a4a',
					600: '#cf5540',
					700: '#ad4337',
					800: '#8a3833',
					900: '#70322e',
				},
			},
			fontFamily: {
				'serif': ['Cormorant Garamond', 'serif'],
				'sans': ['Work Sans', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'parallax': {
					'0%': { transform: 'translateY(0px)' },
					'100%': { transform: 'translateY(-50px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 1.5s ease-out',
				'parallax': 'parallax 20s ease-in-out infinite alternate'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
