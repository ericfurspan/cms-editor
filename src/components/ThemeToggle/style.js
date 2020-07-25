import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BREAKPOINTS from '../../utils/breakpoints';

export const StyledThemeToggleBtn = styled(Button)`
  position: fixed;
  right: 12px;
  top: 14px;
  z-index: 1;

  svg {
    color: var(
      ${(props) => (props.theme.mode === 'light' ? '--primary' : '--white')}
    );
  }

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    svg {
      color: var(--white);
    }
  }
`;

export const StyledThemeToggleIcon = styled(FontAwesomeIcon)``;
