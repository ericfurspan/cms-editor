import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PublicHeader } from '../../components';
import { ForgotPasswordForm } from './components';

const ForgotPassword = () => (
  <Col>
    <PublicHeader />
    <Container className="mt-5">
      <Row className="m-1">
        <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }}>
          <h3 className="mb-4 text-center">Change Password</h3>
          <ForgotPasswordForm />
        </Col>
      </Row>
    </Container>
  </Col>
);

export default ForgotPassword;
