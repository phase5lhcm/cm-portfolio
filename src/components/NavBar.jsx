import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-solid-svg-icons'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

function NavBar() {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#Github">
              {' '}
              <FaGithub />
            </Nav.Link>
            <Nav.Link href="#LinkedIn">
              {' '}
              <FaLinkedin />
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">
              Experience
            </Nav.Link>
            <Nav.Link as={NavLink} to="/sample-project">
              Sample Project
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default NavBar
