import styled from 'styled-components';
import { Row, Tab, Col } from 'react-bootstrap';

export const StyledContainerRow = styled(Row)`
  height: 100vh;
  overflow: hidden;
`;

export const StyledContainerColumn = styled(Col)`
  background-color: var(--light);
  height: 100vh;
`;

export const StyledHeaderRow = styled(Row)`
  margin: 0 2rem;
  height: 56px;
  border-bottom: 1px solid var(--gray-lighter);
  align-items: center;
  justify-content: space-between;
`;

export const StyledTabContent = styled(Tab.Content)`
  height: 100%;
  overflow: auto;
  padding-bottom: 4rem;
`;
