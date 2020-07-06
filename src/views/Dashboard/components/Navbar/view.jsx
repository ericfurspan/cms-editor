import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigationItems } from './config';
import { animationVariants } from './animation';
import {
  StyledMenuBtn,
  StyledSidebar,
  StyledLogo,
  StyledNav,
  StyledNavItem,
  StyledNavLink,
  StyledNavIcon,
  StyledExpander,
  StyledUserDropdown,
} from './style';

const Navbar = ({ onSelectNavLink, activeKey }) => {
  const [isExpanded, setExpanded] = useState(false);

  const selectHandler = (key, e) => {
    setExpanded(false);
    onSelectNavLink(key, e);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setExpanded(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <>
      <StyledMenuBtn
        onClick={() => setExpanded(!isExpanded)}
        variant="transparent"
        $isExpanded={isExpanded}
      >
        <FontAwesomeIcon icon={['fas', 'bars']} />
      </StyledMenuBtn>

      <StyledSidebar $isExpanded={isExpanded}>
        <StyledLogo $isExpanded={isExpanded}>
          <FontAwesomeIcon icon={['fas', 'tools']} />
          <span>CMS</span>
        </StyledLogo>

        <StyledNav role="navigation" $isExpanded={isExpanded}>
          {navigationItems.map((navItem) => (
            <StyledNavItem key={navItem.eventKey}>
              <StyledNavLink
                eventKey={navItem.eventKey}
                onSelect={selectHandler}
                $isExpanded={isExpanded}
                $isActiveLink={activeKey === navItem.eventKey}
              >
                <StyledNavIcon
                  icon={['fas', navItem.faIconName]}
                  $isExpanded={isExpanded}
                  fixedWidth
                />
                <motion.span
                  variants={animationVariants.sidebarItem}
                  animate={isExpanded ? 'expanded' : 'collapsed'}
                >
                  {navItem.text}
                </motion.span>
              </StyledNavLink>
            </StyledNavItem>
          ))}
          <StyledUserDropdown drop="up" $isExpanded={isExpanded}>
            <Dropdown.Toggle id="profile-toggle" variant="transparent">
              <FontAwesomeIcon
                icon={['fas', 'user-circle']}
                color="var(--white-50)"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/logout" id="drop-item-signout">
                Sign out
              </Dropdown.Item>
            </Dropdown.Menu>
          </StyledUserDropdown>
          <StyledExpander
            $isExpanded={isExpanded}
            onClick={() => setExpanded(!isExpanded)}
          >
            <FontAwesomeIcon
              icon={['fas', isExpanded ? 'chevron-left' : 'chevron-right']}
            />
          </StyledExpander>
        </StyledNav>
      </StyledSidebar>
    </>
  );
};

export default Navbar;
