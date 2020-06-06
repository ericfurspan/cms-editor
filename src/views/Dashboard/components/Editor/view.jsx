import React from 'react';
import { Row, Navbar, Button } from 'react-bootstrap';
import { BusinessForm } from './Forms';

const Editor = ({ content }) => {
  return (
    <>
      <Navbar className="mb-2">
        <Navbar.Brand className="mr-auto" as={Row}>
          <h2>{content.name}</h2>
        </Navbar.Brand>
        <Button variant="success" type="submit">
          Save
        </Button>
      </Navbar>
      <BusinessForm business={content} />
    </>
  );
};

export default Editor;
