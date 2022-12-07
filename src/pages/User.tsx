// import { useNavigate } from "react-router-dom";

import user from "../assets/img/user.svg";

import { Navbar } from "../components/Navbar";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";

import "../styles/user.scss";

export function User() {
  // const navigate = useNavigate();

  // function goToLoginRoom() {
  //   navigate("/login");
  // }
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>

      <div className="user-area">
        <img src={user} alt="imagem do usuário"></img>
      </div>

      <div className="configuration">
        <Button isMarked>Administrador</Button>
        <div>
          <Button>Editar Perfil</Button>
        </div>
      </div>

      <div className="favorite-games">
        <h1 className="title-purple">Jogos favoritos</h1>
      </div>
      <Footer />
    </div>
  );
}
