import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledThemeToggleBtn = styled(Button)`
  position: fixed;
  right: 1rem;
  top: 1rem;
  z-index: 1;
  background-color: var(
    ${(props) => (props.theme.mode === 'light' ? '--primary-dark' : '--white')}
  ) !important;
  color: var(
    ${(props) => (props.theme.mode === 'light' ? '--white' : '--primary')}
  );
`;

export const StyledThemeToggleIcon = styled(FontAwesomeIcon)``;
