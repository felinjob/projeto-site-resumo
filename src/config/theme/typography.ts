// src/config/theme/typography.ts
import { TypographyOptions } from '@mui/material/styles/createTypography'

export const fontFamily = [
  '"Cabin", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
].join(',')

const headingLineHeight = 1.4

const typography: TypographyOptions = {
  fontFamily,
  fontWeightLight: 400,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: { // Título principal da página (Hero)
    fontSize: 38, // Um pouco maior para impacto
    lineHeight: 1.3,
    fontWeight: 700,
  },
  h2: { // Títulos de seção
    fontSize: 32,
    lineHeight: headingLineHeight,
    fontWeight: 700,
  },
  h3: { // Subtítulos de seção ou cards
    fontSize: 26,
    lineHeight: headingLineHeight,
    fontWeight: 600, // Um pouco menos pesado que h2
  },
  h4: {
    fontSize: 22,
    lineHeight: headingLineHeight,
    fontWeight: 600,
  },
  h5: {
    fontSize: 18,
    lineHeight: headingLineHeight,
    fontWeight: 600,
  },
  h6: {
    fontSize: 16,
    lineHeight: headingLineHeight,
    fontWeight: 600,
  },
  body1: { // Texto principal
    fontSize: '1rem', // 16px
    lineHeight: 1.6, // Aumentar um pouco o espaçamento entre linhas
  },
  body2: { // Texto menor, legendas
    fontSize: '0.875rem', // 14px
    lineHeight: 1.5,
  },
  subtitle1: {
    fontSize: '0.875rem', // 14px
    color: 'text.secondary', // Usar cor secundária por padrão
  },
  subtitle2: {
    fontSize: '0.8rem', // 13px
    color: 'text.secondary',
  },
  // Você pode adicionar mais estilos ou ajustar os existentes conforme necessário
}

export default typography