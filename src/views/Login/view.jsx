import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../queries';
import { LoginForm } from './components';
import { PublicBrandHeader, EmailSupport } from '../../components/design';

const LoginPage = () => {
  const [ useLogin ] = useMutation(LOGIN);

  return (
    <>
      <PublicBrandHeader />
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <h2 className="text-white mb-2">Log in</h2>
            <LoginForm submitLogin={useLogin} />
            <div className="text-center mt-3">
              <Link to="/forgot-password" className="text-white">Forgot password?</Link>
            </div>
            <div className="text-center text-secondary mt-2">
              <EmailSupport />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
