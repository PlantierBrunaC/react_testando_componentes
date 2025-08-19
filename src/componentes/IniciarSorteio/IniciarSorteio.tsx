import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";
import { useSorteador } from "../../state/hook/useSorteador";


const IniciarSorteio = () => {

    const participantes = useListaDeParticipantes()
    const navegarParaSorteio = useNavigate()
    const realizarSorteio = useSorteador()

    const iniciarNavegacao = () => {
        realizarSorteio() 
        navegarParaSorteio('/sorteio')
    }




    return (
        <button disabled={participantes.length < 3} onClick={iniciarNavegacao}>
            Iniciar Brincadeira!
        </button>
    )

}
export default IniciarSorteio;