import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { StyledSubmitBtn, StyledLinkButton } from './style';

const ForgotPasswordForm = () => {
  const [emailSubmitted, /* setEmailSubmitted */] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // todo: finish me

    // eslint-disable-next-line no-alert
    alert('This feature is coming soon. If you need help logging in, please contact admin@quanda.dev.');
    // setEmailSubmitted(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="changePasswordEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="text" label="Email Address" placeholder="name@example.com" required />
        {emailSubmitted && (
          <Form.Text as="h6" className="mt-2 p-2 bg-success text-white">
            Check your email for instructions
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mt-4 m-1">
        <StyledSubmitBtn type="submit" size="lg" block>
          Send Email
        </StyledSubmitBtn>
      </Form.Group>
      <div className="text-center mt-5">
        <Link to="/login">
          <StyledLinkButton size="sm">Back to Login</StyledLinkButton>
        </Link>
      </div>
    </Form>
  );
};

export default ForgotPasswordForm;
