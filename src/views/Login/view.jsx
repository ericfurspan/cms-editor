import React from 'react';
import { Container, Card, Row, Col, Alert, Accordion, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { USER_ID, LOGIN, IS_LOGGED_IN } from '../../graphql/user';
import { LoginForm } from './components';

const LoginPage = () => {
  const [login] = useMutation(LOGIN, {
    update(
      cache,
      {
        data: {
          login: { user, jwt },
        },
      }
    ) {
      localStorage.setItem('token', jwt);
      localStorage.setItem('uid', user.id);
      cache.writeQuery({ query: IS_LOGGED_IN, data: { isLoggedIn: true } });
      cache.writeQuery({ query: USER_ID, data: { uid: user.id } });
    },
  });

  return (
    <Container className="mt-5">
      <Row>
        <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }}>
          <Card className="p-4">
            <h3 className="mb-4 text-center">Login to CMS</h3>
            <LoginForm login={login} />
          </Card>

          <Accordion className="text-center mt-3">
            <Accordion.Toggle as={Button} variant="secondary" eventKey="0">
              Sandbox access
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Alert variant="warning" className="mt-2">
                <b>Sandbox credentials</b>
                <div className="font-italic">playground / playground0env</div>
              </Alert>
            </Accordion.Collapse>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
