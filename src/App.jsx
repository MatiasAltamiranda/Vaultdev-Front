import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Layout from "./components/layout/layout";
import ConceptState from "./context/conceptState";
import ConceptDetails from "./pages/conceptDetails/conceptDetails";
import SearchPage from "./pages/searchPage/searchPage";

function App() {
  return (
    <>
      <ConceptState>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/concept/:id" element={<ConceptDetails />} />
            <Route path="/concept/search/:q" element={<SearchPage />} />
          </Routes>
        </Layout>
      </ConceptState>
    </>
  );
}

export default App;
