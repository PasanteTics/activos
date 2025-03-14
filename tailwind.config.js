export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          text_primary: '#2D2A2A',
          text_secondary: '#4A4545',
          text_terciary: '#FFFBFB',
          text_error: '#9c3535',
          background_primary: '#1e2d34',
          background_secondary: '#FDEFE4',
          background_terciary: '#9c3535',
          background_disabled: '#C48686',
          background_hover: '#A64949',
          border_focus: '#F5A024',
          border_error: '#9c3535'
        },
        fontSize: {
          txt_sm: '0.75rem',
          txt_md: '0.938rem',
          txt_lg: '1.25rem',
          txt_xl: '1.7rem'
        }
      },
    },
}