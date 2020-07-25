import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import BREAKPOINTS from '../../../../utils/breakpoints';

export const StyledToggleButton = styled(Button).attrs((props) => ({
  variant: props.theme.mode === 'light' ? 'outline-primary' : 'primary',
}))`
  h1 {
    font-size: 0.875rem;
    margin: 0;

    @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
      color: var(--white);
    }
  }

  ${(props) => !props.$hasMultipleItems && 'cursor: default !important'};

  & svg {
    vertical-align: sub;
  }
`;
