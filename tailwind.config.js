/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",  // ✅ Ensure Tailwind scans all files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
