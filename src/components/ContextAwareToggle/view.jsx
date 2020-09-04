import React, { useContext } from 'react';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContextAwareToggle = ({ children, eventKey, callback }) => {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(eventKey, () => callback && callback(eventKey));

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <summary onClick={decoratedOnClick}>
      {children}
      <FontAwesomeIcon icon={isCurrentEventKey ? 'caret-down' : 'caret-right'} className="ml-2" />
    </summary>
  );
};

export default ContextAwareToggle;
