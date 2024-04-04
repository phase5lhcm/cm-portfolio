import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function NavBar() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Christine Maynard</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home">Experience</Nav.Link>
          <Nav.Link href="#features">Sample Project</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar
