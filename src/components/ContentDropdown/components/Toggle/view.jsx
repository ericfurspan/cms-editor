import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Toggle = React.forwardRef(({ children, onClick }, ref) => (
  <Button
    variant="text"
    as="span"
    ref={ref}
    type="button"
    onClick={(e) => onClick(e)}
  >
    {children}
    <FontAwesomeIcon size="1x" icon={['fas', 'caret-down']} className="ml-1" />
  </Button>
));

export default Toggle;
