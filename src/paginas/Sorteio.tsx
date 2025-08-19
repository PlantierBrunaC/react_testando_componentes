import { useSetRecoilState } from "recoil";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";
import { resultadoDoAmigoSecretoState } from "../state/atom";
import { useState } from "react";
import { useResultadoDoSorteio } from "../state/hook/useResultadoDoSorteio";

const Sorteio = () => {

    const participantes = useListaDeParticipantes();

    const [participanteDaVez, setParticipanteDaVez] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')

    const setResultado = useSetRecoilState(resultadoDoAmigoSecretoState)

    const resultadoSort = useResultadoDoSorteio()

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if (resultadoSort.has(participanteDaVez)) {
            setAmigoSecreto(resultadoSort.get(participanteDaVez)!)
        }

    }


    return (
        <section>
            <form onSubmit={sortear}>
                <select required
                    name="participanteDaVez"
                    id="participanteDaVez"
                    placeholder="Selecione o seu nome"
                    value={participanteDaVez}
                    onChange={evento => setParticipanteDaVez(evento.target.value)}
                >
                    {participantes.map(participante => <option key={participante}>
                        {participante}
                    </option>)}
                </select>
                <button type="submit">
                    Sortear
                </button>
            </form>
            {amigoSecreto && <section>
                <p role='alert'>O amigo secreto é: {amigoSecreto}</p>
            </section>
            }
        </section>
    )
}
export default Sorteio;