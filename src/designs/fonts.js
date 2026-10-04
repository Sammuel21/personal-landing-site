import localFont from "next/font/local";

export const manrope = localFont({
  src: "./fonts/Manrope-Variable.ttf",
  weight: "200 800",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});
export const instrument = localFont({
  src: "./fonts/InstrumentSerif-Regular.ttf",
  weight: "400",
  display: "swap",
  variable: "--font-display",
  fallback: ["Georgia", "serif"],
});
