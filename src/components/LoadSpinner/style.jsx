import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

export const StyledSpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
`;

export const StyledSpinner = styled(Spinner)`
  width: 4rem;
  height: 4rem;

  color: var(--blue);
`;
