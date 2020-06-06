import React from 'react';
import { Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = ({ style }) => (
  <Col md="2" className="p-0 bg-light" style={style}>
    <Nav className="flex-md-column">
      <Nav.Item>
        <Nav.Link eventKey="home" className="p-1 rounded-0 text-secondary">
          <FontAwesomeIcon size="1x" icon={['fas', 'home']} />
          <span className="ml-1">Home</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="editor" className="p-1 rounded-0 text-secondary">
          <FontAwesomeIcon size="1x" icon={['fas', 'pencil-alt']} />
          <span className="ml-1">Editor</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="users" className="p-1 rounded-0 text-secondary">
          <FontAwesomeIcon size="1x" icon={['fas', 'users']} />
          <span className="ml-1">Users</span>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Col>
);

export default Navbar;
