import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const handleSubmit = (event) => {
  event.preventDefault();
};

const ForgotPasswordForm = () => (
  <Form onSubmit={handleSubmit} className="text-muted">
    <Form.Group controlId="formUsername">
      <Form.Label>Email Address</Form.Label>
      <Form.Control type="text" placeholder="email@example.com" />
      <Form.Text className="text-muted mt-2">
        We&apos;ll send you a reset email.
      </Form.Text>
    </Form.Group>
    <Form.Group className="mt-4 m-1">
      <Button variant="outline-primary" type="submit" size="lg" block>
        Send Email
      </Button>
    </Form.Group>
    <div className="text-center mt-4">
      <Button variant="light" as={Link} to="/login">
        Back to Login
      </Button>
    </div>
  </Form>
);

export default ForgotPasswordForm;
