import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormText, Container } from 'react-bootstrap';

export const StyledContainer = styled(Container)`
  svg {
    color: var(--primary-light);
    opacity: 0.4;
  }
`;

const FileUploadPlaceholder = ({ icon = 'image' }) => {
  return (
    <StyledContainer>
      <FontAwesomeIcon icon={['fas', icon]} size="5x" />
      <FormText className="w-50 m-auto pt-1 text-dark">
        Click to select an asset or drag &amp; drop a file in this area
      </FormText>
    </StyledContainer>
  );
};

export default FileUploadPlaceholder;
