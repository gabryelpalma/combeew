import { useNavigate } from "react-router-dom";

import Logo from "../assets/img/welcome.svg";
import Facebook from "../assets/img/facebook.svg";
import Google from "../assets/img/google.svg";

import "../styles/loginRoom.scss";

export function LoginRoom() {
  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }

  return (
    <div className="container">
      <section>
        <div className="content">
          <img src={Logo} alt="Logo Combeew" />
          <br />
          <div className="login-buttons">
            <button
              className="rounded-button"
              id="google-button"
              onClick={goToHome}
            >
              <img src={Google} alt="Logo Google" />
              Acesse com o Google
            </button>
            <br />
            <button
              className="rounded-button"
              id="facebook-button"
              onClick={goToHome}
            >
              <img src={Facebook} alt="Logo Facebook" />
              Acesse com o Facebook
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
