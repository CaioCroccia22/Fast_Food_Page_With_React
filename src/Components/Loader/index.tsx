import {ClockLoader} from 'react-spinners'
import { ContainerLoader } from './styles'

export const Loader = () => {
    return (
        <ContainerLoader>
            <ClockLoader color="#FFEBD9" />
        </ContainerLoader>
    )
}