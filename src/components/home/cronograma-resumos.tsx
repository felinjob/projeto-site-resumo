// src/components/home/cronograma-resumos.tsx
import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
// QuizIcon não está sendo usado atualmente para indicar "disponível", mas mantido se precisar para outros estados.
// import QuizIcon from '@mui/icons-material/Quiz';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';

import { cronogramaData as data } from './cronograma.data';

// --- Estilizações da Tabela ---
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    fontSize: '0.875rem',
    padding: '12px 10px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: '10px 10px',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
// --- Fim Estilizações ---

const HomeCronogramaResumos: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // A data de hoje é determinada pela data atual do sistema no momento da execução.
  // Para testes consistentes com datas futuras, você pode mockar ou fixar a data de 'hoje'.
  const hoje = new Date(); // Usa a data atual real
  // Ajustar a data de 'hoje' para não ter horas/minutos/segundos para comparação pura de datas
  hoje.setHours(0, 0, 0, 0);


  const isDatePast = (dateStr: string): boolean => {
    if (!dateStr || typeof dateStr !== 'string') return false; // Adicionar verificação para undefined/null ou tipo incorreto
    if (dateStr.toLowerCase() === 'disponível') return true; // Mantém case-insensitive para 'Disponível'
    const parts = dateStr.split('/');
    if (parts.length === 2 || parts.length === 3) { // Aceita DD/MM ou DD/MM/YYYY
      const day = parseInt(parts[0]);
      const month = parseInt(parts[1]) - 1; // Meses são 0-indexados
      // Se o ano não for fornecido, assume o ano atual de 'hoje'
      const year = parts.length === 3 ? parseInt(parts[2]) : hoje.getFullYear();

      // Verifica se os componentes da data são números válidos
      if (isNaN(day) || isNaN(month) || isNaN(year)) return false;

      const dataPrevisao = new Date(year, month, day);
      dataPrevisao.setHours(0,0,0,0); // Normaliza para comparação de datas

      return dataPrevisao <= hoje; // Alterado para <= para incluir o dia atual como "passado" ou "liberado"
    }
    return false;
  };

  return (
    <Box
      id="cronograma"
      sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 8, md: 10 }, backgroundColor: 'grey.100' }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, fontWeight: 'bold', color: 'primary.main' }}>
          Cronograma do Material
        </Typography>

        {isMobile ? (
          <Grid container spacing={2}>
            {data.map((row) => {
              const resumoEntregue = row.resumoStatus?.toLowerCase() === 'disponível' || isDatePast(row.resumoStatus);
              const questoesEntregue = isDatePast(row.questoesData);

              return (
                <Grid item xs={12} key={row.id}>
                  <Paper sx={{ p: 2, borderRadius: '8px', boxShadow: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
                      {row.legislacao}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', my: 0.5 }}>
                      {row.topico}
                    </Typography>
                    <Chip
                      icon={resumoEntregue ? <CheckCircleIcon fontSize="small" /> : <AccessTimeIcon fontSize="small" />}
                      label={resumoEntregue ? `Resumo: Entregue` : `Resumo: ${row.resumoStatus || 'N/A'}`}
                      color={resumoEntregue ? 'success' : 'default'}
                      size="small"
                      sx={{ mt: 1, mr: 1 }}
                    />
                     <Chip
                       icon={questoesEntregue ? <CheckCircleIcon fontSize="small" /> : <AccessTimeIcon fontSize="small" />}
                       label={questoesEntregue ? `Questões: Liberadas` : `Questões: ${row.questoesData || 'N/A'}`}
                       // MODIFICADO AQUI: Usar 'success' para consistência visual
                       color={questoesEntregue ? 'success' : 'default'}
                       size="small"
                       sx={{ mt: 1 }}
                     />
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <TableContainer component={Paper} sx={{ boxShadow: 2, borderRadius: '8px', overflowX: 'auto' }}>
            <Table sx={{ minWidth: 750 }} aria-label="cronograma do material">
              <TableHead>
                <TableRow>
                  <StyledTableCell sx={{ width: '20%' }}>Legislação</StyledTableCell>
                  <StyledTableCell sx={{ width: '40%' }}>Tópico Principal</StyledTableCell>
                  <StyledTableCell align="center" sx={{ width: '20%', whiteSpace: 'nowrap' }}>
                    Resumo (PDF)
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ width: '20%', whiteSpace: 'nowrap' }}>
                    Questões/Vídeos
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => {
                  const resumoEntregue = row.resumoStatus?.toLowerCase() === 'disponível' || isDatePast(row.resumoStatus);
                  const questoesEntregue = isDatePast(row.questoesData);
                  return (
                    <StyledTableRow key={row.id}>
                      <TableCell component="th" scope="row" sx={{ fontWeight: 'medium' }}>
                        {row.legislacao}
                      </TableCell>
                      <TableCell>{row.topico}</TableCell>
                      <TableCell align="center">
                        <Chip
                          icon={resumoEntregue ? <CheckCircleIcon /> : <AccessTimeIcon />}
                          label={row.resumoStatus || 'N/A'}
                          color={resumoEntregue ? 'success' : 'default'}
                          size="small"
                        />
                      </TableCell>
                      <TableCell align="center">
                         <Chip
                           icon={questoesEntregue ? <CheckCircleIcon /> : <AccessTimeIcon />}
                           label={row.questoesData || 'N/A'}
                           // MODIFICADO AQUI: Usar 'success' para consistência visual
                           color={questoesEntregue ? 'success' : 'default'}
                           size="small"
                         />
                      </TableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 3, color: 'text.secondary' }}>
          * Cronograma de previsão sujeito a alterações. Materiais liberados conforme produção.
        </Typography>
      </Container>
    </Box>
  );
};

export default HomeCronogramaResumos;