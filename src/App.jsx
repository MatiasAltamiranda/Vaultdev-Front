import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Layout from "./components/layout/layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
