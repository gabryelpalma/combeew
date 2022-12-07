import { useNavigate } from "react-router-dom";

import LogoGray from "../assets/img/logo-gray.svg";
import Arrow from "../assets/img/arrow-top.svg";

import "../styles/footer.scss";

import { Button } from "./Button";

export function Footer() {
  const navigate = useNavigate();

  function goToAbout() {
    navigate("/sobre");
  }

  function goToCatalogo() {
    navigate("/games");
  }

  return (
    <div id="footer">
      <div id="links">
        <Button isInvisible>AJUDE-NOS A MELHORAR</Button>
        <Button isInvisible>SUPORTE</Button>
        <Button onClick={goToCatalogo} isInvisible>
          CATÁLOGO
        </Button>
        <Button onClick={goToAbout} isInvisible>
          SOBRE O COMBEEW
        </Button>
      </div>
      <div id="end-page">
        <img src={LogoGray} alt="Logo Combeew"></img>
        <div className="footer-buttons">
          <Button isInvisible>TERMOS DE PRIVACIDADE</Button>
          <Button isInvisible>MANUAL DE USO</Button>
        </div>
        <a href="#navbar">
          <img id="go-top" src={Arrow} alt="Voltar para o cabeçalho"></img>
        </a>
      </div>
    </div>
  );
}
