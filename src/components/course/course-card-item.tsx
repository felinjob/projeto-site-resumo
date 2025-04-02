// Exemplo: em @/components/course/CourseCardItem.tsx

import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Card, { CardProps } from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EventIcon from '@mui/icons-material/Event';

import { Course } from '@/interfaces/course';

interface CourseCardItemProps {
  item: Course;
  sx?: CardProps['sx'];
}

const CourseCardItem: FC<CourseCardItemProps> = ({ item, sx }) => {
  // MODIFICADO: Use optional chaining (?.) para segurança
  const isAvailable = item.status?.toLowerCase() === 'disponível';

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', ...sx }}>
      <CardMedia
        component="img"
        height="140"
        // Adicionar verificação para cover também é uma boa prática
        image={item.cover || '/images/placeholder.png'} // Exemplo com placeholder
        alt={item.title || 'Course Image'} // Exemplo com fallback alt text
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom variant="h6" component="div">
          {/* Adicionar fallback para title também é bom */}
          {item.title || 'Untitled Course'}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {/* Adicionar fallback para subtitle */}
          {item.subtitle || ''}
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ mt: 'auto' }}>
          <Chip
            // Usa a variável 'isAvailable' que agora é segura
            icon={isAvailable ? <CheckCircleIcon /> : <EventIcon />}
            // Mostra o status original, ou string vazia se não existir
            label={item.status || 'N/A'}
            color={isAvailable ? 'success' : 'warning'}
            size="small"
            sx={{ fontWeight: 'medium' }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CourseCardItem;