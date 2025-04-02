// src/pages/home/home-popular-course.tsx (ou onde estiver seu componente)
// (Código do HomePopularCourse como na resposta anterior - Nenhuma mudança funcional necessária aqui)

import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider, { Settings } from 'react-slick';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme, styled } from '@mui/material/styles';
import { IconButton, useMediaQuery } from '@mui/material';
import IconArrowBack from '@mui/icons-material/ArrowBack';
import IconArrowForward from '@mui/icons-material/ArrowForward';

// Importe os DADOS ATUALIZADOS com subtitle e status
import { data } from './popular-course.data';
// Importe o COMPONENTE ITEM ATUALIZADO
import { CourseCardItem } from '@/components/course';

interface SliderArrowProps {
  onClick?: () => void;
  type: 'next' | 'prev';
  className?: string;
}

const SliderArrow: FC<SliderArrowProps> = (props) => {
  const { onClick, type, className } = props;
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main', // Cor pêssego
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        bottom: { xs: '-70px !important', md: '-45px !important' }, // Mantém seu ajuste anterior
        left: 'unset !important',
        // AJUSTE AQUI: Aumenta o valor de 'right' para o tipo 'next' para mover para a esquerda
        // Experimente valores como '5px', '8px', '10px' até ficar bom
        right: type === 'prev' ? '70px !important' : '5px !important', // <-- Botão 'next' movido 5px para esquerda (era 0)
        zIndex: 10,
        boxShadow: 1,
        position: 'absolute', // Garante posicionamento
      }}
      disableRipple
      onClick={onClick}
      className={className}
    >
      {/* O ícone dentro do botão não precisa de ajuste extra aqui */}
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  );
};

const StyledDots = styled('ul')(({ theme }) => ({
  '&.slick-dots': {
    position: 'absolute',
    left: 0,
    bottom: -30,
    paddingLeft: theme.spacing(1),
    textAlign: 'left',
    '& li': {
      marginRight: theme.spacing(2),
      '&.slick-active>div': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}));

const HomePopularCourse: FC = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('md'));

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box sx={{ height: 8, width: 35, backgroundColor: 'divider', display: 'inline-block', borderRadius: 10 }} />
    ),
  };

  return (
    <Box
      id="conteudo"
      sx={{
        pt: { xs: 6, md: 8

         },
        pb: 8,
        backgroundColor: 'grey.100',
        overflow: 'hidden' // Adicionado para garantir que padding não cause overflow
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={15}> {/* Pode ajustar spacing se necessário */}
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                height: '100%',
                width: { xs: '100%', md: '100%' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Typography variant="h1" sx={{ mt: { xs: 0, md: -5 }, fontSize: { xs: 30, md: 48 } }}>
                Resumos Disponíveis {/* Ajuste o título se necessário */}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={9}>
             <Box sx={{ width: '100%' }}> {/* Wrapper para o slider */}
                <Slider {...sliderConfig}>
                  {data.map((item) => (
                    // Wrapper Box para padding e altura igual
                    <Box key={String(item.id)} sx={{ px: 1.5, height: '100%', boxSizing: 'border-box' }}>
                       {/* Passa o item atualizado para o CourseCardItem atualizado */}
                       <CourseCardItem item={item} sx={{ height: '100%' }} />
                    </Box>
                  ))}
                </Slider>
             </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePopularCourse;