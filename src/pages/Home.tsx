import User from '../assets/img/user.svg'
import Logo from '../assets/img/logo.svg'
import Monster from '../assets/img/monster.svg'

import '../styles/home.scss'

import { Button } from '../components/Button'

export function Home() {
      return (
            <div className="container">
                  <div id="header">
                        <div id="navbar">
                              <a id="logoImg" href="/">
                                    <img src={Logo} alt="Logo Combeew"/>
                              </a>
                              <a id="userImg" href="/">
                                    <img src={User} alt="Menu" />
                              </a>
                        </div>
                        <div id="welcome">
                              <div id="content">
                                    <h1 className="title-yellow">A maior colmeia <br></br> dos videogames...</h1>
                                    <p>entre nessa aventura e interaja com 
                                          as nossas comunidades. E encontre o 
                                          melhor que os games tem a te oferecer...</p>
                                    <div className="buttons">
                                          <Button>junte-se a nós</Button>
                                          <Button isInvisible>já sou membro</Button>
                                    </div>
                              </div>
                              <img src={Monster} alt="Monstro da Combeew"/>
                        </div>
                  </div>
            </div>
      )
}