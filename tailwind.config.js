/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './public/index.html', // Ajoute cette ligne pour inclure le fichier HTML
        ],
    theme: {
        extend: {},
        fontFamily: {  
            'display': ['Oswald'],
        },
    plugins: [],
    }
}

