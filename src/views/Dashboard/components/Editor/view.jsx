import React from 'react';
import { Container, Col } from 'react-bootstrap';
import { BusinessForm } from './components';
import { StyledHeader } from './style';

const Editor = ({ content, onUpdateComplete }) => {
  return (
    <Container fluid>
      {content && content.id ? (
        content.__typename === 'Business' && (
          <Col sm="12">
            <StyledHeader>
              <h1>Editor</h1>
              <h4>View and update content</h4>
            </StyledHeader>
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
