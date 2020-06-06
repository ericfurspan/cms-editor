import React from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const handleSubmit = (event) => {
  event.preventDefault();
};

const ForgotPasswordForm = () => (
  <Form onSubmit={handleSubmit} className="text-secondary">
    <Form.Group controlId="formUsername">
      <Form.Label>Email Address</Form.Label>
      <Form.Control type="text" placeholder="email@example.com" />
      <Form.Text className="text-muted">
        We&apos;ll send you a reset email.
      </Form.Text>
    </Form.Group>
    <Form.Group className="mt-2 m-1" as={Row}>
      <Button variant="primary" type="submit" size="lg" block>
        Send Email
      </Button>
    </Form.Group>
    <div className="text-center mt-2">
      <Button variant="link" as={Link} to="/login">
        Ready to Login
      </Button>
    </div>
  </Form>
);

export default ForgotPasswordForm;
