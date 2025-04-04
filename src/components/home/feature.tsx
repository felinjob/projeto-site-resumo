// src/components/home/feature.tsx
import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// Importar Ícones
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import BoltIcon from '@mui/icons-material/Bolt';
import GradingIcon from '@mui/icons-material/Grading';

// Interface
interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

// Dados Bloco 1
const featuresAcesso: FeatureItem[] = [
  { icon: TrackChangesIcon, title: 'Resumos Direto ao Ponto', description: 'Material 100% focado na legislação do edital de Arquiteto para Campinas, sem enrolação e com linguagem clara.' },
  { icon: AccountTreeIcon, title: 'Layout Esquematizado', description: 'Facilite a memorização com diagramas, tabelas comparativas e destaques visuais estratégicos.' },
  { icon: SlideshowIcon, title: 'Videoaulas + Questões', description: 'Aulas exclusivas em vídeo com resolução comentada de questões inéditas, focadas no estilo da banca.' },
];

// Dados Bloco 2
const featuresDiferenciais: FeatureItem[] = [
 { icon: VerifiedUserIcon, title: 'Feito por Quem Entende', description: 'Material elaborado por arquitetos nomeados no último concurso do cargo (Edital 08/2019)' },
 { icon: BoltIcon, title: 'Otimize Seus Estudos', description: 'Ganhe tempo e eficiência estudando diretamente o que é mais relevante e tem maior probabilidade de cair na prova.' },
 { icon: GradingIcon, title: 'Foco na Banca Vunesp', description: 'Conteúdo e questões elaborados considerando o histórico e o perfil de cobrança da Vunesp, responsável pelo concurso.' },
];

const HomeFeature: FC = () => {
  return (
    <Box
      id="features"
      sx={{
        py: { xs: 6, md: 10 },
        // Mudar fundo da seção para azul primário
        backgroundColor: 'primary.main', // <-- MUDANÇA AQUI
      }}
    >
      <Container maxWidth="lg">
        {/* === Bloco 1: Acesso === */}
        <Box mb={{ xs: 6, md: 8 }}>
          <Typography
            component="h1"
            variant="h1"
            // Mudar cor do título para branco (contraste com fundo azul)
            sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, fontWeight: 'bold', color: 'primary.contrastText' }} // <-- MUDANÇA AQUI
          >
            Ao que você terá acesso:
          </Typography>
          <Grid container spacing={3}>
            {featuresAcesso.map(({ icon: Icon, title, description }, index) => (
              <Grid item xs={12} sm={6} md={4} key={`acesso-${index}`}>
                {/* Card mantém fundo branco e sombra */}
                <Box sx={{ textAlign: 'center', p: 3, backgroundColor: 'background.paper', borderRadius: '12px', boxShadow: 2, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box sx={{ mb: 2.5 }}> <Icon sx={{ fontSize: 45, color: 'secondary.main' }} /> </Box> {/* Ícone Amarelo */}
                  <Typography variant="h6" component="h3" sx={{ mb: 1.5, fontWeight: 'bold', color: 'text.primary' }}> {title} </Typography> {/* Texto escuro */}
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, flexGrow: 1 }}> {description} </Typography> {/* Texto cinza */}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* === Bloco 2: Diferenciais === */}
        <Box>
          <Typography
            component="h2"
            variant="h2"
             // Mudar cor do título para branco (contraste com fundo azul)
            sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, fontWeight: 'bold', color: 'primary.contrastText' }} // <-- MUDANÇA AQUI
          >
            Por que nossos resumos são a{' '}
            {/* Destaque "melhor" mantém amarelo */}
            <Box component="span" sx={{ color: 'secondary.main' }}> melhor </Box>{' '}
            escolha?
          </Typography>
          <Grid container spacing={3}>
            {featuresDiferenciais.map(({ icon: Icon, title, description }, index) => (
              <Grid item xs={12} sm={6} md={4} key={`diferencial-${index}`}>
                 {/* Card mantém fundo branco e sombra */}
                 <Box sx={{ textAlign: 'center', p: 3, backgroundColor: 'background.paper', borderRadius: '12px', boxShadow: 2, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                   <Box sx={{ mb: 2.5 }}> <Icon sx={{ fontSize: 45, color: 'secondary.main' }} /> </Box> {/* Ícone Amarelo */}
                   <Typography variant="h6" component="h3" sx={{ mb: 1.5, fontWeight: 'bold', color: 'text.primary' }}> {title} </Typography> {/* Texto escuro */}
                   <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, flexGrow: 1 }}> {description} </Typography> {/* Texto cinza */}
                 </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeFeature;