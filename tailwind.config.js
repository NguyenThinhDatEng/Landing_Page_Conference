/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ví dụ tùy biến thêm màu
        primary: "#1e40af",   // xanh dương đậm
        secondary: "#facc15", // vàng nhạt
      },
      fontFamily: {
        // Gán font chữ dễ gọi
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
        heading: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};