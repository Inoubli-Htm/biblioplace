import React, { useState } from "react";

import { FormControl, Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/actions/userActions";

function EditUser({ user }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(user.userName);
  const [phone, setPhone] = useState(user.phone);
  const [userid, setUserid] = useState(user.userId);
  const [profession, setProfession] = useState(user.profession);
  const [adresse, setAdresse] = useState(user.userAdress);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  return (
    <>
      <Button onClick={handleShow} variant="outline-secondary">
        Edit profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Pseudo</Form.Label>
          <FormControl
            type="text"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
          />
          <Form.Label>Nom</Form.Label>
          <FormControl
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Label>Numero de telephone</Form.Label>
          <FormControl
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Form.Label>Profession</Form.Label>
          <FormControl
            type="text"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
          <Form.Label>Adresse</Form.Label>
          <FormControl
            type="text"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(
                updateUser(user._id, {
                  userName: name,
                  phone,
                  userId: userid,
                  profession,
                  userAdress: adresse,
                })
              );
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditUser;
