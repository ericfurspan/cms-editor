import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const handleSubmit = (event) => {
  event.preventDefault();
};

const ForgotPasswordForm = () => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formUsername">
      <Form.Control
        type="text"
        placeholder="Email Address"
        label="Email Address"
      />
      <Form.Text className="text-muted mt-2">
        We&apos;ll send you a reset email.
      </Form.Text>
    </Form.Group>
    <Form.Group className="mt-4 m-1">
      <Button variant="primary" type="submit" block>
        Send Email
      </Button>
    </Form.Group>
    <div className="text-center mt-5">
      <Button variant="outline-secondary" as={Link} to="/login" size="sm">
        Back to Login
      </Button>
    </div>
  </Form>
);

export default ForgotPasswordForm;
