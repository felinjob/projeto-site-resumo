// src/components/home/feature.tsx
import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import BoltIcon from '@mui/icons-material/Bolt';
import GavelIcon from '@mui/icons-material/Gavel';

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

// Dados das features - AJUSTE OS TEXTOS E ÍCONES CONFORME PREFERIR
const features: FeatureItem[] = [
  {
    icon: TrackChangesIcon,
    title: 'Conteúdo Focado',
    description: 'Sem enrolação. Apenas o que você precisa saber sobre a legislação exigida no edital para Arquiteto.',
  },
  {
    icon: AccountTreeIcon,
    title: 'Material Esquematizado',
    description: 'Diagramas, tabelas e resumos visuais para facilitar a compreensão e a memorização dos pontos-chave.',
  },
  {
    icon: TipsAndUpdatesIcon,
    title: 'Sempre Atualizado',
    description: 'Conteúdo revisado e atualizado conforme as últimas versões das leis e decretos, incluindo o Edital 01/2025.',
  },
  {
    icon: VerifiedUserIcon,
    title: 'Feito por Especialistas',
    description: 'Elaborado por arquiteta concursada (TRF) e arquiteto atuante na Prefeitura de Campinas.',
  },
  {
    icon: BoltIcon,
    title: 'Economize seu Tempo',
    description: 'Otimize seus estudos acessando diretamente as informações mais relevantes, sem perder tempo com leitura extensiva.',
  },
  {
    icon: GavelIcon,
    title: 'Legislação de Campinas',
    description: 'Cobertura completa das Leis Complementares, Decretos e normas municipais e estaduais específicas do edital.',
  },
];

const HomeFeature: FC = () => {
  return (
    <Box
      id="features"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: 'primary.main', // Fundo cinza claro para destacar os cards
      }}
    >
      <Container maxWidth="lg">
        {/* Título da Seção com mais destaque */}
        <Typography
          component="h2"
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 8 },
            fontWeight: 'bold',
            color: 'black', // Cor pêssego para o título
          }}
        >
          Por que nossos resumos são a{' '}
          {/* Palavra "melhor" com destaque */}
          <Box component="span" sx={{ color: 'secondary.main' }}> {/* Cor amarela/laranja */}
            melhor
          </Box>{' '}
          escolha?
        </Typography>

        {/* Grid com as Features */}
        <Grid container spacing={3}>
          {features.map(({ icon: Icon, title, description }, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              {/* Box de cada feature com relevo */}
              <Box
                sx={{
                  textAlign: 'center',
                  p: 3,
                  backgroundColor: 'background.paper',
                  borderRadius: '12px',
                  boxShadow: 2, // Mantém o relevo/sombra
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                {/* Ícone */}
                <Box
                  sx={{
                    mb: 2.5,
                  }}
                >
                   <Icon sx={{ fontSize: 45, color: 'secondary.main' }} />
                 </Box>

                {/* Título da Feature */}
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ mb: 1.5, fontWeight: 'bold', color: 'text.primary' }}
                >
                  {title}
                </Typography>

                {/* Descrição da Feature */}
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, flexGrow: 1 }}>
                  {description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeFeature;