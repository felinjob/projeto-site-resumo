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
import QuizIcon from '@mui/icons-material/Quiz'; // Novo ícone para Questões/Vídeos
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';

// Importar os NOVOS dados do cronograma
import { cronogramaData as data } from './cronograma.data'; // Verifique o caminho

// --- Estilizações da Tabela ---
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light, // Azul claro
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    fontSize: '0.875rem', // Levemente menor para caber 4 colunas
    padding: '12px 10px', // Ajustar padding
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: '10px 10px', // Ajustar padding
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
  // Data de hoje para comparação (03/Abril/2025)
  // Lembre-se que os meses em JS Date são 0-indexados (Janeiro=0, Abril=3)
  const hoje = new Date(2025, 3, 3);

  // Função auxiliar para verificar se uma data DD/MM (ou 'Disponível') já passou
  const isDatePast = (dateStr: string): boolean => {
    if (dateStr === 'Disponível') return true;
    const parts = dateStr.split('/');
    if (parts.length === 2) {
      const year = hoje.getFullYear(); // Usar ano atual
      // Criar data SEM hora para comparação segura
      const dataPrevisao = new Date(year, parseInt(parts[1]) - 1, parseInt(parts[0]));
      const hojeSemHora = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
      return dataPrevisao < hojeSemHora;
    }
    return false; // Formato inválido ou ausente
  };

  return (
    <Box
      id="cronograma"
      sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 8, md: 10 }, backgroundColor: 'grey.100' }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, fontWeight: 'bold', color: 'primary.main' }}>
          Cronograma do Material {/* Título Atualizado */}
        </Typography>

        {isMobile ? (
          // --- Layout Mobile: Cards Empilhados ---
          <Grid container spacing={2}>
            {data.map((row) => {
              const resumoEntregue = row.resumoStatus === 'Disponível' || isDatePast(row.resumoStatus);
              const questoesEntregue = isDatePast(row.questoesData); // Questões só têm data futura no PDF

              return (
                <Grid item xs={12} key={row.id}>
                  <Paper sx={{ p: 2, borderRadius: '8px', boxShadow: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
                      {row.legislacao}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', my: 0.5 }}>
                      {row.topico}
                    </Typography>
                    {/* Info Resumo */}
                    <Chip
                      icon={resumoEntregue ? <CheckCircleIcon fontSize="small" /> : <AccessTimeIcon fontSize="small" />}
                      label={resumoEntregue ? `Resumo: Entregue` : `Resumo: ${row.resumoStatus}`}
                      color={resumoEntregue ? 'success' : 'default'}
                      size="small"
                      sx={{ mt: 1, mr: 1 }}
                    />
                     {/* Info Questões/Vídeos */}
                     <Chip
                       icon={questoesEntregue ? <QuizIcon fontSize="small" /> : <AccessTimeIcon fontSize="small" />}
                       label={questoesEntregue ? `Questões: Liberadas` : `Questões: ${row.questoesData}`}
                       // Usando secundário (amarelo) para indicar que está liberado
                       color={questoesEntregue ? 'secondary' : 'default'}
                       size="small"
                       sx={{ mt: 1 }}
                     />
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        ) : (
          // --- Layout Desktop: Tabela ---
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
                    Questões/Vídeos {/* Nova Coluna */}
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => {
                  const resumoEntregue = row.resumoStatus === 'Disponível' || isDatePast(row.resumoStatus);
                  const questoesEntregue = isDatePast(row.questoesData);
                  return (
                    <StyledTableRow key={row.id}>
                      <TableCell component="th" scope="row" sx={{ fontWeight: 'medium' }}>
                        {row.legislacao}
                      </TableCell>
                      <TableCell>{row.topico}</TableCell>
                      {/* Célula Status Resumo */}
                      <TableCell align="center">
                        <Chip
                          icon={resumoEntregue ? <CheckCircleIcon /> : <AccessTimeIcon />}
                          label={row.resumoStatus}
                          color={resumoEntregue ? 'success' : 'default'}
                          size="small"
                        />
                      </TableCell>
                       {/* Célula Status Questões/Vídeos */}
                      <TableCell align="center">
                         <Chip
                           icon={questoesEntregue ? <QuizIcon /> : <AccessTimeIcon />}
                           label={row.questoesData}
                           color={questoesEntregue ? 'secondary' : 'default'} // Amarelo ou cinza
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