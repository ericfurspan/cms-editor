import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PublicHeader, PublicFooter } from '../../components';
import { ForgotPasswordForm } from './components';

const ForgotPassword = () => (
  <>
    <PublicHeader />
    <Container className="mt-4">
      <Row className="m-1">
        <Col md={{ span: 4, offset: 4 }}>
          <h2 className="mb-2">Change Password</h2>
          <ForgotPasswordForm />
        </Col>
      </Row>
    </Container>
    <PublicFooter />
  </>
);

export default ForgotPassword;
