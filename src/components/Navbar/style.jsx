import styled from 'styled-components';
import { Col, Nav, Button } from 'react-bootstrap';
import BREAKPOINTS from '../../utils/breakpoints';

export const StyledSidebar = styled(Col)`
  height: 100vh;
  padding-top: 52px;
  background-color: var(${(props) => (props.theme.mode === 'light' ? '--white' : '--primary-dark')});
  border-right: ${(props) => (props.theme.mode === 'light' ? '1px solid var(--secondary)' : '0')};

  ${(props) =>
    props.$isExpanded
      ? `
      z-index: 1;
      transition: top 0.2s ease;
      max-width: 240px;
      text-align: start;
      position: relative;

    @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
      max-width: 100%;
      text-align: start;
      position: absolute;
      padding-top: 6rem;
    }
  `
      : `
      max-width: 72px;
      text-align: center;
      position: relative;

      @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
        max-width: 100%;
        position: absolute;
        background: transparent;
      }
  `}
`;

export const StyledNavHeader = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 28px;
  height: 52px;
  z-index: 2;
  background-color: var(--primary);

  & button > svg,
  a > svg,
  #brand-name {
    color: var(--gray);
  }

  ${(props) =>
    props.$isExpanded &&
    `
    @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
      position: relative;
    }
  `}
`;

export const StyledMenuButton = styled(Button)`
  box-shadow: none !important;
  z-index: 2;
  font-size: 1.25rem;
`;

export const StyledNavToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 14px;
  font-weight: 300;
  font-size: 0.875rem;

  #brand-name {
    position: absolute;
    left: 64px;
    font-weight: 500;
  }
`;

export const StyledNav = styled(Nav)`
  padding-top: 0.75rem;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    display: none;
  }

  ${(props) =>
    props.$isExpanded &&
    `
    border-top: 1px solid rgb(0 0 0 / 10%);

    @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
      align-items: center;
      font-size: 1.25rem;
      display: initial;
      padding-top: 0;
    }
  `}
`;

export const StyledNavItem = styled(Nav.Item)`
  width: 100%;
  cursor: pointer;
`;

export const StyledNavLink = styled(Nav.Link)`
  ${(props) => `
  
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 1rem;
    border-radius: inherit;
    color: var(--gray);
    position: relative;

    &.active {
      color: var(${props.theme.mode === 'light' ? '--primary' : '--gray-light'});
      background-color: var(${props.theme.mode === 'light' ? '--white-darker' : '--primary'});
    
      &:before {
        content: ' ';
        position: absolute;
        display: block;
        transform-origin: center center;
        height: 100%;
        transform: scaleY(1);
        width: 100%;
        left: 0;
        top: 0;
        box-shadow: inset 3px 0 0 0 var(--brand);
        pointer-events: none;
      }
    }
    &:hover:not(.active) {
      color: var(
        ${props.theme.mode === 'light' ? '--primary' : '--gray-light'}
      ) !important;
    }

    span {
      display: none;
    }

    ${
      props.$isExpanded
        ? `
      flex-direction: row;
      padding-left: 28px;

      span {
        display: initial;
        font-size: 14px;
      }
      svg {
        margin-right: 1rem;
      }
      `
        : `
      span {
        font-size: 10.5px;
        letter-spacing: 0.5px;
      }
      svg {
        margin-bottom: 0.375rem;
      }
      `
    };
  `}
`;
