import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../../../main/context';

const LoginForm = ({ submitLogin }) => {
  const auth = useContext(AuthContext);

  const [ formError, setFormError ] = useState(false);
  const [ validated, setValidated ] = useState(false);
  const [ formFields, setFormField ] = useState({ identifier: '', password: '', provider: 'local' });

  /* Validates form and submits request */
  const handleSubmit = async event => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    try {
      const { data } = await submitLogin({ variables: { loginPayload: formFields } });
      setFormError(false);
      setValidated(true);
      const { jwt, user } = data.login;
      auth.setAuth({ jwt, user });
    } catch (e) {
      setFormError(
        `The username and password you entered did not match our records.
        Please double-check and try again.`,
      );
    }
  };

  /* Update controlled field values */
  const onChangeField = event => {
    const { name, value } = event.target;
    setFormError(false);
    setFormField({ ...formFields, [name]: value });
  };

  return (
    <Form onSubmit={handleSubmit} validated={validated}>
      <Form.Group controlId="identifier">
        <Form.Label className="text-white-50">Username or Email</Form.Label>
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
        <Form.Label className="text-white-50">Password</Form.Label>
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
      <Form.Group>
        <Button variant="primary" type="submit" block>Log in</Button>
      </Form.Group>
    </Form>
  );
};

export default LoginForm;
