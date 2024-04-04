import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from './NavBar'
import christine from '../assets/images/christine.jpg'
import background from '../assets/images/background.jpeg'
import Introduction from './Introduction'

function Home() {
  return (
    <>
      <Container
        style={{
          backgroundImage: `url(${background})`,
          color: '#ffffff',
        }}
      >
        <NavBar />
        <Row className="text-center py-4">
          <Col>
            <Introduction />
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            {' '}
            <img src={christine} className="img-fluid" alt="Christine" />
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <Col>
            <h5 className="text-center" style={{ paddingTop: '10px' }}>
              Fullstack Java Developer | Cvent | May 2020 - June 2023
            </h5>

            <p>
              Fullstack Software Developer for Cvent's Planner Navigator
              application and its ecoysystem of microservices.
            </p>
          </Col>
          <Col>
            <h5 className="text-center" style={{ paddingTop: '10px' }}>
              Software Engineer | Citigroup | Aug 2023 - present
            </h5>

            <p>
              Production Support Engineer supporting Citigroup's internal
              Facility Management Elastic Cloud Container services
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
