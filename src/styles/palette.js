export const easings = {
  easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
}

export const fonts = {
  primaryFontFamily: 'Open Sans, sans-serif',
  secondaryFontFamily: 'proxima-nova, sans-serif'
}

export const swatch = {
  blue: {
    100: '#f8fafc',
    200: '#d0e5ff',
    400: '#2297f0',
    500: '#1a91eb',
    600: '#1584d7',
    700: '#2184cf',
    800: '#0c73c1',
    900: '#196baa',

    A600: '#0568ae'
  },
  green: {
    100: '#66b92e',
    200: '#1bb934',
    300: '#45b854',
    400: '#34aa44',
    500: '#1e9d09',
    600: '#1e930b',
    700: '#187a08',
    800: '#1a740b',
    900: '#0e7940',

    A100: '#2fcc66'
  },
  grey: {
    100: '#e6eaee',
    200: '#f5f8fa',
    300: '#f2f4f7',
    400: '#dfe3e9',
    500: '#b7c0cd',
    600: '#8d98a9',
    700: '#7f8fa4',
    800: '#5b6779',
    900: '#353c48',

    A100: '#fbfcfc',
    A200: '#eff3f6',
    A300: '#ced0da',
    A400: '#c5d0de',
    A500: '#c2cad4',
    A600: '#a1a7af',
    A700: '#a8aab7',
    A800: '#848C98',
    A900: '#959595',

    B500: '#dfe2e5'
  },
  indigo: {
    200: '#337bbf',
    300: '#3073b5',
    400: '#34659f',
    500: '#354052',
    600: '#373f52',
    700: '#2B2F41',
    800: '#222c3c'
  },
  purple: '#7E00B9',
  red: {
    100: '#f2dede',
    500: '#ed1c24',
    700: '#cf2a2a',
    900: '#a52a2a'
  },
  teal: {
    500: '#018989',
    700: '#1c3e4b'
  },
  yellow: {
    100: '#fff3cd',
    800: '#967b19'
  },
  black: '#000',
  white: '#fff'
}

export const palette = {
  main: {
    primary: swatch.blue.A600,
    primaryBackground: swatch.grey[100]
  },
  text: {
    primary: swatch.indigo[500],
    secondary: swatch.white
  }
}
