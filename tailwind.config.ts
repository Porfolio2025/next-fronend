import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--background)",
        },
        foreground: {
          DEFAULT: "var(--foreground)",
        },
      },
    },
  },
  plugins: [
    
  ],
};

export default config;
