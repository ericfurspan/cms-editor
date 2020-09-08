import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { StyledSubmitBtn } from './style';

const LoginForm = ({ login }) => {
  const [formError, setFormError] = useState(false);
  const [validated, setValidated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
    <Form onSubmit={handleSubmit} validated={validated}>
      <Form.Group controlId="identifier">
        <Form.Label>Email or Username</Form.Label>
        <Form.Control
          type="text"
          label="Username or Email"
          name="identifier"
          onChange={onChangeField}
          isInvalid={formError}
          required
          autoComplete="username"
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type={showPassword ? 'text' : 'password'}
          name="password"
          label="Password"
          onChange={onChangeField}
          isInvalid={formError}
          required
          autoComplete="current-password"
        />
        {formError && (
          <Form.Control.Feedback className="mt-1 mb-1" type="invalid">
            {formError}
          </Form.Control.Feedback>
        )}

        <label
          htmlFor="toggle-pw-visibility"
          className="d-flex align-items-center justify-content-end mt-1 user-select-none"
        >
          <input
            type="checkbox"
            name="toggle-pw-visibility"
            id="toggle-pw-visibility"
            className="mr-1"
            onClick={() => setShowPassword(!showPassword)}
          />
          Show Password
        </label>
      </Form.Group>

      <Form.Group className="mt-4 m-1">
        <StyledSubmitBtn type="submit" size="lg" block>
          Login
        </StyledSubmitBtn>
      </Form.Group>
      {/* <div className="text-center mt-5">
        <Link to="/forgot-password">
          <StyledLinkButton size="sm">Forgot password</StyledLinkButton>
        </Link>
      </div> */}
    </Form>
  );
};

export default LoginForm;
