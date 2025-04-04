// src/config/theme/palette-base.ts
import { PaletteOptions } from '@mui/material';
import { grey, orange, common } from '@mui/material/colors'; // Removido blue, yellow não usados diretamente

// COR PRIMÁRIA: Novo Azul
const primaryBlue = '#0877ac';       // <-- SEU NOVO AZUL PRINCIPAL
const primaryBlueLight = '#5faadd';  // <-- Variação Clara Gerada*
const primaryBlueDark = '#045a80';   // <-- Variação Escura Gerada*

// COR SECUNDÁRIA: Amarelo/Laranja (Mantida)
const secondaryYellow = '#ffaf35';
const secondaryYellowLight = '#fde6a8';
const secondaryYellowDark = '#d0821c';
const secondaryYellowContrastText = grey[900]; // Texto escuro

const paletteBase: Partial<PaletteOptions> = {
  primary: {
    light: primaryBlueLight,
    main: primaryBlue,
    dark: primaryBlueDark,
    contrastText: common.white, // Texto branco sobre azul ainda funciona
  },
  secondary: {
    // Mantido o amarelo/laranja
    light: secondaryYellowLight,
    main: secondaryYellow,
    dark: secondaryYellowDark,
    contrastText: secondaryYellowContrastText,
  },
  success: {
     main: '#2e7d32', // Verde
  },
  warning: {
     main: orange[700], // Laranja
  },
  error: {
     main: '#d32f2f', // Vermelho
  },
  // Definições padrão de texto e fundo (geralmente sobrescritas por palette-light.ts)
  text: {
    primary: grey[900],
    secondary: grey[700],
    disabled: grey[500],
  },
  background: {
     paper: common.white,
     default: common.white,
   },
  grey: grey,
  common: common,
};

export default paletteBase;