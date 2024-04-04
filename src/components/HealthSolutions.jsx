import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import healthsolutions from '../assets/images/healthsolutions.jpeg'
import NavBar from './NavBar'
import Button from 'react-bootstrap/Button'
import background from '../assets/images/background.jpeg'

function HealthSolutions() {
  return (
    <>
      <Container
        style={{ backgroundImage: `url(${background})`, color: '#ffffff' }}
      >
        <NavBar />
        <Row>
          <Col>
            <img
              src={healthsolutions}
              className="img-fluid"
              alt="Health solutions project picture"
            />
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              rem esse numquam ducimus. Odit illo ullam adipisci, itaque vero,
              eius, ex nesciunt neque molestias pariatur necessitatibus
              assumenda similique corporis. Placeat. Corrupti suscipit itaque
              magnam deserunt. Natus cumque reiciendis quod? Dignissimos culpa
              expedita illum dolore nam voluptatibus accusantium cum suscipit
              ad? Laboriosam reprehenderit unde incidunt voluptatum hic, iure
              consequatur harum nisi! Iure eveniet molestiae aperiam cum omnis
              nam magni placeat autem veritatis consequuntur dolores vero
              provident distinctio rerum velit suscipit accusamus voluptas rem
              ab nesciunt, voluptatem optio pariatur sequi commodi. Adipisci.
              Animi dignissimos tempore, voluptatem qui provident repellat! Rem
              odio molestias tempora temporibus eaque assumenda corrupti,
              consequuntur provident accusamus laboriosam ipsa porro debitis,
              sint, mollitia rerum in. Hic quidem doloribus commodi!
            </p>
            {/*TODO -add hover styles */}
            <Button
              size="lg"
              style={{
                backgroundColor: '#F08E80',
                borderColor: '#F08E80',
                borderRadius: '45%',
              }}
            >
              View Live
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HealthSolutions
