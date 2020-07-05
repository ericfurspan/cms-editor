import styled from 'styled-components';
import { Row, Tab, Col } from 'react-bootstrap';
import BREAKPOINTS from '../../utils/breakpoints';

export const StyledContainerRow = styled(Row)`
  height: 100%;
  overflow: hidden;
`;

export const StyledContainerColumn = styled(Col)`
  background-color: var(--light);
  height: 100%;
`;

export const StyledHeaderRow = styled(Row)`
  width: 100%;
  height: 56px;
  padding: 0 1rem;
  margin: 0;
  border-bottom: 1px solid var(--gray-lighter);
  align-items: center;
  justify-content: flex-start;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    justify-content: flex-end;
  }
`;

export const StyledTabContent = styled(Tab.Content)`
  height: 100%;
  overflow: auto;
  padding-bottom: 4rem;
`;
