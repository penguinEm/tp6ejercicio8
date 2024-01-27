import { Container } from "react-bootstrap";
import FormularioContenedor from "./Components/FormularioContenedor";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Container className="main d-flex justify-content-center align-items-center">
        <FormularioContenedor></FormularioContenedor>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
