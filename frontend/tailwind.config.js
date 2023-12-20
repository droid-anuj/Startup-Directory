module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], 
  theme: {
    extend: {},
    fontFamily: {
      'display': ['Shadows Into Light', 'sans-serif'],
      
    },
  },
  plugins: [require("daisyui")],
};
