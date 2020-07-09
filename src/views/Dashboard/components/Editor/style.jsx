import styled from 'styled-components';
import { Badge, Row } from 'react-bootstrap';
import BREAKPOINTS from '../../../../utils/breakpoints';

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
  align-items: flex-end;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    width: 100%;
    margin-top: 2rem;
    align-items: flex-start;
  }
`;

export const StyledBadge = styled(Badge)`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.fg || 'initial'};
  margin: 0.375rem 0;
  font-size: 0.875rem;
  font-weight: 400;
  padding: 0.375em 0.75em;
`;
