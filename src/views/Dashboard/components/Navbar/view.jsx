import React from 'react';
import { Col, Nav, Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const styles = {
  wrapper: {
    borderRight: '1px solid var(--lighter)',
    backgroundColor: 'var(--dark)',
    minHeight: '100vh',
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '72px',
    borderBottom: '1px solid var(--gray)',
  },
  centered: { textAlign: 'center' },
};

const navigationItems = [
  {
    eventKey: 'home',
    faIconName: 'home',
    tooltipText: 'Home',
  },
  {
    eventKey: 'editor',
    faIconName: 'pencil-alt',
    tooltipText: 'Editor',
  },
  {
    eventKey: 'users',
    faIconName: 'users',
    tooltipText: 'Users',
  },
];

const Navbar = ({ onSelectNavLink }) => (
  <Col xs="2" lg="1" style={styles.wrapper}>
    <div style={styles.logo}>
      <FontAwesomeIcon
        color="var(--warning)"
        icon={['fas', 'tools']}
        size="lg"
      />
    </div>
    <Nav className="flex-column">
      {navigationItems.map((navItem, i) => (
        <OverlayTrigger
          key={navItem.eventKey}
          placement="right"
          overlay={<Tooltip>{navItem.tooltipText}</Tooltip>}
        >
          <Nav.Item style={styles.centered}>
            <Nav.Link
              eventKey={navItem.eventKey}
              className={
                i === 0 ? 'mt-2 mb-2 text-white-50' : 'mb-2 text-white-50'
              }
              onSelect={onSelectNavLink}
            >
              <FontAwesomeIcon icon={['fas', navItem.faIconName]} size="lg" />
            </Nav.Link>
          </Nav.Item>
        </OverlayTrigger>
      ))}
      <Dropdown style={styles.centered} className="mt-8 pointer">
        <Dropdown.Toggle id="user-dropdown" as="a">
          <FontAwesomeIcon
            icon={['fas', 'user-circle']}
            size="2x"
            color="var(--white-50)"
          />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/logout">
            Sign out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  </Col>
);

export default Navbar;
