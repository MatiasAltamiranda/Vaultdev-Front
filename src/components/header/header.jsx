import VaultDev from "../../Assets/VaultDev.webp";
import "./header.css"

const Header = () => {
  return (
    <>
      <header>
        <marquee >VaultDev es un proyecto sin fines de lucro que busca simplificar el aprendizaje facilitando conceptos sobre programación a quienes estén interesados en aprender. Esta pagina todavia esta en una version beta. Todas las semanas entontraras nuevos conceptos!.</marquee >
        <figure className="container-logo">
          <img className="img-logo" src={VaultDev} alt="Logo VaultDev" />
        </figure>
      </header>
    </>
  );
};

export default Header;
