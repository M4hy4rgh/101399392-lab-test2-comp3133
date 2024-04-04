const { ColdObservable } = require("rxjs/internal/testing/ColdObservable");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light", "dark"],
    colors: {
      orange: "#ea580c",
    },
  },
};
