
import type { Config } from "tailwindcss";

// This function adds each Tailwind color as a global CSS variable, e.g. var(--sky-500)
function addVariablesForColors({ addBase, theme }: any) {
	if (!theme || typeof theme !== 'function') {
		console.error('Theme function is undefined or not a function');
		return;
	}

	try {
		let allColors = flattenColorPalette(theme("colors"));
		let newVars = Object.fromEntries(
			Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
		);

		addBase({
			":root": newVars,
		});
	} catch (error) {
		console.error('Error in addVariablesForColors:', error);
	}
}

// This custom function flattens the color palette to avoid issues with undefined values
function flattenColorPalette(colors: any): Record<string, string> {
	if (!colors || typeof colors !== 'object') {
		return {};
	}

	const result: Record<string, string> = {};

	const flattenColors = (colorObj: any, prefix = '') => {
		if (typeof colorObj === 'string') {
			result[prefix.slice(0, -1)] = colorObj;
			return;
		}

		for (const key in colorObj) {
			if (Object.prototype.hasOwnProperty.call(colorObj, key)) {
				const value = colorObj[key];
				const newPrefix = prefix ? `${prefix}${key}-` : `${key}-`;
				
				if (typeof value === 'string' || typeof value === 'number') {
					result[prefix ? `${prefix}${key}` : key] = value.toString();
				} else if (typeof value === 'object' && value !== null) {
					flattenColors(value, newPrefix);
				}
			}
		}
	};

	flattenColors(colors);
	return result;
}

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
				portfolio: {
					purple: '#7e22ce',
					'light-purple': '#a855f7',
					'dark-purple': '#581c87'
				}
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
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'aurora': {
					from: {
						backgroundPosition: "50% 50%, 50% 50%",
					},
					to: {
						backgroundPosition: "350% 50%, 350% 50%",
					},
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'aurora': 'aurora 60s linear infinite'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		addVariablesForColors
	],
} satisfies Config;
