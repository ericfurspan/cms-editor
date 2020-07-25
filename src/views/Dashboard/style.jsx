import styled from 'styled-components';
import { Row, Tab, Col } from 'react-bootstrap';
import BREAKPOINTS from '../../utils/breakpoints';

export const StyledContainerRow = styled(Row)`
  height: 100%;
  overflow: hidden;
`;

export const StyledContainerColumn = styled(Col)`
  height: 100%;
`;

export const StyledHeaderRow = styled(Row)`
  width: 100%;
  height: 56px;
  padding: 0 0.75rem;
  margin: 0;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid
    var(
      ${(props) => (props.theme.mode === 'light' ? '--secondary' : '--primary')}
    );

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    justify-content: center;
    background-color: var(--primary-dark);
  }
`;

export const StyledTabContent = styled(Tab.Content)`
  height: 100%;
  overflow: auto;
  padding-bottom: 4rem;
`;
