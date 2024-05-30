/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {     
      fontFamily: {
        title: ["Poppins", "sans serif"]
      },
      backgroundImage: {
        home: "url('./assets/images/home.png')",
        contact: "url('./assets/images/contact/bg.png')",
      }
    },
  },
  plugins: [],
}