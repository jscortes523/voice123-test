/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        voice123: {
          200: '#90caf9',
          400: '#42a5f5',
          500: '#2196f3',
          600: '#1e88e5',
          800: '#1565c0'
        },
        lavender: {
          0: '#E6E6FA',
        }
      }
    },
  },
  plugins: [],
};
