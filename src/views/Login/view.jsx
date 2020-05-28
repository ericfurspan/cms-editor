import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LoginForm } from './components';
import { BrandHeader, EmailSupport } from '../../components/design';

const LoginPage = () => (
  <>
    <BrandHeader headerText="Log in to CMS" />
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <LoginForm />
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

export default LoginPage;
