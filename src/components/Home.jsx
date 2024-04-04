import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from './NavBar'
import christine from '../assets/images/christine.jpg'
function Home() {
  return (
    <>
      <Container style={{ backgroundColor: '#000000' }}>
        <NavBar />
        <Row>
          <Col>
            <p style={{ paddingTop: '1em', color: '#fff' }}>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              natus cumque sed harum aperiam aliquid quam tempore cum, quos
              quidem facilis veritatis placeat libero. Harum temporibus ipsum
              beatae porro soluta?
            </p>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <img src={christine} className="img-fluid" alt="Christine" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
