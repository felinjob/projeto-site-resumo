// src/components/home/cronograma.data.ts

interface CronogramaItem {
    id: number;
    legislacao: string; // Nome da Legislação/Decreto
    topico: string; // Descrição breve
    status: 'Disponível' | string; // 'Disponível' ou 'Previsão: DD/MM/YYYY'
  }
  
  // Dados extraídos do PDF Cronograma Resumos.pdf [source: 2]
  // Atualizado com as datas de previsão para 2025
  export const cronogramaData: CronogramaItem[] = [
    { id: 1, legislacao: 'Decreto nº 63.911/2018', topico: 'Segurança Contra Incêndio - Estado de São Paulo', status: 'Disponível' },
    { id: 2, legislacao: 'LC nº 189/2018', topico: 'Plano Diretor Estratégico do Município de Campinas', status: 'Disponível' },
    { id: 3, legislacao: 'LC nº 207/2018', topico: 'Perímetro Urbano e Zona de Expansão Urbana', status: 'Disponível' },
    { id: 4, legislacao: 'LC nº 09/2003', topico: 'Código de Projetos e Execuções de Obras e Edificações', status: 'Disponível' },
    { id: 5, legislacao: 'LC nº 492/2024', topico: 'Regularização Social - Construções Clandestinas/Irregulares', status: 'Disponível' },
    { id: 6, legislacao: 'Lei nº 5885/1987', topico: 'Proteção e Preservação do Patrimônio no Município de Campinas', status: 'Disponível' },
    { id: 7, legislacao: 'Decreto nº 19.226/2016', topico: 'Análise, Definição e Aprovação de Projetos de Parcelamento', status: 'Previsão: 11/04/2025' },
    { id: 8, legislacao: 'Lei Estadual nº 10.083/1998', topico: 'Código Sanitário do Estado de São Paulo', status: 'Previsão: 16/04/2025' },
    { id: 9, legislacao: 'LC nº 295/2020', topico: 'Parcelamento, Ocupação e Uso do Solo - APA de Campinas', status: 'Previsão: 18/04/2025' },
    { id: 10, legislacao: 'Decreto nº 18.705/2015', topico: 'Licenciamento e Controle Ambiental', status: 'Previsão: 25/04/2025' },
    { id: 11, legislacao: 'LC nº 208/2018', topico: 'Parcelamento, Ocupação e Uso do Solo - Município de Campinas', status: 'Previsão: 30/04/2025' },
  ];