import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addLivre } from "../redux/actions/livreActions";

function AddLivre() {
  const [data, setData] = useState({
    livreName: "",
    auteur: "",
    editeur: "",
    langue: "",
    description: "",
    typeLivre: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle change
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Add books
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addLivre(data, navigate));
  };

  return (
    <div style={{ margin: "auto" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nom du livre *</Form.Label>
          <Form.Control
            type="text"
            name="livreName"
            placeholder="Entrer le nom du livre"
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Auteur *</Form.Label>
          <Form.Control
            type="text"
            name="auteur"
            placeholder="Auteur"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Editeur *</Form.Label>
          <Form.Control
            type="text"
            name="editeur"
            placeholder="Editeur"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Langue *</Form.Label>
          <Form.Select
            id="disabledSelect"
            name="langue"
            onChange={handleChange}
          >
            <option value="Francais">Francais</option>

            <option value="Arabe">Arabe</option>

            <option value="Anglais">Anglais</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Type du livre *</Form.Label>
          <Form.Select
            id="disabledSelect"
            name="typeLivre"
            onChange={handleChange}
          >
            <option value="Drame">Drame</option>

            <option value="Policier">Policier</option>

            <option value="Poetique">Poetique</option>
            <option value="Informatique">Informatique</option>
            <option value="Documentaire">Documentaire</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description *</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
          />
        </Form.Group>

        <Modal.Body> *: Champs Obligatoire </Modal.Body>
        <p>&nbsp;</p>
        <Button variant="primary" type="submit">
          Ajouter
        </Button>
      </Form>
    </div>
  );
}

export default AddLivre;
