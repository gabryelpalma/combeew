import Star from "../assets/img/star-review.svg";

import Write from "../assets/img/write.svg";
import PostOne from "../assets/img/post1.svg";
import PostTwo from "../assets/img/post2.svg";
import EndPage from "../assets/img/end-of-posts.svg";

import { Navbar } from "../components/Navbar";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";

import "../styles/room.scss";

export function Room() {
  return (
    <div className="container" id="container">
      <header id="headerRoom">
        <Navbar />
      </header>
      <div className="game-information">
        <div className="cards">
          <Card src="https://image.api.playstation.com/vulcan/ap/rnd/202206/0300/E2vZwVaDJbhLZpJo7Q10IyYo.png" />{" "}
        </div>
        <h1 className="title-white">Stray</h1>

        <p className="subtitle">
          Lançado dia 16 de julho de 2022,
          <strong> Annapurna Interactive</strong>
        </p>

        <p className="login">
          necessário <a>login</a> para avaliar
        </p>

        <div className="stars">
          <img src={Star} alt="estrela de avaliações"></img>
          <img src={Star} alt="estrela de avaliações"></img>
          <img src={Star} alt="estrela de avaliações"></img>
          <img src={Star} alt="estrela de avaliações"></img>
          <img src={Star} alt="estrela de avaliações"></img>
          <p>200 avaliações</p>
        </div>

        <div id="information">
          <div className="details">
            <div id="avaiableon">
              <h3>Disponível em:</h3>
              <div className="buttonsRoom">
                <Button isOutlined>Playstation 5</Button>
                <Button isOutlined>Playstation 4</Button>
                <Button isOutlined>Steam</Button>
              </div>
            </div>

            <div id="genres">
              <h3>Gêneros</h3>
              <div className="buttonsRoom">
                <Button isOutlined>Aventura</Button>
                <Button isOutlined>Terror</Button>
              </div>
            </div>
          </div>
        </div>

        <p className="caption">
          Perdido, sozinho e separado da família, um gato de rua deve desvendar
          um mistério antigo para escapar de uma cidade esquecida... ver o mundo
          através dos olhos de um vira-lata e interagir com o ambiente de
          maneiras lúdicas. Seja furtivo, ágil, bobo e, às vezes, o mais
          irritante possível com os estranhos habitantes deste mundo estrangeiro
        </p>

        <div className="separator"></div>

        <div className="buttons-game ">
          <Button>Comunidade</Button>
          <Button>Avaliações</Button>
        </div>

        <img
          className="examples"
          src={Write}
          alt="Aqui será onde irá escrever a publicação"
        />
        <img
          className="examples"
          src={PostOne}
          alt="Aqui é onde ficará as postagens"
        />
        <img
          className="examples"
          src={PostTwo}
          alt="Aqui é onde ficará as postagens"
        />
        <img
          className="examples endpage"
          src={EndPage}
          alt="Aqui é o fim da página"
        />
      </div>
      <Footer />
    </div>
  );
}
