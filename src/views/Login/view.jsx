import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../queries';
import { LoginForm } from './components';
import { PublicHeader, PublicFooter } from '../../components';

const LoginPage = () => {
  const [ useLogin ] = useMutation(LOGIN);

  return (
    <>
      <PublicHeader />
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <h2 className="text-white mb-2">Log in</h2>
            <LoginForm submitLogin={useLogin} />
            <div className="text-center mt-3">
              <Link to="/forgot-password" className="text-white">Forgot password?</Link>
            </div>
          </Col>
        </Row>
      </Container>
      <PublicFooter />
    </>
  );
};

export default LoginPage;
