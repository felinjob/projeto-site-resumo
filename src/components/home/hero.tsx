// src/components/home/hero.tsx
import React, { FC } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link as ScrollLink } from 'react-scroll';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

// Dados para a box informativa
const featureData = [
 { value: '11', label: 'Resumos em PDF', icon: CheckCircleOutlineIcon },
 { value: 'Atualizado', label: 'Pós-Edital 01/2025', icon: CheckCircleOutlineIcon },
 { value: 'Questões', label: 'Resolução em vídeo', icon: PlayCircleOutlineIcon },
];

const HomeHero: FC = () => {
  const headerOffset = -64; // Use o offset correto

  return (
    <Box id="hero" sx={{ backgroundColor: 'primary.main', position: 'relative', pt: 4, pb: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        {/* Grid Principal */}
        <Grid container spacing={4} sx={{ flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', pb: {xs: 4, md: 6} }}>
          {/* Coluna do Texto */}
          <Grid item xs={12} md={7}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Box sx={{ mb: 3 }}>
                {/* Título */}
                <Typography component="h1" sx={{ position: 'relative', fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: 1.5, fontWeight: 'bold', lineHeight: 1.3, mb: 2, color: 'primary.contrastText' }}>
                  <Box component="span" sx={{ color: 'secondary.main' }}> Gabarite </Box>{' '} a{' '}
                  <Typography component="span" sx={{ fontWeight: 'inherit', fontSize: 'inherit', letterSpacing: 'inherit', lineHeight: 'inherit', color: 'inherit' }}> Legislação </Typography>{' '} de Campinas
                </Typography>
                {/* Subtítulo */}
                <Typography sx={{ color: 'primary.contrastText', opacity: 0.9, lineHeight: 1.6, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                  Resumos completos e direcionados para o cargo de <strong>Arquiteto</strong> (Edital 01/2025). Material esquematizado e atualizado por quem entende do concurso e da prática.
                </Typography>
              </Box>
              {/* Box container dos botões */}
              <Box sx={{ mt: 3, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'center', md: 'flex-start' }, justifyContent: { xs: 'center', md: 'flex-start' }, gap: { xs: 2.5, md: 3 }, width: '100%' }}>
                {/* Botão 1: Baixar Amostra */}
                <Button component="a" href="/amostra-resumo.pdf" download="Amostra-Resumos-Campinas.pdf" target="_blank" rel="noopener noreferrer" size="large" variant="contained" color="secondary" sx={{ '&:hover': { backgroundColor: 'secondary.dark' } }}>
                  Baixar Amostra
                </Button>
                {/* Botão 2: Ver Cronograma */}
                <ScrollLink to="cronograma" spy={true} smooth={true} duration={350} offset={headerOffset} style={{ textDecoration: 'none' }}>
                  <Button size="large" variant="contained" color="secondary" sx={{ '&:hover': { backgroundColor: 'secondary.dark' } }}>
                    Ver Cronograma
                  </Button>
                </ScrollLink>
              </Box>
            </Box>
          </Grid>
          {/* Coluna da Imagem */}
          <Grid item xs={12} md={5} sx={{ position: 'relative', mt: {xs: 4, md: 0} }}>
             <Box sx={{ lineHeight: 0, p: 1, backgroundColor: 'rgba(255,255,255,0)', borderRadius: '8px', display: 'block' }}>
              <Image src="/images/cidade.png" alt="Resumos Concurso Prefeitura de Campinas Arquiteto" width={463} height={500} priority />
            </Box>
          </Grid>
        </Grid>
        {/* --- Fim do Grid Principal --- */}

        {/* --- Box Informativa Adicional --- */}
        <Box sx={{ mt: { xs: 4, md: 6 }, p: 2, backgroundColor: 'background.paper', borderRadius: '8px', boxShadow: 1 }}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            {featureData.map((item) => (
              <Grid item xs={12} sm={4} key={item.label} sx={{ textAlign: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                   <item.icon sx={{ fontSize: 40, color: 'secondary.main', mr: 1 }} />
                   <Typography component="h3" sx={{ fontSize: {xs: '1.8rem', md: '2.2rem'}, fontWeight: 'bold', color: 'text.primary' }}>{item.value}</Typography>
                 </Box>
                {/* Estilo do label ajustado */}
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 'medium' // Aplicado a todos
                  }}
                 >
                  {item.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* --- Fim da Box Informativa --- */}
      </Container>
    </Box>
  );
};
export default HomeHero;