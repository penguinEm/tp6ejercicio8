import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const Inputs = () => {
  /* Varibales ---------------------------.. */

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");

  /* Funciones ------------------------------ */
  const manejadorSubmit = (e) => {
    if (nombre === "" || apellido === "" || dni === "" || email === "") {
      alert("Completar datos");
      e.preventDefault()
    } else {
      alert("Datos enviados correctamente");
      e.target.reset();
    }
  };

  /* Maquetado y log extra ---------------------- */
  return (
    <>
      <Form onSubmit={manejadorSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-secondary ms-1">Nombre</Form.Label>
          <Form.Control
            className="color-titulo"
            type="text"
            placeholder="Ej. Juan"
            minLength={2}
            maxLength={30}
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-secondary ms-1">Apellido</Form.Label>
          <Form.Control
            type="text"
            className="color-titulo"
            placeholder="Ej. Perez"
            minLength={3}
            maxLength={30}
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-secondary ms-1">DNI</Form.Label>
          <Form.Control
            type="text"
            className="color-titulo"
            placeholder="Ej. 33333333"
            pattern="[0-9]*"
            minLength={7}
            maxLength={8}
            onChange={(e) => setDni(e.target.value)}
            value={dni}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-secondary ms-1">email</Form.Label>
          <Form.Control
            type="email"
            className="color-titulo"
            placeholder="Ej. name@example.com"
            minLength={6}
            maxLength={60}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>
        <div className="text-end mt-5">
          <Button variant="outline-primary" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Inputs;
