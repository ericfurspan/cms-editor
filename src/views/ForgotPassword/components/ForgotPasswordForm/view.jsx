import React from 'react';
import { Button, Form } from 'react-bootstrap';

const ForgotPasswordForm = () => (
  <Form className="text-white-50">
    <Form.Group controlId="formUsername">
      <Form.Label>Email Address</Form.Label>
      <Form.Control type="text" placeholder="email@example.com" />
    </Form.Group>
    <Form.Group controlId="formSubmit">
      <Button variant="primary" type="submit" block>
        Send Email
      </Button>
    </Form.Group>
  </Form>
);

export default ForgotPasswordForm;
