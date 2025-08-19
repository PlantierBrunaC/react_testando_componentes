import shuffle from "just-shuffle";
import { useListaDeParticipantes } from "./useListaDeParticipantes"
import { useSetRecoilState } from "recoil";
import { resultadoDoAmigoSecretoState } from "../atom";
import { realizarSorteio } from "../helpers/realizarSorteio";


export const useSorteador = () => {

    const participantes = useListaDeParticipantes();
    const setResultado = useSetRecoilState(resultadoDoAmigoSecretoState);

    return () => {
        const resultado = realizarSorteio(participantes);
        setResultado(resultado);


        // REFATORAÇÃO, HOOK ENVIADO PARA HELPER PARA TESTES
        // const totalDeParticipantes = participantes.length;
        // const listaEmbaralhada = shuffle(participantes);

        // //Chave e valor do mapeamento sao string, por isso duas vezes
        // const resultado = new Map<string, string>();

        // for (let i = 0; i < totalDeParticipantes; i++) {

        //     // Logica - O primeiro tira o proximo consecutivamente até o último que tira o primeiro da lista embaralhada
        //     // Entao o indice do amido está testando se o indice é igual ao total menos um isso é o ultimo, se nao some mais um
        //     const indeceDoAmigo = i === (totalDeParticipantes - 1) ? 0 : i + 1
        //     resultado.set(listaEmbaralhada[i], listaEmbaralhada[indeceDoAmigo]);


        // }
        // setResultado(resultado);


    }

}