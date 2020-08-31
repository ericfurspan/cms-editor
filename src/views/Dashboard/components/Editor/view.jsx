import React from 'react';
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
    <StyledContentWrapper
      lg={{ span: 8, offset: 2 }}
      xl={{ span: 6, offset: 3 }}
      $withShadow
      $marginTop
    >
      {content && content.id ? (
        <>
          <StyledContentBanner>
            <StyledMetaContainer>
              <StyledMeta>
                <h6>Type:</h6>
                <span>{content.__typename}</span>
              </StyledMeta>
              <StyledMeta>
                <h6>Latest edit:</h6>
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
  );
};

export default Editor;
