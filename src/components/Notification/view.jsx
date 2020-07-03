import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconForType } from './utils';
import { StyledToast, StyledToastHeader } from './style';

const Notification = ({ show, config, onClose }) => {
  const dismissDelayMs = 3000;

  return (
    <div aria-live="polite" aria-atomic="true">
      <StyledToast
        show={show}
        onClose={onClose}
        delay={dismissDelayMs}
        autohide
        $type={config.type}
      >
        <StyledToastHeader>
          <FontAwesomeIcon icon={['fas', iconForType(config.type)]} size="1x" />
          <span className="ml-1 mt-0 mb-0 mr-auto">{config.message}</span>
        </StyledToastHeader>
      </StyledToast>
    </div>
  );
};

export default Notification;
