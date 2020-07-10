import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledBrandRow } from './style';

const PublicHeader = () => (
  <StyledBrandRow onClick={() => window.location.replace('/')}>
    <FontAwesomeIcon color="var(--warning)" icon={['fas', 'tools']} size="lg" />
  </StyledBrandRow>
);

export default PublicHeader;
