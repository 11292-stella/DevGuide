import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

import "../styles/appnavbar.css"

const AppNavbar = function () {
  return (
    <>
      <Navbar className="navc" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            DevGuide
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/creazione">
                creazione
              </Nav.Link>
              <Nav.Link as={Link} to="/esempipronti">
                Esempi Pronti
              </Nav.Link>
              <Nav.Link as={Link} to="/html">
                html
              </Nav.Link>
              <Nav.Link as={Link} to="/css">
                css
              </Nav.Link>
              <Nav.Link as={Link} to="/bootstrap">
                Bootstrap
              </Nav.Link>
              <NavDropdown
                title="Dropdown"
                className="back"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/javascript">
                  javascript
                </NavDropdown.Item>
                <NavDropdown.Item Link as={Link} to="/react">
                  react
                </NavDropdown.Item>
                <NavDropdown.Item Link as={Link} to="/angular">
                  angular
                </NavDropdown.Item>
                <NavDropdown.Item Link as={Link} to="/java">
                  java
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/springboot">
                  springboot
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default AppNavbar
