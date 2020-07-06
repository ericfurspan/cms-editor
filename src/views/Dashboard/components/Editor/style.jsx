import styled from 'styled-components';
import { Badge, Row } from 'react-bootstrap';

export const StyledHeaderRow = styled(Row)`
  padding: 1rem 0 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLastUpdated = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin: 0;
  font-size: 1.125rem;
  font-family: SFMono-Regular, monospace;

  svg {
    margin-right: 0.375rem;
    color: var(--blue-darker);
    vertical-align: middle;
  }
`;

export const StyledBadge = styled(Badge)`
  background-color: var(--blue-darker);
  color: var(--white);
  font-weight: 300;
  margin: 0 0 0.25rem 0;
  letter-spacing: 0.5px;
`;
