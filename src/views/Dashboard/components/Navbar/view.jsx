import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
} from './style';

const Navbar = ({ onSelectNavLink, activeKey }) => {
  const [isExpanded, setExpanded] = useState(false);

  const selectHandler = (key, e) => {
    setExpanded(false);
    onSelectNavLink(key, e);
  };

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
        <StyledLogo>
          <FontAwesomeIcon icon={['fas', 'tools']} />
        </StyledLogo>

        <StyledNav role="navigation">
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
