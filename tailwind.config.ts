import type { Config } from 'tailwindcss'
import plugin from 'tailwind-scrollbar'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin, // ✅ add scrollbar plugin
  ],
}

export default config
