import styled from "styled-components";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import FourColumns from "./components/FourColumns";
import Header from "./components/Header";
import Orange from "./components/Orange";
import SixBlocks from "./components/SixBlocks";

function App() {
  return (
    <div>
      <Header />
      <Orange />
      <SixBlocks />
      <Clients />
      <FourColumns />
      <Footer />
    </div>
  );
}

export default App;
