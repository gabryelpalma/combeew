import User from "../assets/img/user.svg"
import Logo from "../assets/img/logo.svg"

import '../styles/home.scss'

export function Home() {
      return (
            <div className="container">
                  <div id="header">
                        <div id="navbar">
                              <a id="logoImg" href="/">
                                    <img src={Logo} alt="Logo Combeew"/>
                              </a>
                              <a id="userImg" href="/">
                                    <img src={User} alt="" />
                              </a>
                        </div>
                  </div>
            </div>
      )
}