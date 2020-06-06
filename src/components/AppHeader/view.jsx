import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrandLogo } from '..';

const AppHeader = () => (
  <Navbar bg="dark" className="p-1 pl-2">
    <BrandLogo withTitle />
    <Button variant="link" as={Link} to="/logout" className="text-white">
      <FontAwesomeIcon
        size="1x"
        icon={['fas', 'sign-out-alt']}
        color="var(--gray-light)"
      />
    </Button>
  </Navbar>
);

export default AppHeader;
