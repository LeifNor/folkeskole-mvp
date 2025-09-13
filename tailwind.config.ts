import type { Config } from 'tailwindcss'


const config: Config = {
content: [
'./app/**/*.{ts,tsx}',
'./components/**/*.{ts,tsx}',
'./lib/**/*.{ts,tsx}'
],
theme: {
extend: {
fontFamily: {
sans: [
'Helvetica Neue',
'Helvetica',
'Arial',
'ui-sans-serif',
'system-ui',
'Apple Color Emoji',
'Segoe UI Emoji',
'Segoe UI Symbol'
],
},
colors: {
brand: {
DEFAULT: '#0f172a', // urban mørk blå-sort
soft: '#1f2937' // grå-blå
},
accent: {
DEFAULT: '#111827',
subtle: '#6b7280'
}
}
},
},
future: {
hoverOnlyWhenSupported: true
},
plugins: []
}
export default config