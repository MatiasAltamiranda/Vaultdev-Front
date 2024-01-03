import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Layout from "./components/layout/layout";
import ConceptState from "./context/conceptState";

function App() {
  return (
    <>
      <ConceptState>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </ConceptState>
    </>
  );
}

export default App;
