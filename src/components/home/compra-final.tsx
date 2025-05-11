// src/components/home/compra-final.tsx
// src/components/home/compra-final.tsx
import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import PaymentsIcon from '@mui/icons-material/Payments';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const HomeCompraFinal: FC = () => {
  const linkKiwify = 'https://pay.kiwify.com.br/lKhNnGY';
  const linkEngenharia = 'https://pay.kiwify.com.br/jxhBfnz';

  return (
    <Box
      id="comprar"
      sx={{
        backgroundColor: 'primary.light',
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={4}
          sx={{ p: { xs: 3, sm: 4, md: 5 }, borderRadius: '12px', textAlign: 'center' }}
        >
          {/* Título */}
          <Typography
            variant="h2" // Estilo do título principal
            component="h2"
            sx={{ mb: 2, fontWeight: 'bold', color: 'primary.dark' }}
          >
            Garanta sua Vaga na Aprovação!
          </Typography>

          {/* Subtítulo / Descrição - Texto Ajustado */}
          <Typography sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem' }}>
            Garanta acesso completo aos resumos em PDF e às videoaulas de resolução de questões.<br />
            Invista no material que vai direto ao ponto por menos de R$21 por mês!
          </Typography>

          {/* --- BLOCO DE PREÇO --- */}
          <Box sx={{ mb: 4 }}>
            {/* Preço Parcelado */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: { xs: 0.5, sm: 1 }, flexWrap: 'wrap' }}>
              <Typography variant="h6" component="span" sx={{ color: 'text.primary', alignSelf: 'center', mr: 0.5 }}>
                12x de
              </Typography>
              <Typography variant="h2" component="span" sx={{ fontWeight: 'bold', color: 'secondary.main', lineHeight: 1.1, fontSize: { xs: '2.5rem', sm: '3rem' } }}>
                R$ 20,37
              </Typography>
            </Box>
            {/* Preço à Vista */}
            <Typography variant="h6" sx={{ color: 'text.secondary', mt: 1 }}>
              ou R$ 197,00 à vista
            </Typography>
          </Box>
          {/* --- FIM BLOCO DE PREÇO --- */}

          {/* Botão de Compra para Arquitetura */}
          <Button
            href={linkKiwify}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ py: 1.5, px: 5, fontSize: '1.2rem', fontWeight: 'bold', boxShadow: 3, mb: 3, '&:hover': { backgroundColor: 'secondary.dark' } }}
          >
            Quero Ser Aprovado!
          </Button>

          {/* Novo Bloco: Engenharia Civil (Título) */}
          <Typography
            variant="h2" // Use o mesmo variant="h2"
            component="h6" // Mantenha o component="h6" (ou ajuste se precisar)
            sx={{ fontWeight: 'bold', mt: 4, mb: 2, color: 'primary.dark' }}
          >
            É engenheiro? Temos uma opção para você!
          </Typography>

          {/* Novo Bloco: Engenharia Civil (Conteúdo) */}
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary', fontSize: '1.1rem' }}>
              Acesso a 3 Legislações atualizadas para o cargo de Engenheiro Civil (Edital 01/2025): Plano Diretor, Código de Obras e Lei de Parcelamento, Ocupação e Uso do solo.
            </Typography>
            {/* Bloco de Preço para Engenharia (Igual ao de Arquitetura) */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: { xs: 0.5, sm: 1 }, flexWrap: 'wrap', mb: 2 }}>
                <Typography variant="h6" component="span" sx={{ color: 'text.primary', alignSelf: 'center', mr: 0.5 }}>
                12x de
              </Typography>
              <Typography variant="h2" component="span" sx={{ fontWeight: 'bold', color: 'secondary.main', lineHeight: 1.1, fontSize: { xs: '2.5rem', sm: '3rem' } }}>
                R$ 10,03
              </Typography>
              </Box>
              <Typography variant="h6" sx={{ color: 'text.secondary', mt: 1 }}>
              ou R$ 97,00 à vista
              </Typography>
            </Box>
            <Button
              href="https://pay.kiwify.com.br/jxhBfnz"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="secondary"
              size="large"
              sx={{ py: 1.5, px: 5, fontSize: '1.2rem', fontWeight: 'bold', boxShadow: 3, '&:hover': { backgroundColor: 'secondary.dark' } }}
            >
              Quero Ser Aprovado (Engenharia)!
            </Button>
          </Box>

          {/* Informações Adicionais */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: { xs: 1, sm: 2 }, color: 'text.secondary' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}> <VerifiedUserIcon fontSize="small" /> <Typography variant="body2">Compra Segura via Kiwify</Typography> </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}> <PaymentsIcon fontSize="small" /> <Typography variant="body2">Cartão de Crédito e PIX</Typography> </Box>
          </Box>

        </Paper>
      </Container>
    </Box>
  );
};

export default HomeCompraFinal;