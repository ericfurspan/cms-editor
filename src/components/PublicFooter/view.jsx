import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = { nav: { fontSize: '0.875rem', margin: '0 1.5rem' } };

const PublicFooter = () => (
  <Navbar fixed="bottom" bg="dark" style={styles.nav}>
    <Nav>
      <a href="mailto:admin@quanda.dev">
        <FontAwesomeIcon size="xs" icon={[ 'fas', 'envelope' ]} />
        <code>&nbsp;Need Help?</code>
      </a>
    </Nav>
    <Nav className="ml-auto">
      <Link to="privacy">
        <code>Privacy Policy</code>
      </Link>
      <Link to="terms" className="ml-1">
        <code>Terms of Service</code>
      </Link>
    </Nav>
  </Navbar>
);

export default PublicFooter;
