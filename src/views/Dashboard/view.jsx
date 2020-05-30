import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { GET_BUSINESS } from '../../queries';
import { PublicHeader } from '../../components';

const DashboardPage = () => {
  const { data, loading, error } = useQuery(GET_BUSINESS, { variables: { businessId: 1 } });

  if (loading) { return <p>Loading...</p>; }
  if (error) { return <p>Error...</p>; }

  const { business } = data;

  return (
    <>
      <PublicHeader headerText={business.name} />
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <div className="text-center text-light mt-3">
              Todo
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardPage;
