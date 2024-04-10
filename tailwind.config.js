import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            colors: {
                primary: "#364659", // Example: Blue
                secondary: "#34812d", // Example: Green
                accent: "#e3342f", // Example: Red
            },
            fontFamily: {
                kanit: ["Kanit", "sans-serif"],
            },
        },
    },

    plugins: [forms],
};
