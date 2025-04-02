// src/components/home/hero.tsx
import React, { FC } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link as ScrollLink } from 'react-scroll';
// import { StyledButton } from '@/components/styled-button'; // Removido ou comentado
import Button from '@mui/material/Button'; // Importado o Button padrão do MUI
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; // Ícone de exemplo

// Dados para a box informativa (exemplo)
// AJUSTE OS VALORES E LABELS CONFORME SUA REALIDADE
const featureData = [
  { value: '11', label: 'Resumos Completos', icon: CheckCircleOutlineIcon },
  { value: 'Atualizado', label: 'Pós-Edital 01/2025', icon: CheckCircleOutlineIcon },
  { value: 'Bônus', label: 'Videoaulas (Exemplo)', icon: CheckCircleOutlineIcon },
];


const HomeHero: FC = () => {
  // Defina o offset do header aqui também para consistência nos botões
  // SUBSTITUA 72 PELA ALTURA EXATA DO SEU HEADER EM PIXELS
  const headerOffset = -64;

  return (
    <Box id="hero" sx={{ backgroundColor: 'primary.main', position: 'relative', pt: 4, pb: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', pb: {xs: 4, md: 6} }}>
          {/* Coluna do Texto */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h1"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    letterSpacing: 1.5,
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                    mb: 2, // Margem inferior normal
                    color: 'primary.contrastText', // Cor padrão do texto (branco)
                  }}
                >
                  {/* Palavra "Gabarite" em preto, sem shape */}
                  <Box
                    component="span"
                    sx={{
                      color: 'text.primary', // Cor preta
                    }}
                  >
                    Gabarite
                  </Box>{' '}
                  {/* Restante do texto continua branco */}
                  a{' '}
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: 'inherit',
                      fontSize: 'inherit',
                      letterSpacing: 'inherit',
                      lineHeight: 'inherit',
                      color: 'inherit', // Herda branco
                    }}
                  >
                    Legislação
                  </Typography>{' '}
                  de Campinas
                </Typography>
                <Typography sx={{ color: 'primary.contrastText', opacity: 0.9, lineHeight: 1.6, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                  Resumos completos e direcionados para o cargo de <strong>Arquiteto</strong> (Edital 01/2025). Material esquematizado e atualizado por quem entende do concurso e da prática.
                </Typography>
              </Box>
              {/* Botões */}
              <Box sx={{ '& button': { mr: { xs: 0, md: 2}, mb: {xs: 2, md: 0} } }}>
                <ScrollLink
                  to="comprar" // Destino
                  spy={true}
                  smooth={true}
                  duration={350}
                  offset={headerOffset} // Aplicando offset
                  style={{ textDecoration: 'none' }}
                 >
                  {/* Usando Button padrão do MUI */}
                  <Button // <-- Alterado aqui
                    size="large"
                    variant="contained"
                    sx={{
                      backgroundColor: 'common.white', // Fundo branco
                      color: 'text.primary', // Texto preto
                      '&:hover': {
                        backgroundColor: 'grey.200', // Hover cinza claro
                      }
                    }}
                  >
                    Quero Meus Resumos
                  </Button>
                </ScrollLink>
                <ScrollLink
                  to="cronograma" // Destino
                  spy={true}
                  smooth={true}
                  duration={350}
                  offset={headerOffset} // Aplicando offset
                  style={{ textDecoration: 'none' }}
                >
                   {/* Usando Button padrão do MUI */}
                  <Button // <-- Alterado aqui
                     size="large"
                     variant="contained"
                     sx={{
                       backgroundColor: 'common.white', // Fundo branco
                       color: 'text.primary', // Texto preto
                       '&:hover': {
                         backgroundColor: 'grey.200', // Hover cinza claro
                       }
                     }}
                   >
                    Ver Conteúdo
                  </Button>
                </ScrollLink>
              </Box>
            </Box>
          </Grid>

          {/* Coluna da Imagem */}
          <Grid item xs={12} md={5} sx={{ position: 'relative', mt: {xs: 4, md: 0} }}>
            <Box sx={{ lineHeight: 0, p: 1, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', display: 'block' }}>
              <Image
                src="/images/cidade-hero.png"
                alt="Resumos Concurso Prefeitura de Campinas Arquiteto"
                width={775} // Use a largura REAL
                height={787} // Use a altura REAL
                // style prop removido
                priority
              />
            </Box>
          </Grid>
        </Grid>

        {/* Box Informativa Adicional */}
        <Box
          sx={{ mt: { xs: 4, md: 6 }, p: 2, backgroundColor: 'background.paper', borderRadius: '8px', boxShadow: 1 }}
        >
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            {featureData.map((item) => (
              <Grid item xs={12} sm={4} key={item.label} sx={{ textAlign: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                   <item.icon sx={{ fontSize: 40, color: 'secondary.main', mr: 1 }} />
                   <Typography component="h3" sx={{ fontSize: {xs: '1.8rem', md: '2.2rem'}, fontWeight: 'bold', color: 'text.primary' }}>
                     {item.value}
                   </Typography>
                 </Box>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  {item.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container>
    </Box>
  );
};

export default HomeHero;