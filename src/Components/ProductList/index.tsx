import {Product} from '../../Elements/Products'
import { Container } from './style'

export const ProductList = () => (
    <Container>
        <Product Tags={["Destaque da semana", "Japonesa"]}></Product>
        <Product Tags={["Japonesa"]}></Product>
        <Product Tags={["Japonesa"]}></Product>
        <Product Tags={["Japonesa"]}></Product>
        <Product Tags={["Japonesa"]}></Product>
        <Product Tags={["Japonesa"]}></Product>
    </Container>
)