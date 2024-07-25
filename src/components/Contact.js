import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './Contact.css'; 

const Contact = () => (
  <Container className="contact-container">
    <h1 className="text-center my-4">Contact Us</h1>
    <p className="text-center mb-5">We'd love to hear from you. Please fill out the form below to get in touch with us.</p>
    <Row>
      <Col md={6} className="contact-info">
        <h4>Address</h4>
        <p>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
        <h4>Phone</h4>
        <p>+1 (123) 456-7890</p>
        <h4>Email</h4>
        <p>info@springdale.edu</p>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094313!2d144.9537363155045!3d-37.81720974202106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a6a6d0c65a0!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1615965059290!5m2!1sen!2sus"
          width="100%"
          height="250"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </Col>
      <Col md={6}>
        <Form className="contact-form">
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default Contact;

