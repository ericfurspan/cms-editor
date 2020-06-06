import React from 'react';
import { Spinner } from 'react-bootstrap';

const styles = {
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-1rem',
  },
  spinner: {
    width: '4rem',
    height: '4rem',
  },
};

const LoadSpinner = () => (
  <div style={styles.container}>
    <Spinner animation="border" style={styles.spinner} />
  </div>
);

export default LoadSpinner;
