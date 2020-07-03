import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const StyledToggleButton = styled(Button)`
  color: var(--gray-dark);
  margin: 0 0.5rem;

  ${(props) => !props.$hasMultipleItems && 'cursor: default !important'};

  & svg {
    vertical-align: sub;
  }
`;
