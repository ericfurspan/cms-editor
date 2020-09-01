import React from 'react';
import { StyledSpinnerContainer, StyledSpinner } from './style';

const LoadSpinner = ({ inline }) => (
  <StyledSpinnerContainer inline={inline}>
    <StyledSpinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </StyledSpinner>
  </StyledSpinnerContainer>
);

export default LoadSpinner;
