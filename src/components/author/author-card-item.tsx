// src/components/author/author-card-item.tsx
import React, { FC } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link'; // Para o link do Instagram
import InstagramIcon from '@mui/icons-material/Instagram';

import { Author } from '@/interfaces/author'; // Ajuste o caminho se necessário

interface AuthorCardItemProps {
  item: Author;
}

const AuthorCardItem: FC<AuthorCardItemProps> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 4,
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          borderRadius: 4,
          boxShadow: 2,
          textAlign: 'center', // Mantém foto, nome e botão do Instagram centralizados
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Foto */}
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: '50%',
            mb: 2,
            width: 200,
            height: 200,
            mx: 'auto',
            border: '0px solid',
            borderColor: 'primary.light',
          }}
        >
          <Image
            src={`/images/${item.photo}`}
            width={200}
            height={200}
            alt={item.name}
            style={{ objectFit: 'cover' }}
          />
        </Box>

        {/* Nome */}
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
          {item.name}
        </Typography>

        {/* Descrição - Adicionado textAlign: 'left' */}
        <Typography
          sx={{
            color: 'text.secondary',
            mb: 2,
            flexGrow: 1, // Mantém para empurrar o botão do insta para baixo
            textAlign: 'left' // <-- ALINHAMENTO À ESQUERDA APLICADO AQUI
          }}
          variant="body2"
        >
          {item.description}
        </Typography>

        {/* Link do Instagram (permanece centralizado devido ao textAlign do Box pai) */}
        {item.instagramUser && (
          <Box>
            <Link href={`https://instagram.com/${item.instagramUser}`} target="_blank" rel="noopener noreferrer" aria-label={`${item.name} Instagram`}>
              <IconButton
                aria-label="instagram"
                sx={{
                   color: '#E4405F',
                  '&:hover': { backgroundColor: 'rgba(228, 64, 95, 0.08)'}
                 }}
              >
                <InstagramIcon />
              </IconButton>
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AuthorCardItem;