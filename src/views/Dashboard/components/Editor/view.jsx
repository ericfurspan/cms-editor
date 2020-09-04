import React from 'react';
import { Col } from 'react-bootstrap';
import { StyledContentWrapper, StyledContentBanner, StyledMetaContainer } from '../../style';
import { BusinessForm } from './components';
import { ContentLoader } from '../../../../components';

const Editor = ({ content, onUpdateComplete }) => {
  const lastUpdated = new Date(content.updated_at).toLocaleDateString();

  return (
    <Col lg={{ span: 8, offset: 2 }}>
      <div className="mb-3 ml-1">
        <h1>Editor</h1>
        <span className="text-gray">Describe your content</span>
      </div>
      <StyledContentWrapper $withShadow $marginTop>
        {content && content.id ? (
          <>
            <StyledContentBanner>
              <StyledMetaContainer>
                <small className="text-gray">
                  <span>{content.__typename}</span>
                </small>
                <small className="text-gray">
                  <span>Last edit was {lastUpdated}</span>
                </small>
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
