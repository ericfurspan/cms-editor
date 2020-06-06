import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { READ_USER, LOGIN, IS_LOGGED_IN } from '../../graphql/user';
import { LoginForm } from './components';
import { PublicHeader, PublicFooter } from '../../components';

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
      cache.writeQuery({ query: READ_USER, data: { user } });
    },
  });

  return (
    <>
      <PublicHeader />
      <Container className="mt-4">
        <Row className="m-1">
          <Col lg={{ span: 4, offset: 4 }}>
            <h2 className="mb-2">Login</h2>
            <LoginForm login={login} />
          </Col>
        </Row>
      </Container>
      <PublicFooter />
    </>
  );
};

export default LoginPage;
