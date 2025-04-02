// src/components/navigation/navigation.tsx
import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Link as ScrollLink } from 'react-scroll';
import { navigations } from './navigation.data'; // Seus dados de navegação

const Navigation: FC = () => {
  // ==========================================================
  // PASSO 1: DEFINA A ALTURA EXATA DO SEU HEADER AQUI (pixels)
  // Exemplo: Se o header tem 72px de altura, use -72
  const headerOffset = -64;
  // ==========================================================

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label }) => (
        <Box
          component={ScrollLink} // Usa ScrollLink como base
          key={destination}
          activeClass="current" // Classe CSS aplicada por react-scroll ao link ativo
          to={destination} // ID da seção de destino (ex: 'hero', 'conteudo')
          spy={true}
          smooth={true}
          duration={350}
          offset={headerOffset} // <-- OFFSET NEGATIVO ADICIONADO AQUI
          sx={{
            position: 'relative',
            // Cor inicial dos links (antes era text.disabled, vamos usar text.secondary)
            color: 'text.secondary',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 0, md: 3 },
            mb: { xs: 3, md: 0 },
            fontSize: { xs: '1.2rem', md: 'inherit' },

             // Oculta a 'curva' por padrão (o Box interno com a img)
            '& > div': { display: 'none' },

             // Estilos para o link ATIVO (quando a seção correspondente está visível)
             // A classe 'current' é definida pela propriedade activeClass do ScrollLink
            '&.current': {
              color: 'primary.main', // Texto fica azul
              '& > div': { display: 'block' }, // Mostra a 'curva'
            },

             // Estilos para HOVER (quando o mouse está sobre o link)
            '&:hover': {
              color: 'primary.main', // Texto fica azul
              '& > div': { display: 'block' }, // Mostra a 'curva'
            },
          }}
        >
          {/* Box que contém a imagem da curva (aparece no hover/ativo) */}
          <Box
            sx={{
              position: 'absolute',
              top: 'auto', // Deixa o 'bottom' controlar
              bottom: -5, // Posiciona abaixo do texto (AJUSTE conforme necessário)
              left: '50%', // Centraliza
              transform: 'translateX(-50%) rotate(3deg)', // Centraliza e rotaciona
              lineHeight: 0,
              '& img': { width: 44, height: 'auto' },
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/headline-curve.svg" alt="" /> {/* Alt vazio pois é decorativo */}
          </Box>
          {label} {/* O texto do link (ex: "Início") */}
        </Box>
      ))}
    </Box>
  );
};

export default Navigation;