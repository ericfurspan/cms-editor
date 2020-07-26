import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import BREAKPOINTS from '../../../../utils/breakpoints';

export const StyledToggleButton = styled(Button).attrs((props) => ({
  variant: props.theme.mode === 'light' ? 'outline-primary' : 'primary',
}))`
  h2 {
    font-size: 0.875rem;
    margin: 0;
  }

  ${(props) => !props.$hasMultipleItems && 'cursor: default !important'};

  & svg {
    vertical-align: sub;
  }

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    background-color: transparent;
    border: 0;

    h2 {
      color: var(--white);
    }
  }
`;
