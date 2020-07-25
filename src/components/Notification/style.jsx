import styled from 'styled-components';
import { Toast } from 'react-bootstrap';

export const StyledToast = styled(Toast)`
  position: absolute;
  left: 1.5rem;
  top: 1.5rem;
  min-width: 192px;
  z-index: 1;

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
  font-weight: 500;
`;
