import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigationItems } from './config';
import { animationVariants } from './animation';
import {
  StyledMenuBtn,
  StyledSidebar,
  StyledSwipeRegion,
  StyledHeader,
  StyledNav,
  StyledNavItem,
  StyledNavLink,
  StyledNavIcon,
  StyledUserDropdown,
} from './style';

const Navbar = ({ onSelectNavLink, activeKey, activeContentName }) => {
  const [isExpanded, setExpanded] = useState(false);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setExpanded(false),
    onSwipedRight: () => setExpanded(true),
    preventDefaultTouchmoveEvent: true,
  });

  const selectNavLinkHandler = (key, e) => {
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
        <FontAwesomeIcon icon={['fas', isExpanded ? 'times' : 'bars']} />
      </StyledMenuBtn>

      <StyledSidebar $isExpanded={isExpanded}>
        <StyledHeader $isExpanded={isExpanded}>
          <FontAwesomeIcon icon={['fas', 'tools']} />
          <span>{activeContentName}</span>
        </StyledHeader>

        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <StyledSwipeRegion {...swipeHandlers} $isExpanded={isExpanded} />
        <StyledNav role="navigation" $isExpanded={isExpanded} variant="pills">
          {navigationItems.map((navItem) => (
            <StyledNavItem key={navItem.eventKey}>
              <StyledNavLink
                eventKey={navItem.eventKey}
                onSelect={selectNavLinkHandler}
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
              <FontAwesomeIcon icon={['fas', 'user-circle']} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/logout" id="drop-item-signout">
                Sign out
              </Dropdown.Item>
            </Dropdown.Menu>
          </StyledUserDropdown>
        </StyledNav>
      </StyledSidebar>
    </>
  );
};

export default Navbar;
