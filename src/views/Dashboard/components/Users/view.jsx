import React from 'react';
import { StyledContentWrapper, StyledContentBanner } from '../../style';

const Users = () => {
  return (
    <StyledContentWrapper
      lg={{ span: 8, offset: 2 }}
      xl={{ span: 6, offset: 3 }}
      $withShadow
      $marginTop
    >
      <StyledContentBanner className="p-4">Coming soon</StyledContentBanner>
    </StyledContentWrapper>
  );
};

export default Users;
