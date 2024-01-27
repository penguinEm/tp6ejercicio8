import { Button, Form } from "react-bootstrap";
import Inputs from "./Inputs";

const Formulario = () => {
  return (
    <Form className="border border-primary rounded-1 bg-body-tertiary py-5 px-5">
      <h1 className="text-secondary mb-5">Cargar Datos</h1>
      <Inputs></Inputs>
      <div className="text-end mt-5">
        <Button variant="outline-primary" type="submit">
          Enviar
        </Button>
      </div>
    </Form>
  );
};

export default Formulario;
