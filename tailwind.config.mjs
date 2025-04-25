/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif'] },
      colors: {
        primary: { DEFAULT: '#2563eb', dark: '#1d4ed8' },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '80ch',
            a: {
              textDecoration: 'underline',
              textDecorationColor: 'var(--tw-prose-links)',
              fontWeight: '400',
            },
            code: {
              backgroundColor: 'var(--tw-prose-pre-bg)',
              borderRadius: '0.25rem',
              padding: '0.2em 0.4em',
              fontWeight: '400',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};  