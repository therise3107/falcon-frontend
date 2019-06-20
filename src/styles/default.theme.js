import { fonts, palette, swatch } from './palette'

const theme = Object.freeze({
  colors: {
    primary: palette.main.primary,
    themeColor: palette.main.primary,
    positive: palette.success,

    background: {
      primary: swatch.white
    },

    border: {
      primary: swatch.grey[400]
    },

    button: {
      background_primary: swatch.blue.A600,
      background_secondary: swatch.grey[600],
      hover_primary: swatch.blue[600],
      hover_secondary: swatch.grey[600],
      text_primary: swatch.white,
      text_secondary: swatch.white,
      background_muted: swatch.grey[300],
      text_muted: swatch.grey[600]
    },

    headline: {
      dark: palette.text.primary,
      light: palette.text.secondary
    },

    link: {
      primary: swatch.blue.A600,
      primary_hover: swatch.blue[600]
    },

    loader: {
      primary: swatch.grey[700]
    },

    text: {
      dark: palette.text.primary,
      light: palette.text.secondary
    }
  },

  typography: {
    headline: {
      fontFamily: fonts.primaryFontFamily,
      fontSize: 48,
      fontWeight: 'normal',
      lineHeight: 1.2
    },
    inputText: {
      fontFamily: fonts.primaryFontFamily,
      fontSize: 14,
      fontWeight: 'normal',
      lineHeight: 1.2
    },
    label: {
      fontFamily: fonts.primaryFontFamily,
      fontSize: 16,
      fontWeight: 'normal',
      lineHeight: 1.2
    },
    primary: {
      fontFamily: fonts.primaryFontFamily,
      fontSize: 16,
      fontWeight: 'normal',
      lineHeight: 1.2
    }
  },

  units: {
    gutter: 30,
    containerMaxWidth: 1140,
    footerHeight: 50,
    headerHeight: 75,
    loaderHeight: 100,
    loaderWidth: 100,

    button: {
      widht: 150,
      height: 36,
      padding: 8,
      radius: 4
    }
  }
})

export default Object.assign({}, theme, { name: 'dayTime' })
