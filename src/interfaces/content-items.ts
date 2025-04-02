// src/interfaces/content-item.ts
export interface ContentItem {
    id: number | string;
    title: string;
    status: 'Disponível' | string; // Aceita 'Disponível' ou uma string como 'Previsão: DD/MM/YYYY'
}