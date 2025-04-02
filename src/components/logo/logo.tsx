// src/components/logo/logo.tsx
import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

interface LogoProps {
  variant?: 'primary' | 'secondary'; // Mantendo a prop do template, embora não a usemos diretamente para as cores aqui
  sx?: object;
}

const Logo: FC<LogoProps> = ({ sx }) => {
  return (
    <Box sx={{ ...sx }}>
      <Typography
        variant="h5" // Ajuste o tamanho (h1-h6, body1, etc.) conforme preferir
        component="div" // Usar 'div' para não criar um H1 extra semanticamente
        sx={{
          fontWeight: 'bold', // Peso da fonte para todo o logo
          lineHeight: 1, // Ajustar para evitar espaçamento vertical extra
        }}
      >
        {/* Primeira parte do texto com a cor primária */}
        <Box component="span" sx={{ color: 'primary.main' }}>
          Resumos
        </Box>
        {/* Segunda parte do texto com a cor de texto padrão (ou outra cor do tema) */}
        <Box component="span" sx={{ color: 'text.primary', ml: 0.5 }}> {/* ml: 0.5 adiciona um pequeno espaço */}
          Campinas
        </Box>
      </Typography>
    </Box>
  );
};

Logo.defaultProps = {
  sx: {
    display: 'inline-block',
    lineHeight: 1,
  },
};

export default Logo;