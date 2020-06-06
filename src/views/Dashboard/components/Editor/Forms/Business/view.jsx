import React from 'react';
import { Container, Form } from 'react-bootstrap';

const BusinessForm = ({ business }) => (
  <Container>
    <Form>
      <Form.Group controlId="businessForm.name">
        <Form.Label className="text-muted">Name</Form.Label>
        <Form.Control type="text" value={business.name} />
      </Form.Group>
      <Form.Group controlId="businessForm.caption">
        <Form.Label className="text-muted">Caption</Form.Label>
        <Form.Control type="text" value={business.caption} />
      </Form.Group>
      <Form.Group controlId="businessForm.mission">
        <Form.Label className="text-muted">Mission Statement</Form.Label>
        <Form.Control
          as="textarea"
          rows="6"
          value={business.mission_statement}
        />
      </Form.Group>
      <Form.Group controlId="businessForm.logo">
        <Form.Label className="text-muted">Logo</Form.Label>
        <Form.File />
      </Form.Group>
      <Form.Group controlId="businessForm.contact">
        <Form.Label className="text-muted">Contact Links</Form.Label>
        <Form.Control as="textarea" rows="6" value={business.contact_links} />
      </Form.Group>
    </Form>
  </Container>
);

export default BusinessForm;
