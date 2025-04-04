// src/components/author/author-card-item.tsx
import React, { FC } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';

import { Author } from '@/interfaces/author'; // Ajuste o caminho se necessário

interface AuthorCardItemProps {
  item: Author;
}

const AuthorCardItem: FC<AuthorCardItemProps> = ({ item }) => {
  return (
    // Box mais externo - ocupa 100% da altura e largura do Grid Item pai
    <Box sx={{ width: '100%', height: '100%', display: 'flex', p: 1.5 }}> {/* Adicionado padding externo */}
      {/* Box interno (o card em si) */}
      <Box
        sx={{
          p: { xs: 2, md: 3 }, // Padding interno
          backgroundColor: 'background.paper',
          borderRadius: '16px', // Bordas arredondadas
          boxShadow: 3, // Sombra
          textAlign: 'center',
          width: '100%', // Garante ocupar largura
          height: '100%', // Garante ocupar altura (ESSENCIAL!)
          display: 'flex',
          flexDirection: 'column', // Itens empilhados
        }}
      >
        {/* Foto */}
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: '50%',
            mb: 2,
            width: 120,
            height: 120,
            mx: 'auto',
            border: '0px solid',
            borderColor: 'primary.main', // Borda Azul
            flexShrink: 0, // Impede que a imagem encolha
          }}
        >
          <Image
            src={`/images/${item.photo}`}
            width={300}
            height={300}
            alt={item.name}
            // style objectFit removido antes
          />
        </Box>

        {/* Nome */}
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold', color: 'primary.dark', flexShrink: 0 }}>
          {item.name}
        </Typography>

        {/* Descrição */}
        <Typography
          sx={{
            color: 'text.secondary',
            mb: 2,
            flexGrow: 1, // Faz a descrição ocupar o espaço vertical restante (ESSENCIAL!)
            textAlign: 'left',
            lineHeight: 1.5,
            overflow: 'hidden', // Para evitar que o texto vaze se for MUITO grande
          }}
          variant="body2"
        >
          {item.description}
        </Typography>

        {/* Link do Instagram */}
        {item.instagramUser && (
          <Box sx={{ mt: 'auto', flexShrink: 0 }}> {/* Empurra para baixo */}
            <Link href={`https://instagram.com/${item.instagramUser}`} target="_blank" rel="noopener noreferrer" aria-label={`${item.name} Instagram`}>
              <IconButton
                aria-label="instagram"
                sx={{ color: '#E4405F', '&:hover': { backgroundColor: 'rgba(228, 64, 95, 0.08)' } }}
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