import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PublicHeader, PublicFooter } from '../../components';
import { ForgotPasswordForm } from './components';

const ForgotPassword = () => (
  <>
    <PublicHeader />
    <Container className="mt-5">
      <Row className="m-1">
        <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }}>
          <h2 className="mb-4">Change Password</h2>
          <ForgotPasswordForm />
        </Col>
      </Row>
    </Container>
    <PublicFooter />
  </>
);

export default ForgotPassword;
