// src/config/theme/palette-base.ts
import { PaletteOptions } from '@mui/material';
import { blue, grey, orange } from '@mui/material/colors'; // Importar cores base

// Azul primário
const primaryBlue = '#0084d8';
const primaryBlueLight = '#65b3f7';
const primaryBlueDark = '#0058a5';

// Amarelo/Laranja secundário (baseado no original do template)
const secondaryYellow = '#ffaf35';
const secondaryYellowLight = '#fde6a8'; // Tom mais claro
const secondaryYellowDark = '#d0821c';  // Tom mais escuro
const secondaryYellowContrastText = grey[900]; // Texto escuro (quase preto) para contraste

const paletteBase: Partial<PaletteOptions> = {
  primary: {
    light: primaryBlueLight,
    main: primaryBlue,
    dark: primaryBlueDark,
    contrastText: '#ffffff', // Texto branco sobre azul
  },
  secondary: {
    // Reintroduzindo o amarelo/laranja
    light: secondaryYellowLight,
    main: secondaryYellow,
    dark: secondaryYellowDark,
    contrastText: secondaryYellowContrastText, // Texto escuro sobre amarelo/laranja
  },
  success: {
     main: '#2e7d32', // Verde padrão
  },
  warning: {
     // Usar um laranja um pouco diferente para warning ou o próprio secundário
     main: orange[800], // '#ef6c00'
  },
  error: {
     main: '#d32f2f', // Vermelho padrão
  },
  // Manter tons de cinza úteis
  grey: grey,
};

export default paletteBase;