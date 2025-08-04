import { render } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Configuracao from "./Configuracao"

const mockNavegacao = jest.fn()
jest.mock('react-router-dom', () =>{
    return {
        useNavigate: () => mockNavegacao
    }
})


describe('Página de configuracao', () => {

    test('Página deve ser renderizada corretamente', () => {
        const { container } = render(
        <RecoilRoot>
            <Configuracao /> 
            </RecoilRoot>)
            expect(container).toMatchSnapshot()
    

    })

})