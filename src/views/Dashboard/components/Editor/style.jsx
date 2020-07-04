import styled from 'styled-components';
import { Badge, Row } from 'react-bootstrap';

export const StyledHeaderRow = styled(Row)`
  padding: 1rem 0 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLastUpdated = styled.pre`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin: 0;

  svg {
    margin-right: 0.375rem;
    color: var(--dark);
  }
`;

export const StyledBadge = styled(Badge)`
  background-color: var(--dark);
  color: var(--white);
  font-weight: 300;
  margin: 0.25rem 0 0 1rem;
  letter-spacing: 0.5px;
`;
