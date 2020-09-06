import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledDeleteFileBtn = styled(Button)`
  position: absolute;
  display: block;
  top: 4px;
  right: 4px;
  z-index: 2;
  color: var(--danger);
`;

const FileDeleteButton = ({ children, onDelete }) => (
  <StyledDeleteFileBtn variant="secondary" size="sm" onClick={onDelete}>
    {children || <FontAwesomeIcon icon={['fas', 'times']} />}
  </StyledDeleteFileBtn>
);

export default FileDeleteButton;
