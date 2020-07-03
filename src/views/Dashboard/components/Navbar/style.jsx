import styled from 'styled-components';
import { Col, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

export const AnimatedStyledSidebar = motion.custom(styled(Col)`
  background-color: var(--dark);
  max-width: 68px;
  color: var(--white-50);
  z-index: 1;
  height: 100%;
  font-size: 1rem;
`);

export const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;

  & svg {
    color: var(--warning);
    font-size: 18px;
  }
`;

export const StyledNav = styled(Nav)`
  border-top: 1px solid var(--darkest);
  padding-top: 1rem;
  flex-direction: column;
`;

export const StyledNavItem = styled(Nav.Item)`
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const StyledNavLink = styled(Nav.Link)`
  display: flex;
  align-items: center;
  color: var(--white-50);
  margin: auto;
  padding: 0.75rem 1rem;
  font-weight: 500;

  ${(props) => !props.$isExpanded && `width: fit-content`};
  ${(props) => props.$isActiveLink && `color: var(--info)`};
`;

export const StyledNavIcon = styled(FontAwesomeIcon)`
  width: 1em;
  height: 1em;
  margin-right: ${(props) => (props.$isExpanded ? '1rem' : 'auto')};
`;

export const StyledExpander = styled.div`
  position: absolute;
  bottom: 24px;
  width: 100%;
  cursor: pointer;

  ${(props) =>
    props.$isExpanded &&
    `
    text-align: right;
    padding-right: 2rem;
  `}

  & svg {
    font-size: 18px;
  }
`;

export const AnimatedStyledMenuBtn = motion.custom(styled(Button)`
  height: fit-content;
  z-index: 1;
  color: var(--gray);
  margin-top: 12px;

  & svg {
    font-size: 21px;
    vertical-align: middle;
  }
`);
