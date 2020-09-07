import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, Col } from 'react-bootstrap';

const StyledAlert = styled(Alert)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const MissingPlaceholder = ({ icon = 'question', text, children }) => {
  return (
    <div>
      <StyledAlert variant="link">
        <Col xs="6" className="text-center">
          <p>{text}</p>
          <FontAwesomeIcon icon={['fas', icon]} size="4x" style={{ opacity: 0.5 }} />
        </Col>
        {children}
      </StyledAlert>
    </div>
  );
};

export default MissingPlaceholder;
