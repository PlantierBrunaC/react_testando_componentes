import shuffle from "just-shuffle";


export function realizarSorteio(participantes: string[]) {
    const totalDeParticipantes = participantes.length;
    const listaEmbaralhada = shuffle(participantes);
    const resultado = new Map<string, string>();

    for (let i = 0; i < totalDeParticipantes; i++) {

        const indeceDoAmigo = i === (totalDeParticipantes - 1) ? 0 : i + 1
        resultado.set(listaEmbaralhada[i], listaEmbaralhada[indeceDoAmigo]);
    }

    return resultado;

    
}