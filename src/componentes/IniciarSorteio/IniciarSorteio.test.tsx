import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import IniciarSorteio from "./IniciarSorteio"
import React from "react"
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes"


jest.mock('../../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
    })

const mockNavegacao = jest.fn()
jest.mock('react-router-dom', () =>{
    return {
        useNavigate: () => mockNavegacao
    }
})

describe('Lista de participantes não é suficiente', () => {
     beforeEach(() => {
            (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })

    test('A brincadeira não pode ser iniciada', () =>{
        render(
        <RecoilRoot>
            <IniciarSorteio />
        </RecoilRoot>)

        const botao = screen.getByRole('button')
        expect(botao).toBeDisabled()
    
    })
    
    })



describe('Lista de participantes possui participantes suficiente', () => {
    beforeEach(() => {
            (useListaDeParticipantes as jest.Mock).mockReturnValue(['Gabriel', 'Rebeca', 'Bruna'])
    })


    test('A brincadeira pode ser iniciada', () =>{
        render(
        <RecoilRoot>
            <IniciarSorteio />
        </RecoilRoot>)

        const botao = screen.getByRole('button')
        expect(botao).not.toBeDisabled()
    
    })

    test('A brincadeira foi iniciada', () =>{
        render(
        <RecoilRoot>
            <IniciarSorteio />
        </RecoilRoot>)

        const botao = screen.getByRole('button')
        fireEvent.click(botao)
        expect(mockNavegacao).toHaveBeenCalledTimes(1)  
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')  
    })

    })