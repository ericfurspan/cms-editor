import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PublicBrandHeader, EmailSupport } from '../../components/design';
import { ForgotPasswordForm } from './components';

const ForgotPasswordPage = () => (
  <>
    <PublicBrandHeader headerText="Reset Password" />
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <ForgotPasswordForm />
          <div className="text-center text-secondary mt-3">
            <Link to="/login" className="text-white">Return to Log in</Link>
          </div>
          <div className="text-center text-secondary mt-2">
            <EmailSupport />
          </div>
        </Col>
      </Row>
    </Container>
  </>
);

export default ForgotPasswordPage;
