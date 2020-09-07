import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import startCase from 'lodash/startCase';
import NetlifyDeploySvg from '../../../../static/img/deploy-netlify.svg';
import { MissingPlaceholder, ContentLoader, LoadSpinner } from '../../../../components';
import { FETCH_APPLICATIONS } from '../../../../graphql';

const Apps = ({ uid, changePane }) => {
  const [applications, setApplications] = useState([]);
  const [isBuildStarting, setIsBuildStarting] = useState(false);

  const { loading: applicationsAreLoading } = useQuery(FETCH_APPLICATIONS, {
    variables: { where: { users: { id: uid } } },
    onCompleted: ({ applications: apps }) => {
      setApplications(apps);
    },
  });

  const tryDeploy = (webhookUrl) => {
    setIsBuildStarting(true);
    fetch(webhookUrl, { method: 'POST' });
    setTimeout(() => {
      setIsBuildStarting(false);
      window.location.reload();
    }, 5000);
  };

  return applicationsAreLoading ? (
    <ContentLoader />
  ) : (
    <Col lg={{ span: 10, offset: 1 }}>
      <div className="mb-3 ml-1">
        <h1>Apps</h1>
        <span className="text-gray">Manage your applications</span>
      </div>
      <Container>
        {applications ? (
          <Row xs="1" md="2" xl="3">
            {applications.map((app) => (
              <Col key={app.name} className="mb-3">
                <Card>
                  <Card.Header className="text-center position-relative">
                    {app.deploy_status_url ? (
                      <Card.Link href={app.deploy_panel_url}>
                        {isBuildStarting && <LoadSpinner inline />}
                        <img src={app.deploy_status_url} alt="Status badge" />
                      </Card.Link>
                    ) : (
                      <Card.Text>No deployment status found</Card.Text>
                    )}
                  </Card.Header>

                  <Card.Body>
                    <Card.Title>{app.name}</Card.Title>
                    {app.users.length > 0 && (
                      <Card.Text>
                        Admins:&nbsp;
                        <i>{app.users.map((adminUser) => startCase(adminUser.username)).join(', ')}</i>
                      </Card.Text>
                    )}
                    {app.business ? (
                      <Card.Text as="span">
                        Content:&nbsp;
                        <Card.Link href="#" onClick={() => changePane('content')}>
                          <i>{app.business.name}</i>
                        </Card.Link>
                      </Card.Text>
                    ) : (
                      <Alert variant="warning">This app is not assigned to any content.</Alert>
                    )}
                  </Card.Body>
                  {app.deploy_hook_url && (
                    <div className="pb-2">
                      <Button
                        variant="transparent"
                        onClick={() => tryDeploy(app.deploy_hook_url)}
                        block
                        className="w-auto m-auto"
                      >
                        <img src={NetlifyDeploySvg} alt="Netlify deploy" />
                      </Button>
                    </div>
                  )}
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <MissingPlaceholder icon="rocket" text="You have not been assigned to any applications yet." />
        )}
      </Container>
    </Col>
  );
};

export default Apps;
