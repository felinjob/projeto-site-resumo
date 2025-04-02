// src/config/theme/palette-light.ts
import { PaletteOptions } from '@mui/material';
import { grey, common } from '@mui/material/colors';

const palette: PaletteOptions = {
  mode: 'light',
  background: {
    default: common.white, // Fundo principal branco
    paper: common.white,   // Fundo de cards/papers também branco
  },
  text: {
    primary: grey[900],     // Texto principal quase preto
    secondary: grey[700],   // Texto secundário cinza escuro
    disabled: grey[500],    // Texto desabilitado cinza
  },
  divider: grey[200], // Cor para divisórias/bordas sutis
  action: {
    hover: 'rgba(0, 0, 0, 0.04)', // Cor padrão de hover do MUI light mode
  }
};

export default palette;