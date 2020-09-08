import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Container, Row, Col, Card, Button, Alert, Badge } from 'react-bootstrap';
import startCase from 'lodash/startCase';
import NetlifyDeploySvg from '../../../../static/img/deploy-netlify.svg';
import { MissingPlaceholder, ContentLoader, LoadSpinner, Alert as Swal } from '../../../../components';
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

  const tryDeploy = (deployHookUrl) => {
    setIsBuildStarting(true);
    fetch(deployHookUrl, { method: 'POST' });
    setTimeout(() => {
      setIsBuildStarting(false);
      window.location.reload();
    }, 5000);
  };

  const handleTryDeploy = (deployHookUrl) => {
    Swal('confirm', {
      title: 'Please Confirm',
      message: `
        This will start a new build for your app.
        Builds typically take between 5-20 minutes to complete.
      `,
      footer: `New builds are useful after modifying some application content.`,
      confirmBtnText: 'Yes, start build',
      preConfirmCallback: () => tryDeploy(deployHookUrl),
    });
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
        {applications.length > 0 ? (
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
                    <Card.Title as="h2">{app.name}</Card.Title>
                    {app.users.length > 0 && (
                      <div className="mt-3">
                        <Card.Text as="label">Admin Users</Card.Text>
                        <div className="flex justify-content-center">
                          {app.users.map((adminUser) => (
                            <Badge variant="secondary" className="mr-1" pill key={adminUser.id}>
                              {startCase(adminUser.username)}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-3">
                      <Card.Text as="label">Related Content</Card.Text>
                      <br />
                      {app.business &&
                      app.business.users &&
                      app.business.users.find((user) => user.id === uid) ? (
                        <Card.Link href="#" onClick={() => changePane('content')}>
                          {app.business.name}
                        </Card.Link>
                      ) : (
                        <Alert variant="warning">
                          You have not been assigned to any content for <i>{app.name}</i>.
                        </Alert>
                      )}
                    </div>
                  </Card.Body>
                  {app.deploy_hook_url && (
                    <Card.Footer className="pb-2">
                      <Button
                        variant="transparent"
                        onClick={() => handleTryDeploy(app.deploy_hook_url)}
                        block
                        className="w-auto m-auto"
                      >
                        <img src={NetlifyDeploySvg} alt="Netlify deploy" />
                      </Button>
                    </Card.Footer>
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
