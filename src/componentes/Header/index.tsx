import './style.css';

const Cabecalho = () => {
  return (
    <header className="cabecalho">
      <div className="cabecalho-container">
        <div className="imagem-logo">
          <picture>
            <source
              media="(max-width: 800px)"
              srcSet="/imagens/logo-pequeno.png"
            />
            <img src="/imagens/logo.png" alt="Logo do Sorteador" />
          </picture>
        </div>

        <img
          className="participante"
          src="/imagens/participante.png"
          alt="Participante com um presente"
        />
      </div>
    </header>
  );
};

export default Cabecalho;
