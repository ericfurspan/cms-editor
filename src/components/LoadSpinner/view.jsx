import React from 'react';
import { StyledSpinnerContainer, StyledSpinner } from './style';

const LoadSpinner = ({ inline }) => (
  <StyledSpinnerContainer inline={inline}>
    <StyledSpinner animation="border" />
  </StyledSpinnerContainer>
);

export default LoadSpinner;
