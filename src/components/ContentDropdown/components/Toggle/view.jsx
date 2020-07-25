import React from 'react';
import { StyledToggleButton } from './style';

const Toggle = React.forwardRef(
  ({ children: toggleTarget, onClick, hasMultipleItems }, ref) => (
    <StyledToggleButton
      ref={ref}
      $hasMultipleItems={hasMultipleItems}
      onClick={(e) => onClick(e)}
    >
      <h1>{toggleTarget}</h1>
    </StyledToggleButton>
  )
);

export default Toggle;
