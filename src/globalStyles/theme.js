const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    mainBg: '#f2f2f2',
    header: '#172234',
    accent: '#B29F7E',
    placeholder: '#7c818a',
    inputBg: '#E0E0E0',
    error: '#ff1717',
    heroBackdrop: 'rgba(23, 34, 52, 0.6)',
    authBackdrop: '#f2f2f280',
    transparent: 'transparent',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    text: 'Lato',
    textBold: 'Lato Bold',
    header: 'Merriweather Bold',
  },
  fontSizes: [
    '12px',
    '14px',
    '16px',
    '18px',
    '20px',
    '24px',
    '28px',
    '32px',
    '36px',
    '48px',
    '64px',
  ],
  fontWeights: {
    normal: 400,
    semiBold: 600,
    bold: 700,
  },
  lineHeights: {
    xxs: 1.22,
    xs: 1.25,
    s: 1.33,
    m: 1.375,
    l: 1.5,
    xl: 1.7,
  },

  borders: {
    none: 'none',
    normal: '1px solid',
    bold: '2px solid',
    transparent: '1px solid transparent',
  },
  radii: {
    none: '0',
    main: '5px',
    hero: '8px',
  },

  transition: {
    main: '400ms ease',
  },
  breakpoints: ['320px', '768px', '1440px'],
};

export default theme;
