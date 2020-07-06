import React from 'react';
import { Container, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BusinessForm } from './components';
import { StyledHeaderRow, StyledLastUpdated, StyledBadge } from './style';

const Editor = ({ content, onUpdateComplete }) => {
  const lastUpdated = new Date(content.updated_at).toLocaleString();

  return (
    <Container>
      {content && content.id ? (
        content.__typename === 'Business' && (
          <Col>
            <StyledHeaderRow>
              <h2>Editor</h2>
              <StyledLastUpdated>
                <span>
                  <FontAwesomeIcon icon={['fas', 'history']} />
                  <StyledBadge pill>Last Updated</StyledBadge>
                </span>
                <span>{lastUpdated}</span>
              </StyledLastUpdated>
            </StyledHeaderRow>
            <BusinessForm
              business={content}
              onUpdateComplete={onUpdateComplete}
            />
          </Col>
        )
      ) : (
        <h4 className="text-center">
          You have not been assigned any content to edit.
        </h4>
      )}
    </Container>
  );
};

export default Editor;
