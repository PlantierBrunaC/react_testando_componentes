import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import ListaParticipantes from "./ListaParticipantes"
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes"

// quando algum teste solicitar o hook de participantes, retornar um objeto hook mocado 
jest.mock('../../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
    })

describe('Uma lista vazia de participantes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
})

       test('Lista deve ser renderizada sem elementos', () => {
               render(
               <RecoilRoot>
                <ListaParticipantes />
                </RecoilRoot>)
        
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0)
               })


})


describe('Uma lista preenchida com participantes', () => {

    const participantes = ['Gabriel', 'Rebeca']    
     beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
})

       test('Lista deve ser renderizada com participantes', () => {
               render(
               <RecoilRoot>
                <ListaParticipantes />
                </RecoilRoot>)
        
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participantes.length)
               })


})