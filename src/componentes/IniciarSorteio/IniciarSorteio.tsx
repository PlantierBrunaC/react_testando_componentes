import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";


const IniciarSorteio = () => {

    const participantes = useListaDeParticipantes()
    const navegarParaSorteio = useNavigate()

    const iniciarNavegacao = () => {
        navegarParaSorteio('/sorteio')
    }



    return (
        <button disabled={participantes.length < 3} onClick={iniciarNavegacao}>
            Iniciar Brincadeira!
        </button>
    )

}
export default IniciarSorteio;