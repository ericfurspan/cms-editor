import React from 'react';
import { Toast } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { themeForType, iconForType } from './utils';

const styles = {
  toastHeader: {
    backgroundClip: 'unset',
    backgroundColor: 'inherit',
    color: 'white',
    fontWeight: 'bold',
  },
};

const Notification = ({ show, title, body, onClose, type }) => {
  const dismissDelayMs = 3000;

  return (
    <div aria-live="polite" aria-atomic="true">
      <Toast
        show={show}
        onClose={onClose}
        delay={dismissDelayMs}
        autohide
        className={themeForType(type)}
        style={{
          position: 'fixed',
          top: 0,
          left: '50%',
          marginLeft: -125,
          zIndex: 1,
        }}
      >
        <Toast.Header style={styles.toastHeader}>
          <h4 className="mr-auto">{title}</h4>
        </Toast.Header>
        <Toast.Body className="text-white text-center">
          <p>{body}</p>
          <FontAwesomeIcon icon={['fas', iconForType(type)]} size="2x" />
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default Notification;
