// src/components/navigation/navigation.data.ts
import type { Navigation } from '@/interfaces/navigation';

export const navigations: Navigation[] = [
  {
    label: 'Início',
    path: 'hero', // ID da seção inicial
  },
  {
    label: 'Resumos',
    path: 'conteudo', // ID da seção de conteúdo/resumos
  },
  {
    label: 'Cronograma',
    path: 'cronograma', // ID da seção do cronograma
  },
  {
    label: 'Sobre',
    path: 'quem-somos', // ID da seção dos autores
  },
  {
    label: 'Compra', // Alterado de Contato para Compra
    path: 'comprar',  // ID da seção de compra/CTA final
  },
];