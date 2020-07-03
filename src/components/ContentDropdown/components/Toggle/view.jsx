import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledToggleButton } from './style';

const Toggle = React.forwardRef(
  ({ children, onClick, hasMultipleContent, isSmall }, ref) => (
    <StyledToggleButton
      variant="transparent"
      as="span"
      ref={ref}
      $hasMultiple={hasMultipleContent}
      onClick={(e) => onClick(e)}
    >
      {children}
      {hasMultipleContent && !isSmall && (
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
