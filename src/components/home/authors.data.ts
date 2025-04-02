// src/components/home/authors.data.ts
import type { Author } from '@/interfaces/author'; // Ajuste o caminho se necessário

export const authorsData: Author[] = [
  {
    id: 1,
    photo: 'Raquel.png', // Nome do arquivo na pasta /public/images/
    name: 'Raquel Morais',
    description: 'Arquiteta e Urbanista graduada pela Universidade Federal do Rio de Janeiro (UFRJ), atuou na Prefeitura de Campinas junto à Secretaria Municipal de Finanças, na elaboração da Planta Genérica de Valores e avaliações imobiliárias para fins de cálculo do IPTU, e atualmente exerce o cargo de Analista Judiciário - Apoio Especializado Arquitetura na Seção de Projetos do Tribunal Regional Federal da 3ª Região (SP).',
    instagramUser: 'raquelmoraispg',
  },
  {
    id: 2,
    photo: 'Valdinei.png', // Nome do arquivo na pasta /public/images/
    name: 'Valdinei Castro',
    description: 'Arquiteto e Urbanista graduado pela Universidade Estadual de Maringá (UEM), com Especialização em Mobilidade e Cidade Contemporânea pela Escola da Cidade (AEC/AU) e Mestrado em andamento pela Universidade Federal de Santa Catarina (UFSC). Atua como Arquiteto na Prefeitura de Campinas junto à Secretaria Municipal de Habitação, na elaboração de projetos urbanísticos de Regularização Fundiária de Interesse Social.',
    instagramUser: '_castrov',
  },
];