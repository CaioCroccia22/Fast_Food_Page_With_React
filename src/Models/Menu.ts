export type Menu = [
    id: number,
    picture: string,
    name: string,
    descricao: string,
    dish: string
]

export default class MenuCategories {
    id: number;
    title: string;
    highlight: boolean;
    type: string;
    rate: Float16Array;
    text: string;
    banner: string;
    menu: Menu[];

    constructor(
    id: number,
    title: string,
    highlight: boolean,
    type: string,
    rate: Float16Array,
    text: string,
    banner: string,
    menu: Menu[]){
        this.id = id
        this.title = title
        this.highlight = highlight
        this.type = type
        this.rate = rate
        this.text = text
        this.banner = banner
        this.menu = menu
    }

}