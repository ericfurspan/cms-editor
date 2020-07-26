import React from 'react';
import { Container, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BusinessForm } from './components';
import { StyledHeaderRow, StyledMetadata, StyledContentHeader } from './style';

const Editor = ({ content, onUpdateComplete }) => {
  return (
    <Container fluid>
      {content && content.id ? (
        content.__typename === 'Business' && (
          <div>
            <StyledHeaderRow>
              <StyledMetadata>
                <StyledContentHeader>
                  <FontAwesomeIcon icon={['fas', 'pencil-alt']} size="sm" />
                  Editor
                </StyledContentHeader>
              </StyledMetadata>
              <h1>{content.name}</h1>
            </StyledHeaderRow>

            <BusinessForm
              business={content}
              onUpdateComplete={onUpdateComplete}
            />
          </div>
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
