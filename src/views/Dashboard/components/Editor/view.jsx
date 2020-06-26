import React from 'react';
import { BusinessForm } from '../../../../components';
import { Container } from 'react-bootstrap';

const Editor = ({ content, onAfterUpdate }) => {
  return (
    <Container>
      {content.__typename === 'Business' && (
        <BusinessForm business={content} onAfterUpdate={onAfterUpdate} />
      )}
    </Container>
  );
};

export default Editor;
