import styled from 'styled-components';
import { Col, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BREAKPOINTS from '../../../../utils/breakpoints';

export const StyledSidebar = styled(Col)`
  background-color: var(--dark);
  color: var(--white-50);
  z-index: 1;
  height: 100%;

  ${(props) =>
    props.$isExpanded
      ? `
      left: 0px;
      max-width: 208px;
      text-align: start;
      position: relative;

    @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
      left: 0px;
      max-width: 208px;
      text-align: start;
      position: absolute;
    }
    @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
      left: 0px;
      max-width: 208px;
      text-align: start;
      position: absolute;
    }
  `
      : `
      left: 0px;
      max-width: 68px;
      text-align: center;
      position: relative;

      @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
        left: 0px;
        max-width: 68px;
        text-align: center;
        position: relative;
      }

      @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
        left: -208px;
        position: absolute;
      }
  `}
`;

export const StyledMenuBtn = styled(Button)`
  position: absolute;
  left: 6px;
  top: 12px;
  width: auto;
  height: auto;
  display: none;
  z-index: 1;
  color: var(--gray);

  & svg {
    font-size: 21px;
    vertical-align: middle;
  }

  ${(props) =>
    props.$isExpanded
      ? `
      @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
        display: block;
        left: 208px;
      }
    `
      : `
      @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
        display: block;
      }
  `}
`;

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
`;
