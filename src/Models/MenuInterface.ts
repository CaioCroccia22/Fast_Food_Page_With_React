import type { Menu } from "./Menu";

export interface MenuInterface {
    id: number,
    titulo: string,
    destacado: boolean,
    tipo: string,
    avaliacao: Float16Array,
    descricao: string,
    capa: string,
    cardapio: Menu[]
}