import styled from 'styled-components';
import { Toast } from 'react-bootstrap';

export const StyledToast = styled(Toast)`
  position: fixed;
  top: 1rem;
  left: 50%;
  margin-left: -112.5;
  min-width: 225;
  z-index: 1;
  background-color: var(--gray-light);

  ${(props) =>
    props.$type === 'success' &&
    `
    background-color: var(--success);
  `};

  ${(props) =>
    props.$type === 'error' &&
    `
    background-color: var(--danger);
  `};
`;

export const StyledToastHeader = styled(Toast.Header)`
  background-clip: unset;
  background-color: inherit;
  color: var(--white);
`;
