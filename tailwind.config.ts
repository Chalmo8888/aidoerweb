import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'sans-serif'],
        heading: ['Inter', 'Noto Sans SC', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-lg': ['4.5rem', { lineHeight: '1.05', fontWeight: '700' }],
        'section': ['2rem', { lineHeight: '1.2', fontWeight: '600' }],
        'section-lg': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
      },
      letterSpacing: {
        'readable': '0.02em',
        'wide': '0.05em',
      },
      lineHeight: {
        'relaxed': '1.6',
        'loose': '1.8',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          blue: "hsl(var(--secondary-blue))",
          purple: "hsl(var(--secondary-purple))",
          orange: "hsl(var(--secondary-orange))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        ai: {
          DEFAULT: "hsl(var(--ai-accent))",
          glow: "hsl(var(--ai-accent-glow))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
        "3xl": "calc(var(--radius) + 16px)",
      },
      boxShadow: {
        'glow': '0 0 40px hsl(var(--primary) / 0.15)',
        'glow-lg': '0 0 60px hsl(var(--primary) / 0.25)',
        'glow-accent': '0 0 40px hsl(var(--accent) / 0.2)',
        'glow-ai': '0 0 30px hsl(var(--ai-accent) / 0.4)',
        'glow-blue': '0 0 30px hsl(217 100% 55% / 0.3)',
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 20px -4px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 10px 40px -10px hsl(var(--primary) / 0.15)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--primary) / 0.2)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--primary) / 0.35)" },
        },
        "cursor-move": {
          "0%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(80px, 20px)" },
          "40%": { transform: "translate(120px, 60px)" },
          "60%": { transform: "translate(60px, 80px)" },
          "80%": { transform: "translate(30px, 40px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        "typing": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "step-progress": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "float": "float 8s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out infinite 3s",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "cursor-move": "cursor-move 8s ease-in-out infinite",
        "typing": "typing 2s steps(30) forwards",
        "blink": "blink 1s step-end infinite",
        "step-progress": "step-progress 1.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;