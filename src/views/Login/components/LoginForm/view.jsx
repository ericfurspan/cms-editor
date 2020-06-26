import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginForm = ({ login }) => {
  const [formError, setFormError] = useState(false);
  const [validated, setValidated] = useState(false);
  const [formFields, setFormField] = useState({
    identifier: '',
    password: '',
    provider: 'local',
  });

  /* Validates form and submits request */
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    try {
      await login({ variables: { loginPayload: formFields } });
      setFormError(false);
      setValidated(true);
    } catch (e) {
      setFormError(
        `${e.message}: The username and password you entered did not match our records.
        Please double-check and try again.`
      );
    }
  };

  /* Update controlled field values */
  const onChangeField = (event) => {
    const { name, value } = event.target;
    setFormError(false);
    setFormField({ ...formFields, [name]: value });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      validated={validated}
      className="text-secondary"
    >
      <Form.Group controlId="identifier">
        <Form.Label>Username or Email</Form.Label>
        <Form.Control
          type="text"
          name="identifier"
          placeholder="Username or Email"
          onChange={onChangeField}
          isInvalid={formError}
          required
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChangeField}
          isInvalid={formError}
          required
        />
        {formError && (
          <Form.Control.Feedback className="mt-1 mb-1" type="invalid">
            {formError}
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group className="mt-2 m-1">
        <Button variant="primary" type="submit" size="lg" block>
          Login
        </Button>
      </Form.Group>
      <div className="text-center mt-2">
        <Button variant="link" as={Link} to="/forgot-password">
          Forgot password
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
