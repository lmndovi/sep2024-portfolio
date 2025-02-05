import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        galaxyS9: "320px", // Galaxy S9+
        galaxyZF5: "344px", // Galaxy Z Fold 5
        blackBerryZ30: "360px", // BlackBerry Z30
        iphoneSE: "375px", // iPhone SE
        iphone12Pro: "390px", // iPhone 12 Pro
        pixel7: "412px", // Pixel 7
        iphone678XR: "414px", // iPhone 6/7/8 Plus/XR
        iphone14Pro: "430px", // iPhone 14 Pro Max
        surfaceDuo: "540px", // Surface Duo
        blackBerryPlayBook: "600px", // BlackBerry PlayBook
        galaxyTabS4: "712px", // Galaxy Tab S4
        ipadMini: "768px", // iPad Mini
        ipadAir: "820px", // iPad Air
        asusZBF: "853px", // Asus Zenbook Fold
        surfacePro7: "912px", // Surface Pro 7
        ipadPro: "1024px", // iPad Pro
        nestHubMax: "1280px", // Nest Hub Max
        asusVB: "1660px", //Asus VivoBook
        "1920by1080": "1920px", //1920 x 1080
        myDesktop: "1285px", //My Laptop 1285.60px x 729.60px
        anaMacBook: "1410px", //MacBook Laptop
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-motion")],
};
export default config;
