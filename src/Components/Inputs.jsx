import { Form } from "react-bootstrap";
import { useState } from "react";

const Inputs = () => {

    const [nombre, setNombre] = useState ("")
    const [Apellido, setApellido] = useState ("")
    const [dni, setdni] = useState ("")
    const [email, setEmail] = useState ("")


  return (
    <>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="text-secondary ms-1">Nombre</Form.Label>
        <Form.Control
          className="color-titulo"
          type="text"
          placeholder="Ej. Juan"
          minLength={2}
          maxLength={30}
          required
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
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="text-secondary ms-1">DNI</Form.Label>
        <Form.Control
          type="number"
          className="color-titulo"
          placeholder="Ej. 33333333"
          pattern="[0-9]*"
          min={8}
          max={8}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="text-secondary ms-1">email</Form.Label>
        <Form.Control
          type="email"
          className="color-titulo"
          placeholder="Ej. name@example.com"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          minLength={6}
          maxLength={60}
          required
        />
      </Form.Group>
    </>
  );
};

export default Inputs;
