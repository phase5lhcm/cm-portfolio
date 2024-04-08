import React from 'react'
import { Button, Form, Col, Row, Container } from 'react-bootstrap'
import NavBar from './NavBar'
import contactFormBckgrnd from '../assets/images/contactFormBckgrnd.jpeg'

function ContactForm() {
  return (
    <>
      <Container style={{ backgroundColor: 'grey', padding: '2em' }}>
        <NavBar />
        <Row>
          <Col></Col>
          <Col className="text-center py-4">
            <h2>Let's Connect!</h2>
          </Col>
          <Col></Col>
        </Row>

        <Form
          className="contact-form"
          style={{
            backgroundImage: `url(${contactFormBckgrnd})`,
            maxWidth: '40%',
            margin: '0 auto',
            padding: '1.25em',
            borderRadius: '0.5em',
            boxShadow: '12px 12px 2px 1px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </>
  )
}

export default ContactForm
