// src/components/home/cronograma.data.ts

export interface CronogramaItem {
  id: number;
  legislacao: string;
  topico: string;
  resumoStatus: string; // Status/data do resumo PDF
  questoesData: string; // Nova coluna: Data das questões/vídeos
}

// Dados extraídos de Cronograma Resumos (3).pdf
// Datas de Maio são consideradas futuras em relação a hoje (03/Abril/2025)
// Datas de Abril já passaram.
export const cronogramaData: CronogramaItem[] = [
  { id: 1, legislacao: 'LC nº 189/2018', topico: 'Plano Diretor Estratégico do Município de Campinas', resumoStatus: 'Disponível', questoesData: 'Disponível' },
  { id: 2, legislacao: 'LC nº 207/2018', topico: 'Perímetro urbano e Zona de Expansão Urbana', resumoStatus: 'Disponível', questoesData: 'Disponível' },
  { id: 3, legislacao: 'Decreto nº 69.118/2024', topico: 'Segurança Contra Incêndio - Estado de São Paulo', resumoStatus: 'Disponível', questoesData: 'Disponível' },
  { id: 4, legislacao: 'LC nº 09/2003', topico: 'Código de Projetos e Execuções de Obras e Edificações', resumoStatus: 'Disponível', questoesData: '12/05' },
  { id: 5, legislacao: 'LC nº 492/2024', topico: 'Regularização Social - Construções Clandestinas/Irregulares', resumoStatus: 'Disponível', questoesData: 'Disponível' },
  { id: 6, legislacao: 'Lei nº 5885/1987', topico: 'Proteção e preservação do patrimônio do Município', resumoStatus: 'Disponível', questoesData: '16/05' },
  { id: 7, legislacao: 'Decreto nº 19.226/2016', topico: 'Análise, Definição e Aprovação de Projetos de Parcelamento', resumoStatus: 'Disponível', questoesData: '19/05' }, // Data do resumo já passou
  { id: 8, legislacao: 'Lei Estadual nº 10.083/1998', topico: 'Código Sanitário do Estado de São Paulo', resumoStatus: 'Disponível', questoesData: '19/05' }, // Data do resumo já passou
  { id: 9, legislacao: 'LC nº 295/2020', topico: 'Parcelamento, ocupação e uso do solo - APA de Campinas', resumoStatus: 'Disponível', questoesData: '23/05' }, // Data do resumo já passou
  { id: 10, legislacao: 'Decreto nº 18.705/2015', topico: 'Licenciamento e Controle Ambiental', resumoStatus: 'Disponível', questoesData: '26/05' }, // Data do resumo já passou
  { id: 11, legislacao: 'LC nº 208/2018', topico: 'Parcelamento, ocupação e uso do solo - Município', resumoStatus: 'Disponível', questoesData: '26/05' }, // Data do resumo já passou
];