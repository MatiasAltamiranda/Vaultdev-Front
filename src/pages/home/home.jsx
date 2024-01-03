import "./home.css";
import ImgMain from "../../Assets/coffe_friends.svg";
import Search from "../../components/search/search";


const Home = () => {
 
  return (
    <>
      <main>
        <div className="container">
          <div className="row mb-5 main-content">
            <div className="col-12 col-md-6 main-content-text">
              <h2>Conocimiento</h2>
              <h2>sin fronteras</h2>
              <p>
                Vault <span>{"<Dev/>"}</span> es un proyecto sin fines de lucro
                que busca simplificar el aprendizaje facilitando conceptos sobre
                programación a quienes estén interesados en aprender.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <figure>
                <img
                  className="main-content-img"
                  src={ImgMain}
                  alt="Imagen portada"
                />
              </figure>
            </div>
          </div>
        </div>
        <Search />
      </main>
    </>
  );
};

export default Home;
