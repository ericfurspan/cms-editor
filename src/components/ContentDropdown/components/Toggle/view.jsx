import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledToggleButton } from './style';

const Toggle = React.forwardRef(
  ({ children, onClick, hasMultipleContent }, ref) => (
    <StyledToggleButton
      variant="text"
      as="span"
      ref={ref}
      type="button"
      $hasMultiple={hasMultipleContent}
      onClick={(e) => onClick(e)}
    >
      {children}
      {hasMultipleContent && (
        <FontAwesomeIcon
          size="1x"
          icon={['fas', 'angle-down']}
          className="ml-1"
        />
      )}
    </StyledToggleButton>
  )
);

export default Toggle;
