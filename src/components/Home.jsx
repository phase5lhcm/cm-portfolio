import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from './NavBar'
import christine from '../assets/images/christine.jpg'
import background from '../assets/images/background.jpeg'
function Home() {
  return (
    <>
      <Container
        style={{ backgroundImage: `url(${background})`, color: '#ffffff' }}
      >
        <NavBar />
        <Row>
          <Col></Col>
          <Col>
            {' '}
            <img
              src={christine}
              className="img-fluid"
              alt="Christine"
              style={{ paddingTop: '2em' }}
            />
          </Col>
          <Col></Col>
        </Row>

        <Row className="text-center py-4">
          {' '}
          <h2>Experience</h2>
        </Row>
        <Row>
          <Col>
            <h3>Fullstack Java Developer</h3>
            <h5>Cvent</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              officia quibusdam placeat nobis enim aut? Veritatis dignissimos
              quo architecto placeat, alias perspiciatis dolor adipisci commodi.
              Totam facilis architecto quo temporibus?
            </p>
          </Col>
          <Col>
            <h3>Software Engineer</h3>
            <h5>Citigroup</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              officia quibusdam placeat nobis enim aut? Veritatis dignissimos
              quo architecto placeat, alias perspiciatis dolor adipisci commodi.
              Totam facilis architecto quo temporibus?
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
