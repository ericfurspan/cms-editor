import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const StyledToggleButton = styled(Button)`
  h1 {
    font-size: 0.875rem;
    margin: 0;
  }

  ${(props) => !props.$hasMultipleItems && 'cursor: default !important'};

  & svg {
    vertical-align: sub;
  }
`;
