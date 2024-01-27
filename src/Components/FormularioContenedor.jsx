import { Form } from "react-bootstrap";
import FormularioInputs from "./FormularioInputs";

const Formulario = () => {

  return (
    <>
    <section
      className="border border-primary rounded-1 bg-body-tertiary py-5 px-5"
    >
      <h1 className="text-secondary mb-5">Cargar Datos</h1>
      <FormularioInputs></FormularioInputs>
    </section>
    </>
  );
};

export default Formulario;
