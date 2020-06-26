import React, { useState, useEffect, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button } from 'react-bootstrap';
import omit from 'lodash/omit';
import { UPDATE_BUSINESS } from '../../../graphql/business';
import { LoadSpinner } from '../..';

const BusinessForm = ({ business, onAfterUpdate }) => {
  const [formFields, setFormFields] = useState({});

  /* gql update mutation */
  const [updateBusiness, { loading: mutationLoading }] = useMutation(
    UPDATE_BUSINESS,
    {
      onCompleted: ({ updateBusiness }) =>
        onAfterUpdate(updateBusiness.business),
    }
  );

  /* initialize Form state */
  useEffect(() => {
    if (!formFields.id) {
      setFormFields(omit(business, ['__typename']));
    }

    if (business.id !== formFields.id) {
      setFormFields(omit(business, ['__typename']));
    }
  }, [business, formFields]);

  if (mutationLoading) {
    return <LoadSpinner />;
  }

  /* update Form field state */
  const onChangeField = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  /* form handler - execute update mutation */
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      updateBusiness({
        variables: {
          input: {
            where: { id: formFields.id },
            data: omit(formFields, ['id', '__typename']),
          },
        },
      });
    } catch (e) {
      console.error(`${e.message}`);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label className="text-muted">Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formFields.name || ''}
          onChange={onChangeField}
        />
      </Form.Group>

      <Form.Group controlId="caption">
        <Form.Label className="text-muted">Caption</Form.Label>
        <Form.Control
          type="text"
          name="caption"
          value={formFields.caption || ''}
          onChange={onChangeField}
        />
      </Form.Group>

      <Form.Group controlId="mission_statement">
        <Form.Label className="text-muted">Mission Statement</Form.Label>
        <Form.Control
          as="textarea"
          name="mission_statement"
          rows="6"
          value={formFields.mission_statement || ''}
          onChange={onChangeField}
        />
      </Form.Group>

      <Form.Group className="mt-2">
        <Button variant="primary" type="submit" size="lg">
          Save
        </Button>
      </Form.Group>
    </Form>
  );
};

export default BusinessForm;
