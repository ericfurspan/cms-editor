import React from 'react';
import { Col } from 'react-bootstrap';
import {
  StyledContentWrapper,
  StyledContentBanner,
  StyledMetaContainer,
  StyledMeta,
} from '../../style';
import { BusinessForm } from './components';
import { ContentLoader } from '../../../../components';

const Editor = ({ content, onUpdateComplete }) => {
  const lastUpdated = new Date(content.updated_at).toDateString();

  return (
    <Col lg={{ span: 8, offset: 2 }} xl={{ span: 6, offset: 3 }}>
      <div className="mb-3 ml-1">
        <h1>Editor</h1>
        <span>Manage your website content</span>
      </div>
      <StyledContentWrapper $withShadow $marginTop>
        {content && content.id ? (
          <>
            <StyledContentBanner>
              <StyledMetaContainer>
                <StyledMeta>
                  <h6>Content:</h6>
                  <span>{content.__typename}</span>
                </StyledMeta>
                <StyledMeta>
                  <h6>Last edit:</h6>
                  <span>{lastUpdated}</span>
                </StyledMeta>
              </StyledMetaContainer>
            </StyledContentBanner>

            {content.__typename === 'Business' && (
              <BusinessForm business={content} onUpdateComplete={onUpdateComplete} />
            )}
          </>
        ) : (
          <ContentLoader />
        )}
      </StyledContentWrapper>
    </Col>
  );
};

export default Editor;
