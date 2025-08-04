import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";


describe('Comportamento do formulário de adição de participantes - Formulario.tsx', () => {

    //Biblioteca JEST
    // Primeiro argumento da função é o OQUE ele fará, e o segundo argumento é o Teste em si aplicado
    test('Quando o input estiver vazio, o botão deve estar desabilitado', () => {

        render(<RecoilRoot><Formulario /></RecoilRoot>)

        //encontrar no DOM o input - TESTING LIBRARY
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");

        // Encontrar o botão 
        const botao = screen.getByRole("button");

        // Garantir que o input esteja no documentos - JEST 
        expect(input).toBeInTheDocument()


        // // garantir que o botão esteja desabilitado
        expect(botao).toBeDisabled();

    })

    test('Adicionar um participante caso exista um nome preenchido no input', () => {
        render(<RecoilRoot><Formulario /></RecoilRoot>)
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
        const botao = screen.getByRole("button");

        //Inserir um valor no input
        fireEvent.change(input, { target: { value: "Bruna" } })

        //Clicar no botão de submeter
        fireEvent.click(botao);

        //Garantir que o input esteja com o foco ativo 
        expect(input).toHaveFocus();

        //Garantir que o input não tenha um valor 
        expect(input).toHaveValue("");

    })

    test('Não pode adicionar nome duplicado a lista de participantes', () => {
        render(<RecoilRoot><Formulario /></RecoilRoot>)
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
        const botao = screen.getByRole("button");

        fireEvent.change(input, { target: { value: "Bruna" } })
        fireEvent.click(botao);

        fireEvent.change(input, { target: { value: "Bruna" } })
        fireEvent.click(botao);

        const mensagemDeErro = screen.getByRole("alert");
        expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!');

    })

    test('Mensagem de erro edve sumir após timer', () => {
        // IMplementacao de timers no teste atraves do JEST
        jest.useFakeTimers();

        render(<RecoilRoot><Formulario /></RecoilRoot>)
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
        const botao = screen.getByRole("button");

        fireEvent.change(input, { target: { value: "Bruna" } })
        fireEvent.click(botao);

        fireEvent.change(input, { target: { value: "Bruna" } })
        fireEvent.click(botao);

        let mensagemDeErro = screen.queryByRole("alert");
        expect(mensagemDeErro).toBeInTheDocument();
        // Esperar X Segundos
        act(() => {
            /* fire events that update state */
            jest.runAllTimers();
        });
        /* assert on the output */

        mensagemDeErro = screen.queryByRole("alert");
        expect(mensagemDeErro).toBeNull();

    })




})

