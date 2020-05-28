import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrandHeader } from '../../components/design';

const DashboardPage = () => (
  <>
    <BrandHeader headerText="Welcome" />
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <div className="text-center mt-3">
            Todo
          </div>
        </Col>
      </Row>
    </Container>
  </>
);

export default DashboardPage;
