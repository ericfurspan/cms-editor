import React from 'react';
import { Button, Form } from 'react-bootstrap';

const LoginForm = () => (
  <Form className="text-white-50">
    <Form.Group controlId="formUsername">
      <Form.Label>Username or Email</Form.Label>
      <Form.Control type="email" placeholder="email@example.com" />
    </Form.Group>
    <Form.Group controlId="formPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" />
    </Form.Group>
    <Form.Group controlId="formSubmit">
      <Button variant="primary" type="submit" block>
        Log in
      </Button>
    </Form.Group>
  </Form>
);

export default LoginForm;
