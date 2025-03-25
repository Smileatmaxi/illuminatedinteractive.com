import type {Config} from "tailwindcss";

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
                sectionOne: `url('../public/RootedTheGameBackground.webp')`,
                sectionTwo: `url('../public/RootedRain.webp')`,
                sectionThree: `url('../public/RootedMetro.webp')`,
            },
            mainLogoImage: {
                mainLogo: `url('../public/ui/IlluminatedInteractive-Logo.png')`,
            },
            colors: {
            },
        },
    },
} satisfies Config;

