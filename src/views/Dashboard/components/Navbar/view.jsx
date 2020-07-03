import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from 'beautiful-react-hooks';
import BREAKPOINTS from '../../../../utils/breakpoints';
import { navigationItems } from './config';
import {
  animationVariants,
  useAnimatedSidebar,
  useAnimatedHamburger,
} from './animation';
import {
  AnimatedStyledMenuBtn,
  AnimatedStyledSidebar,
  StyledLogo,
  StyledNav,
  StyledNavItem,
  StyledNavLink,
  StyledNavIcon,
  StyledExpander,
} from './style';

const Navbar = ({ onSelectNavLink, activeKey }) => {
  const [isExpanded, setExpanded] = useState(false);
  const isSmall = useMediaQuery(`(max-width: ${BREAKPOINTS.SMALL}`);
  const isMedium = useMediaQuery(`(min-width: ${BREAKPOINTS.MEDIUM}`);

  const selectHandler = (key, e) => {
    setExpanded(false);
    onSelectNavLink(key, e);
  };

  return (
    <>
      <AnimatedStyledMenuBtn
        forwardedAs={motion.div}
        variants={animationVariants.hamburger}
        animate={useAnimatedHamburger(isExpanded, isSmall)}
        onClick={() => setExpanded(!isExpanded)}
        initial={false}
        variant="transparent"
      >
        <FontAwesomeIcon icon={['fas', 'bars']} />
      </AnimatedStyledMenuBtn>

      <AnimatedStyledSidebar
        forwardedAs={motion.div}
        variants={animationVariants.sidebar}
        animate={useAnimatedSidebar(isExpanded, isMedium, isSmall)}
        initial={false}
        transition={{ type: 'tween' }}
      >
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
          {!isSmall && (
            <StyledExpander
              $isExpanded={isExpanded}
              onClick={() => setExpanded(!isExpanded)}
            >
              <FontAwesomeIcon
                icon={['fas', isExpanded ? 'chevron-left' : 'chevron-right']}
              />
            </StyledExpander>
          )}
        </StyledNav>
      </AnimatedStyledSidebar>
    </>
  );
};

export default Navbar;
