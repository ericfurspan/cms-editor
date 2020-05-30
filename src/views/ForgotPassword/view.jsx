import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PublicHeader, PublicFooter } from '../../components';
import { ForgotPasswordForm } from './components';

const ForgotPasswordPage = () => (
  <>
    <PublicHeader />
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <h2 className="text-white mb-2">Change Password</h2>
          <ForgotPasswordForm />
          <div className="text-center text-secondary mt-3">
            <Link to="/login" className="text-white">Return to Log in</Link>
          </div>
        </Col>
      </Row>
      <PublicFooter />
    </Container>
  </>
);

export default ForgotPasswordPage;
