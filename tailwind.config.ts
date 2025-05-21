
import type { Config } from "tailwindcss";

// This function adds each Tailwind color as a global CSS variable, e.g. var(--sky-500)
function addVariablesForColors({ addBase, theme }: any) {
  try {
    // Safely get the color palette
    const colors = theme('colors') || {};
    
    // Function to manually flatten the color palette
    function manuallyFlattenColorPalette(colors: Record<string, any>) {
      const result: Record<string, string> = {};
      
      // Process each color
      Object.entries(colors).forEach(([colorName, colorValue]) => {
        if (typeof colorValue === 'string') {
          result[colorName] = colorValue;
        } else if (typeof colorValue === 'object' && colorValue !== null) {
          // Handle nested color objects (like blue.500)
          Object.entries(colorValue).forEach(([shade, value]) => {
            if (typeof value === 'string') {
              result[`${colorName}-${shade}`] = value;
            }
          });
        }
      });
      
      return result;
    }
    
    // Use our manual flattening function
    const allColors = manuallyFlattenColorPalette(colors);
    
    // Create CSS variables
    const cssVariables = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    // Add the variables to the :root
    addBase({
      ':root': cssVariables,
    });
  } catch (error) {
    console.error('Error in addVariablesForColors:', error);
    // Provide fallback behavior
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
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors
  ],
} satisfies Config;
