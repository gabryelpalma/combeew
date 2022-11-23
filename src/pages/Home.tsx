import { useNavigate } from "react-router-dom";

import Monster from "../assets/img/monster.svg";
import Search from "../assets/img/search.svg";
import Controller from "../assets/img/controller.svg";
import Message from "../assets/img/message.svg";
import Star from "../assets/img/star.svg";

import "../styles/home.scss";

import { Button } from "../components/Button";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";

export function Home() {
  const navigate = useNavigate();

  function goToLoginRoom() {
    navigate("/login");
  }

  return (
    <div className="container">
      <header>
        <Navbar />
        <div id="welcome">
          <div id="content">
            <h1 className="title-yellow">
              A maior colmeia <br></br> dos videogames...
            </h1>
            <p>
              entre nessa aventura e interaja com as nossas comunidades. E
              encontre o melhor que os games tem a te oferecer...
            </p>
            <div className="buttons">
              <Button onClick={goToLoginRoom}>junte-se a nós</Button>
              <Button isInvisible>já sou membro</Button>
            </div>
          </div>
          <img src={Monster} alt="Monstro da Combeew" />
        </div>
      </header>

      <div id="games">
        <h1 className="title-purple">Populares no mês</h1>
        <p>confira os jogos mais avaliados dos últimos dias</p>

        <div className="cards">
          <Card src="https://image.api.playstation.com/vulcan/ap/rnd/202206/0300/E2vZwVaDJbhLZpJo7Q10IyYo.png" />
          <Card src="https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7" />
          <Card src="https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg" />
        </div>
      </div>

      <div id="how-it-works">
        <div className="item-works">
          <div className="bg-purple">
            <img
              className="img-works"
              src={Search}
              alt="Encontre todos os jogos do momento"
            />
          </div>
          <div className="item-text">
            <h4 className="secondary-purple">
              Encontre todos os jogos do momento
            </h4>
            <p className="text-purple">
              Navegue pelo nosso imenso catálogo de jogos e encontre o que mais
              se encaixa com você
            </p>
          </div>
        </div>

        <div className="item-works">
          <div className="bg-yellow">
            <img
              className="img-works"
              src={Controller}
              alt="Faça parte da nossa comunidade"
            />
          </div>
          <div className="item-text">
            <h4 className="secondary-yellow">Faça parte da nossa comunidade</h4>
            <p className="text-yellow">
              Todos nós somos gostamos de uma boa jogatina, tenho certeza que
              você fará muitos amigos por aqui
            </p>
          </div>
        </div>

        <div className="item-works">
          <div className="bg-purple">
            <img
              className="img-works"
              src={Message}
              alt="Interaja e comente seus momentos favoritos"
            />
          </div>
          <div className="item-text">
            <h4 className="secondary-purple">
              Interaja e comente seus momentos favoritos
            </h4>
            <p className="text-purple">
              Discuta sobre suas experiências únicas com seus melhores amigos ao
              longo de cada game que você jogar
            </p>
          </div>
        </div>

        <div className="item-works">
          <div className="bg-yellow">
            <img
              className="img-works"
              src={Star}
              alt="Seja crítico e avalie os seus jogos favoritos"
            />
          </div>
          <div className="item-text">
            <h4 className="secondary-yellow">
              Seja crítico e avalie os seus jogos favoritos
            </h4>
            <p className="text-yellow">
              Sejamos realistas, nem todos os jogos são perfeitos. Ajude-nos a
              montar e recomendar os melhores jogos a novos jogadores
            </p>
          </div>
        </div>

        <div className="buttons">
          <Button>junte-se a nós</Button>
          <Button isInvisible>já sou membro</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
