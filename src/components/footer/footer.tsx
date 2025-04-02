// src/components/footer/footer.tsx
import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// Importar animateScroll diretamente
import { animateScroll } from 'react-scroll';
// ScrollLink e Logo não são mais usados neste componente

// Função para rolar para o topo - Usando animateScroll diretamente
const scrollToTop = (): void => {
  // Chama o método no objeto importado diretamente
  animateScroll.scrollToTop({ // <-- Corrigido aqui
    duration: 500,
    smooth: true,
  });
};

const Footer: FC = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper', // Fundo branco/papel
        py: 3,
        textAlign: 'center',
        color: 'text.secondary',
      }}
    >
      <Container maxWidth="lg">
        {/* Logo comentado */}
        {/* <Box sx={{ mb: 1 }}><Logo sx={{ '& .MuiTypography-root': { color: 'text.secondary' } }} /></Box> */}

        {/* Texto de Copyright */}
        <Typography variant="body2" sx={{ mb: 1 }}>
          © {currentYear} Resumo Concursos | Produzido por Raquel Morais & Valdinei Castro
        </Typography>
        <Typography variant="caption" display="block" sx={{ mb: 2 }}>
          Material protegido pela Lei Federal nº 9.610/1998. Proibida a reprodução e distribuição não autorizadas.
        </Typography>

        {/* Botão Voltar ao Topo */}
        <IconButton
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          color="primary" // Usa cor primária (azul)
          sx={{
             border: '1px solid',
             borderColor: 'primary.light',
             '&:hover': {
                backgroundColor: 'primary.light',
             }
           }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>

      </Container>
    </Box>
  );
};

export default Footer;