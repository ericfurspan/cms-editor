import React from 'react';
import { StyledToggleButton } from './style';

const Toggle = React.forwardRef(
  ({ children: toggleTarget, onClick, hasMultipleItems }, ref) => (
    <StyledToggleButton
      variant="transparent"
      ref={ref}
      $hasMultipleItems={hasMultipleItems}
      onClick={(e) => onClick(e)}
    >
      {toggleTarget}
    </StyledToggleButton>
  )
);

export default Toggle;
