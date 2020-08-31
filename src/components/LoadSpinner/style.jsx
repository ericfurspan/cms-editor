import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

export const StyledSpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -1rem;
  margin-top: -1rem;

  ${(props) =>
    props.inline &&
    `
    position: absolute;
    top: 0px;
    margin-top: 2rem;
    margin-left: -1rem;
  `}
`;

export const StyledSpinner = styled(Spinner)`
  width: 2rem;
  height: 2rem;

  color: var(--info-dark);
`;
