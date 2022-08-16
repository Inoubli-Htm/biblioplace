import React, { useState } from "react";

import { FormControl, Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateLivre } from "../redux/actions/livreActions";

function EditLivre({ livre }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(livre.livreName);
  const [auteur, setAuteur] = useState(livre.auteur);
  const [editeur, setEditeur] = useState(livre.editeur);
  const [langue, setLangue] = useState(livre.langue);
  const [description, setDescription] = useState(livre.description);
  const [type, setType] = useState(livre.typeLivre);
  const [picture, setPicture] = useState(livre.imageUrl);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const confirm = () => {
    dispatch(
      updateLivre(livre._id, {
        livreName: name,
        auteur,
        editeur,
        langue,
        description,
        typeLivre: type,
      })
    );

    handleClose();
  };

  const dispatch = useDispatch();

  return (
    <>
      <Button onClick={handleShow} style={{ backgroundColor: "blue" }}>
        Edit Book
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormControl
            type="text"
            value={auteur}
            onChange={(e) => setAuteur(e.target.value)}
          />

          <FormControl
            type="text"
            value={editeur}
            onChange={(e) => setEditeur(e.target.value)}
          />
          {/* <FormControl
            type="text"
            value={langue}
            onChange={(e) => setLangue(e.target.value)}
          /> */}
          <Form.Group className="mb-3">
            <Form.Label>Langue</Form.Label>
            <Form.Select
              id="disabledSelect"
              name="langue"
              onChange={(e) => setLangue(e.target.value)}
            >
              <option value="Francais">Francais</option>

              <option value="Arabe">Arabe</option>

              <option value="Anglais">Anglais</option>
            </Form.Select>
          </Form.Group>
          <FormControl
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {/* <FormControl
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          /> */}
          <Form.Group className="mb-3">
            <Form.Label>Type du livre</Form.Label>
            <Form.Select
              id="disabledSelect"
              name="typeLivre"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Drame">Drame</option>

              <option value="Policier">Policier</option>

              <option value="Poetique">Poetique</option>
              <option value="Informatique">Informatique</option>
              <option value="Documentaire">Documentaire</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={confirm}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditLivre;
