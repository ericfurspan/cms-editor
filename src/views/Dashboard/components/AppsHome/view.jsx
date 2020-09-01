import React from 'react';
import { Col } from 'react-bootstrap';
import { StyledContentWrapper } from '../../style';
import { ContentLoader } from '../../../../components';

const AppsHome = () => {
  return (
    <Col lg={{ span: 8, offset: 2 }}>
      <div className="mb-3 ml-1">
        <h1>Apps</h1>
        <span className="text-gray">coming soon</span>
      </div>
      <StyledContentWrapper $withShadow $marginTop>
        <ContentLoader animate={false} loadingMessage="coming soon..." />
      </StyledContentWrapper>
    </Col>
  );
};

export default AppsHome;
