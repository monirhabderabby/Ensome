/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                black: "#292D33",
                primary: "#185CFF",
                gray: "#9497A1",
                Secondary: "#002B4E",
                Tertiary: "#F0F9FF",
                "Helper (blue_1)": "#194060",
                "Helper (blue_2)": "#607D94",
                "Helper (blue_3)": "#C9DCEC",
                Background: "#C9DCEC",
                Error: "#C14040",
                background_gray: "#F1F6FA",
            },
            fontFamily: {
                manrope: ["Manrope", "sans-serif"],
                "open-sans": ["Open Sans", "sans-serif"],
            },
            boxShadow: {
                button: "0 12px 30px rgba(24, 92, 255, 0.18)",
                card1: "0 2px 20px 17px rgba(24, 92, 255, 0.04)",
                card2: "0 12px 30px 17px rgba(24, 92, 255, 0.04)",
                card3: "0 4px 12px rgba(12, 68, 204, 0.1)",
                dropdown: "0 2px 6px rgba(0, 43, 78, 0.15), 0 1px 2px rgba(0, 43, 78, 0.3)",
            },
        },
    },
    plugins: [],
};
