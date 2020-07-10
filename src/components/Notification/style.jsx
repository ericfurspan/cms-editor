import styled from 'styled-components';
import { Toast } from 'react-bootstrap';

export const StyledToast = styled(Toast)`
  position: fixed;
  top: 10%;
  left: 50%;
  min-width: 128px;
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
