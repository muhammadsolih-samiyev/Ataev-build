import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-image': "url('/src/images/city1.51e44d49b1c61434ca07.jpeg')",
        'our-company': "url('/src/images/rating.9f9cda4caaf5d31ba7bb.png')",
        'info-img': "url('/src/images/person.a08c2f1a3dd131936290.png')",
        'contact-img': "url('./src/images/form.03148b23e27804568a88.png')",
      },
      maxWidth: {
        iphone: '460px',
      },
    },
    translate: {
      200: '300px',
    },
    transitionTimingFunction: {
      'ease-in-out': 'ease-in-out',
    },
    transitionDuration: {
      500: '500ms',
    },
    screens: {
      smallest: '320px',
      iphone: '460px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [daisyui,],
}
