import styled from 'styled-components';
import { Badge, Row } from 'react-bootstrap';

export const StyledHeaderRow = styled(Row)`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 1rem;

  svg {
    margin-right: 0.375rem;
    margin-left: 0.2rem;
  }
`;

export const StyledMetadata = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  min-height: 48px;
`;

export const StyledContentHeader = styled(Badge)`
  background-color: var(
    ${(props) =>
      props.theme.mode === 'dark' ? '--secondary' : '--primary-light'}
  );
  color: var(
    ${(props) => (props.theme.mode === 'dark' ? '--primary-light' : '--white')}
  );
`;
