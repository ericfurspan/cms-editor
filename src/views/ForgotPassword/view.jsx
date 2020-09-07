import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { ForgotPasswordForm } from './components';

const ForgotPassword = () => (
  <Container className="mt-5">
    <Row>
      <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }}>
        <Card className="p-4">
          <h3 className="mb-4 text-center">Change Password</h3>
          <ForgotPasswordForm />
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ForgotPassword;
