import User from "../assets/img/user.svg";
import Logo from "../assets/img/logo.svg";

import "../styles/navbar.scss";

export function Navbar() {
  return (
    <div id="navbar">
      <a id="logoImg" href="/">
        <img src={Logo} alt="Logo Combeew" />
      </a>
      <a id="userImg" href="/">
        <img src={User} alt="Menu" />
      </a>
    </div>
  );
}
