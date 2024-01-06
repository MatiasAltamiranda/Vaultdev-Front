import { NavLink } from "react-router-dom";
import VaultDev from "../../Assets/VaultDev.webp";
import "./header.css";

const Header = () => {
  return (
    <>
      <header>
        <marquee>
          VaultDev, es nuestro proyecto sin fines de lucro, está comprometido
          con hacer que los conceptos sobre programación sean accesible para
          todos 🤝 . Al compartir nuestra página con amigos o grupos interesados,
          contribuyes a nuestra misión. Agradecemos a todos aquellos que
          comparten nuestra pagina!!! 😃
        </marquee>
        <NavLink to="/">
          <figure className="container-logo">
            <img className="img-logo" src={VaultDev} alt="Logo VaultDev" />
          </figure>
        </NavLink>
      </header>
    </>
  );
};

export default Header;
