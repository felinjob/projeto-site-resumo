// src/components/home/quem-somos.tsx
import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { authorsData as data } from './authors.data'; // Importa os dados dos autores
import { AuthorCardItem } from '@/components/author'; // Importa o card do autor

const HomeQuemSomos: FC = () => {
  return (
    <Box
      id="quem-somos" // ID para navegação
      sx={{
        pt: { xs: 6, md: 8 },
        pb: { xs: 8, md: 10 },
        backgroundColor: 'grey.100', // Fundo cinza claro para diferenciar da seção anterior
      }}
    >
      <Container maxWidth="lg">
        {/* Título da Seção */}
        <Typography variant="h1" sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, fontWeight: 'bold' }}>
          Quem Somos
        </Typography>

        {/* Grid para os cards */}
        <Grid container spacing={2} justifyContent="center"> {/* Centraliza os cards */}
          {data.map((author) => (
            // Cada autor ocupa metade da largura em telas médias/grandes
            <Grid item xs={12} md={6} key={author.id}>
              <AuthorCardItem item={author} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeQuemSomos;