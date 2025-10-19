import type { Menu } from "./Menu"

export interface Restaurant {
    id: number,
    titulo: string,
    destacado: boolean,
    tipo: string,
    avaliacao: number,
    descricao: string,
    capa: string
    cardapio: Menu[]
}