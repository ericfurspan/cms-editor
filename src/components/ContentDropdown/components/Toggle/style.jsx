import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const StyledToggleButton = styled(Button)`
  ${(props) => !props.$hasMultiple && 'cursor: default !important'}
`;
