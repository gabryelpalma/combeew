import { useNavigate } from "react-router-dom";

import Window from "../assets/img/window-combeew.svg";
import Comb from "../assets/img/comb.svg";
import Bee from "../assets/img/bee.svg";
import Review from "../assets/img/review.svg";

import { Navbar } from "../components/Navbar";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";

import "../styles/about.scss";

export function About() {
  const navigate = useNavigate();

  function goToLoginRoom() {
    navigate("/login");
  }

  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <div id="inauguration">
        <h1 className="title-yellow"> COMUNIDADE UNIDA,</h1>
        <h1 className="title-white">ASSIM COMO UMA COLMEIA EM PRODUÇÃO</h1>
      </div>
      <div id="beginning">
        <h1 className="title-purple">Onde tudo começou? </h1>

        <img src={Window} alt="Página do Combeew"></img>

        <p className="paragraph">
          O projeto se iniciou em 2022 com o propósito de
          <strong> unir a comunidade gamer </strong> e conseguir demontrar qual
          o verdadeiro valor de cada jogo, afinal, diante a tantos estilos e
          gêneros diferentes existentes no mercado, há pessoas diferentes que
          consomem esses tipos de conteúdo
        </p>

        <br></br>

        <p className="paragraph">
          O que compõem esta incrível equipe são os alunos{" "}
          <strong>
            André Guerreiro, Fabrício Júnior e Gabryel Palma, alunos da ETEC
            Araraquara.
          </strong>
          Este projeto foi utilizado como trabalho de conclusão de curso na área
          de Informática. Caso tenha interesse de analisar o documento completo
          acesse o link abaixo
        </p>
        <div className="buttons">
          <Button>documentação</Button>
          <Button>código-base do projeto</Button>
        </div>
      </div>
      <div id="explication">
        <h1 className="title-purple">Por que Combeew?</h1>

        <br></br>

        <img src={Comb} alt="" className="comb"></img>
        <img src={Bee} alt="" className="comb"></img>
        <img src={Review} alt="" className="comb"></img>

        <p className="paragraph">
          Todas essas palavras são a base do combeew! Nosso sonho é ainda ver
          nossa <strong>comunidade unida</strong>, assim como as abelhas em suas
          colmeias auxiliando com suas
          <strong> avaliações e interações.</strong>
        </p>

        <div className="buttons">
          <Button onClick={goToLoginRoom}>junte-se a nós</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
