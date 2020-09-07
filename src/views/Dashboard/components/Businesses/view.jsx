import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Col, Row, Container, Card, Badge } from 'react-bootstrap';
import sortBy from 'lodash/sortBy';
import { StyledContentWrapper, StyledContentBanner, StyledMetaContainer } from '../../style';
import { BusinessForm } from './components';
import { ContentLoader } from '../../../../components';
import { FETCH_BUSINESSES } from '../../../../graphql';
import { MissingPlaceholder } from '../../../../components/MissingPlaceholder';

const Businesses = ({ uid }) => {
  const [businesses, setBusinesses] = useState([]);
  const [activeBusiness, setActiveBusiness] = useState({});

  const { loading: businessesAreLoading } = useQuery(FETCH_BUSINESSES, {
    variables: { where: { users: { id: uid } } },
    onCompleted: ({ businesses: _businesses }) => {
      const sorted = sortBy(_businesses, 'name');
      setBusinesses(sorted);
    },
  });

  const refreshContent = (updated) => {
    const newActive = { ...activeBusiness, ...updated };
    const newAvailable = businesses.map((obj) => (obj.id === newActive.id ? newActive : obj));
    setActiveBusiness(newActive);
    setBusinesses(sortBy(newAvailable, 'name'));
  };

  const lastUpdated = activeBusiness && new Date(activeBusiness.updated_at).toLocaleDateString();

  useEffect(() => {
    if (businesses.length === 1 && !activeBusiness.id) {
      setActiveBusiness(businesses[0]);
    }
  }, [businesses, activeBusiness.id]);

  if (businessesAreLoading) {
    return <ContentLoader />;
  }

  return (
    <Col lg={{ span: 10, offset: 1 }}>
      <div className="mb-3 ml-1">
        <h1>Content</h1>
        <span className="text-gray">Your collections</span>
      </div>
      <Container>
        {businesses.length > 0 ? (
          <div>
            <Row xs="1" md="2" xl="3">
              {businesses &&
                businesses.map((business) => (
                  <Col key={business.name} className="mb-3">
                    <Card
                      border={activeBusiness.id === business.id ? 'primary' : null}
                      className={activeBusiness.id === business.id ? 'active' : 'clickable'}
                      onClick={() => setActiveBusiness(business)}
                    >
                      {business.logo && (
                        <Card.Img
                          variant="top"
                          style={{ maxHeight: '15vh', objectFit: 'cover' }}
                          src={
                            process.env.NODE_ENV !== 'production'
                              ? process.env.API_URL + business.logo.url
                              : business.logo.url
                          }
                        />
                      )}
                      <Card.Body>
                        <Card.Text>{business.name}</Card.Text>
                        <Card.Text as="small">
                          Type: <i>Business</i>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>

            <div className="mt-3">
              <h2>Editor</h2>
              {activeBusiness && activeBusiness.id ? (
                <StyledContentWrapper $withBorder $marginTop>
                  <StyledContentBanner>
                    <StyledMetaContainer>
                      <Badge variant="primary" pill>
                        {activeBusiness.name}
                      </Badge>
                      <small className="text-gray">
                        <span>Last edited {lastUpdated}</span>
                      </small>
                    </StyledMetaContainer>
                  </StyledContentBanner>

                  {activeBusiness.__typename === 'Business' && (
                    <BusinessForm business={activeBusiness} onUpdateComplete={refreshContent} />
                  )}
                </StyledContentWrapper>
              ) : (
                <MissingPlaceholder icon="edit" text="Select a content from above to start editing.">
                  <ContentLoader animate={false} />
                </MissingPlaceholder>
              )}
            </div>
          </div>
        ) : (
          <MissingPlaceholder icon="frown" text="You have not been assigned to any content yet." />
        )}
      </Container>
    </Col>
  );
};

export default Businesses;
