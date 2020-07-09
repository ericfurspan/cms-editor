import React from 'react';
import { Container, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BusinessForm } from './components';
import { StyledHeaderRow, StyledMetadata, StyledBadge } from './style';

const Editor = ({ content, onUpdateComplete }) => {
  const lastUpdated = new Date(content.updated_at)
    .toLocaleString()
    .replace(',', ' at');

  return (
    <Container fluid>
      {content && content.id ? (
        content.__typename === 'Business' && (
          <Col>
            <StyledHeaderRow>
              <span>
                <h1>Edit {content.__typename}</h1>
                <span className="text-muted">
                  <FontAwesomeIcon icon={['fas', 'edit']} />
                  Manage your content
                </span>
              </span>
              <StyledMetadata>
                <StyledBadge pill bg="var(--primary-light)" fg="var(--white)">
                  <FontAwesomeIcon icon={['fas', 'file-alt']} />
                  {content.name}
                </StyledBadge>
                <StyledBadge pill bg="var(--gray-light)">
                  <FontAwesomeIcon icon={['fas', 'history']} />
                  last updated: {lastUpdated}
                </StyledBadge>
              </StyledMetadata>
            </StyledHeaderRow>
            <BusinessForm
              business={content}
              onUpdateComplete={onUpdateComplete}
            />
          </Col>
        )
      ) : (
        <Col>
          <p className="text-center">
            You have not yet been assigned to any content.
          </p>
        </Col>
      )}
    </Container>
  );
};

export default Editor;
