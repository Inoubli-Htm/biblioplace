import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../redux/actions/authActions";

import Form from "react-bootstrap/Form";

function NavBar({ getTitle }) {
  const { auth, user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Biblio Place
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="/">
              Home
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Livre, Auteur, langue ...."
              className="me-2"
              aria-label="Search"
              onChange={(e) => getTitle(e.target.value)}
            />
          </Form>
          {auth ? (
            <>
              <Nav>
                <Nav.Link as={Link} to="/profile">
                  {user.userName}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/login"
                  onClick={() => dispatch(userLogout())}
                >
                  Logout
                </Nav.Link>
              </Nav>
            </>
          ) : (
            <>
              <Nav>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </Nav>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
