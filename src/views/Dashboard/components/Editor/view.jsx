import React from 'react';
import { BusinessForm } from '../../../../components';
import { Container } from 'react-bootstrap';

const Editor = ({ content, onUpdateComplete }) => {
  return (
    <Container>
      {content && content.id ? (
        content.__typename === 'Business' && (
          <BusinessForm
            business={content}
            onUpdateComplete={onUpdateComplete}
          />
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
