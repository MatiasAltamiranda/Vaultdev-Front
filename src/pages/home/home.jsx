import "./home.css";
import ImgMain from "../../../public/coffe_friends.svg"

const Home = () => {
  return (
    <>
      <main className="container">
            <div className="row mb-5 main-content">
                <div className="col-12 col-md-6 main-content-text">
                    <h2>
                        Conocimiento
                    </h2>
                    <h2>
                        sin fronteras
                    </h2>
                    <p>
                        Vault <span>{"<Dev/>"}</span> es un proyecto sin fines de lucro
que busca simplificar el aprendizaje facilitando
conceptos sobre programación a quienes estén
interesados en aprender.
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <figure>
                        <img className="main-content-img" src={ImgMain} alt="Imagen portada" />
                    </figure>
                </div>
            </div>
      </main>
    </>
  );
};

export default Home;
