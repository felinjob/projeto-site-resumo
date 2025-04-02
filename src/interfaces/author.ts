// src/interfaces/author.ts
// (Pode remover ou adaptar a interface User se não for mais necessária)

export interface Author {
    id: number | string;
    name: string;
    photo: string; // Caminho relativo a /public/images/
    description: string;
    instagramUser?: string; // Nome de usuário do Instagram (sem @)
}