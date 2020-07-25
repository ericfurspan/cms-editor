import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  StyledBrandRow,
  StyledBrandIcon,
  StyledDiamond,
  StyledLogo,
} from './style';

const PublicHeader = () => (
  <StyledBrandRow>
    <StyledLogo onClick={() => window.location.replace('/')}>
      <StyledBrandIcon>
        <FontAwesomeIcon icon={['fas', 'tools']} />
      </StyledBrandIcon>
      <StyledDiamond />
    </StyledLogo>
  </StyledBrandRow>
);

export default PublicHeader;
