import styled from 'styled-components';
import { Col, Nav, Button, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BREAKPOINTS from '../../../../utils/breakpoints';

export const StyledSidebar = styled(Col)`
  background-color: var(--primary-dark);
  color: var(--gray);
  z-index: 1;
  height: 100%;
  transition: all 0.4s ease;

  ${(props) =>
    props.$isExpanded
      ? `
      left: 0px;
      max-width: 224px;
      text-align: start;
      position: relative;

    @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
      left: 0px;
      max-width: 224px;
      text-align: start;
      position: absolute;
    }
    @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
      left: 0px;
      max-width: 100%;
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
        left: -100%;
        position: absolute;
      }
  `}
`;

export const StyledSwipeRegion = styled.div`
  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    position: fixed;
    left: 0;
    height: 100%;
    width: ${(props) => (props.$isExpanded ? 'inherit' : '4%')};
    z-index: -1;
  }
`;

export const StyledMenuBtn = styled(Button)`
  position: absolute;
  top: 7px;
  left: 7px;
  width: 42px;
  height: 42px;
  display: none;
  z-index: 2;
  color: var(--white) !important;

  & svg {
    font-size: 21px;
    vertical-align: sub;
  }

  ${(props) =>
    props.$isExpanded
      ? `  
      @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
        display: block;
        top: 8px;
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
  color: var(--white);
  font-weight: 500;
  letter-spacing: 1.2px;
  padding-right: 0;

  svg {
    color: var(--warning);
    font-size: 18px;
  }

  span {
    display: none;
  }

  ${(props) =>
    props.$isExpanded &&
    `
    @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
      justify-content: flex-end;
      padding-right: 1rem;

      span {
        display: block;
        margin-left: 0.5rem;
      }
    }
  `}
`;

export const StyledNav = styled(Nav)`
  border-top: 1px solid var(--primary-dark);
  padding-top: 1rem;
  flex-direction: column;

  ${(props) =>
    props.$isExpanded &&
    `
    @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
      align-items: center;
      padding-top: 4rem;
      font-size: 1.25rem;
    }
  `}
`;

export const StyledNavItem = styled(Nav.Item)`
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const StyledNavLink = styled(Nav.Link)`
  display: flex;
  align-items: center;
  color: var(--gray);
  margin: auto;
  padding: 0.75rem 1rem;

  ${(props) => !props.$isExpanded && `width: fit-content`};
  ${(props) => props.$isActiveLink && `color: var(--white)`};
`;

export const StyledNavIcon = styled(FontAwesomeIcon)`
  width: 1em;
  height: 1em;
  margin-right: ${(props) => (props.$isExpanded ? '1rem' : 'auto')};
`;

export const StyledUserDropdown = styled(Dropdown)`
  position: absolute;
  bottom: 2rem;
  width: 100%;

  svg {
    font-size: 1.5rem;
  }

  ${(props) =>
    props.$isExpanded &&
    `
    text-align: center;


    @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
      svg {
        font-size: 2rem;
      }
    }
  `}
`;
