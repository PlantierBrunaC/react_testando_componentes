import { render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";

//Biblioteca JEST
// Primeiro argumento da função é o OQUE ele fará, e o segundo argumento é o Teste em si aplicado
test('Quando o input estiver vazio, o botão deve estar desabilitado', () => {

    render (<Formulario />)

    //encontrar no DOM o input - TESTING LIBRARY
    const input = screen.getByPlaceholderText("Insira os nomes dos participantes");

    // Encontrar o botão 
    const botao = screen.getByRole("button");

    // Garantir que o input esteja no documentos - JEST 
    expect(input).toBeInTheDocument()


    // // garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled();
    
})