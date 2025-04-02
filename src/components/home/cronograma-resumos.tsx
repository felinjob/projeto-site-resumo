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
import { styled } from '@mui/material/styles';

import { cronogramaData as data } from './cronograma.data'; // Importa os dados do cronograma

// Estilização customizada para as células do cabeçalho (opcional)
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light, // Fundo pêssego claro para o cabeçalho
    color: theme.palette.text.primary, // Texto escuro
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

// Estilização customizada para as linhas (opcional, para zebrar a tabela)
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // Esconde a borda padrão da última célula da linha
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const HomeCronogramaResumos: FC = () => {
  return (
    <Box
      id="cronograma" // ID para a navegação
      sx={{
        pt: { xs: 6, md: 8 },
        pb: { xs: 8, md: 10 },
        backgroundColor: 'grey.100', // Fundo branco/cinza claro
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, fontWeight: 'bold' }}>
          Cronograma de Lançamento
        </Typography>

        <TableContainer component={Paper} sx={{ boxShadow: 2, borderRadius: '8px' }}>
          <Table sx={{ minWidth: 650 }} aria-label="cronograma de resumos">
            <TableHead>
              <TableRow>
                <StyledTableCell sx={{ width: '20%' }}>Legislação</StyledTableCell>
                <StyledTableCell>Tópico Principal</StyledTableCell>
                <StyledTableCell align="center" sx={{ width: '20%' }}>Status / Previsão</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => {
                const isAvailable = row.status === 'Disponível';
                return (
                  <StyledTableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.legislacao}
                    </TableCell>
                    <TableCell>{row.topico}</TableCell>
                    <TableCell align="center">
                      <Chip
                        icon={isAvailable ? <CheckCircleIcon /> : <AccessTimeIcon />}
                        label={row.status}
                        color={isAvailable ? 'success' : 'warning'}
                        size="small"
                      />
                    </TableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 2, color: 'text.secondary' }}>
          * O cronograma de previsão está sujeito a alterações. Os resumos são liberados conforme produção.
        </Typography>
      </Container>
    </Box>
  );
};

export default HomeCronogramaResumos;