import { useRef, useState } from "react";
import { useAdicionarParticipante } from "../../state/hook/useAdicionarParticipante";
import { useMensagemDeErro } from "../../state/hook/useMensagemDeErro";
import CampoFormulario from "../ComponentesFormulario/ComponentesFormulario";
import { FaUserPlus } from "react-icons/fa";

const Formulario = () => {
    const [nome, setNome] = useState("");

    // Criação da referência para o campo de input
    const inputRef = useRef<HTMLInputElement>(null);

    const adicionarNaLista = useAdicionarParticipante();

    const mensagemDeErro = useMensagemDeErro();

    const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>) => {
        // PREVENTDEFAULT impede que a página seja recarregada ao submeter o formulário 
        event.preventDefault();

        // Chama a função da lógica de estado para adicionar o participante
        adicionarNaLista(nome);

        // Limpa o campo após adicionar
        setNome("");

        // Interrogação no current é a indicação de que o input pode ser null
        inputRef.current?.focus();
    };

    return (
        <form onSubmit={adicionarParticipante}>
            <h1>Vamos começar!</h1>

            {/* Campo de entrada com ref, controlado por estado */}
            <CampoFormulario
                tipo="input"
                ref={inputRef as React.Ref<HTMLInputElement>}
                value={nome}
                onChange={event => setNome(event.target.value)}
                placeholder="Insira os nomes dos participantes"
                />
                {/* icone={<FaUserPlus size={16} color="rgba(0, 0, 0, 0.3)" /> as JSX.Element} */}

            {/* Botão de envio, desativado se o nome estiver vazio */}
            <CampoFormulario
                tipo="button"
                disabled={!nome}
            >
                Adicionar
            </CampoFormulario>

            {/* Exibe a mensagem de erro, se houver */}
            {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}

            {/* Nomes dos participantes cadastrados (exibição futura, se necessário) */}
            {/* <button>Iniciar Brincadeira!</button> */}
        </form>
    );
};

export default Formulario;
