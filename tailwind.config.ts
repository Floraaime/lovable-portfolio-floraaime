
import type { Config } from "tailwindcss";

// Create a safe version of flattenColorPalette
function flattenColorPalette(colors: Record<string, any>): Record<string, string> {
  const result: Record<string, string> = {};
  
  // Helper function to flatten the colors
  const flattenColors = (obj: Record<string, any>, prefix = '') => {
    for (const key in obj) {
      const value = obj[key];
      
      // If the value is a string (a CSS color value), add it to the result
      if (typeof value === 'string') {
        result[prefix + key] = value;
      } 
      // If it's an object, recursively flatten with a prefix
      else if (typeof value === 'object' && value !== null) {
        flattenColors(value, prefix ? `${prefix}-${key}` : key);
      }
    }
  };
  
  flattenColors(colors);
  return result;
}

// Safe addVariablesForColors function
function addVariablesForColors({ addBase, theme }: { addBase: (obj: any) => void, theme: (path: string) => any }) {
  try {
    const colors = theme('colors') || {};
    const flatColors = flattenColorPalette(colors);
    
    const variables = Object.fromEntries(
      Object.entries(flatColors).map(([key, val]) => [`--${key}`, val])
    );
    
    addBase({
      ':root': variables,
    });
  } catch (error) {
    console.error('Error in addVariablesForColors:', error);
    // Provide default empty implementation to prevent crashes
    addBase({
      ':root': {},
    });
  }
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;
