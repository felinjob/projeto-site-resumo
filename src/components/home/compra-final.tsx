// src/components/home/compra-final.tsx
import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper'; // Importar o Paper
import PaymentsIcon from '@mui/icons-material/Payments';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const HomeCompraFinal: FC = () => {
  const linkKiwify = 'https://pay.kiwify.com.br/lKhNnGY';

  return (
    <Box
      id="comprar"
      sx={{
        // Fundo da seção pode ser pêssego claro ou o padrão para destacar o Paper
        backgroundColor: 'primary.light',
        // ou: backgroundColor: 'background.default',
        py: { xs: 8, md: 10 }, // Padding vertical na seção
      }}
    >
      <Container maxWidth="md"> {/* Limitador de largura para o conteúdo */}

        {/* Paper para envolver e destacar o conteúdo da oferta */}
        <Paper
          elevation={4} // Nível da sombra para dar relevo
          sx={{
            p: { xs: 3, sm: 5 }, // Padding interno do Paper
            borderRadius: '12px', // Bordas arredondadas
            textAlign: 'center', // Centraliza o conteúdo dentro do Paper
            // O fundo do Paper será 'background.paper' (branco/cinza claro) por padrão
          }}
        >
          {/* Título dentro do Paper */}
          <Typography
            variant="h2"
            component="h2"
            sx={{ mb: 2, fontWeight: 'bold', color: 'primary.dark' }}
          >
            Invista na sua aprovação agora!
          </Typography>

          {/* Subtítulo dentro do Paper */}
          <Typography sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem' }}>
            Garanta acesso imediato aos resumos disponíveis e receba as atualizações futuras<br />
            conforme o cronograma. Tudo que você precisa para dominar a legislação!
          </Typography>

          {/* Preço Promocional dentro do Paper */}
          <Box sx={{ mb: 4 }}>
            {/* Texto da Oferta */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 1 }}>
              <LocalOfferIcon color="secondary" />
              <Typography variant="h6" sx={{ color: 'secondary.dark', fontWeight:'medium' }}>
                Oferta especial de lançamento
              </Typography>
            </Box>

            {/* Preço Original Riscado */}
            <Typography
              variant="h5"
              sx={{ color: 'text.secondary', textDecoration: 'line-through', display: 'inline-block', mr: 1.5 }}
            >
              De R$ 197,00
            </Typography>

            {/* Preço Promocional */}
            <Typography
              variant="h3"
              component="p"
              sx={{ fontWeight: 'bold', color: 'primary.dark', display: 'inline-block' }}
            >
              por R$ 157,00
            </Typography>
          </Box>

          {/* Botão de Compra dentro do Paper */}
          <Button
            href={linkKiwify}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="secondary" // Botão amarelo/laranja
            size="large"
            sx={{
              py: 1.5,
              px: 5,
              fontSize: '1.2rem',
              fontWeight: 'bold',
              boxShadow: 3,
              mb: 3, // Espaço abaixo do botão, dentro do Paper
               '&:hover': { backgroundColor: 'secondary.dark' }
            }}
          >
            EU QUERO!
          </Button>

          {/* Informações Adicionais dentro do Paper */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: { xs: 1, sm: 2 }, color: 'text.secondary' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <VerifiedUserIcon fontSize="small" />
              <Typography variant="body2">Compra Segura via Kiwify</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <PaymentsIcon fontSize="small" />
              <Typography variant="body2">Cartão de Crédito e PIX</Typography>
            </Box>
          </Box>

        </Paper> {/* Fim do Paper */}

      </Container>
    </Box>
  );
};

export default HomeCompraFinal;