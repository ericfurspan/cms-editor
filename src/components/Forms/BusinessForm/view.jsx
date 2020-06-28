import React, { useState, useEffect, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button, Col } from 'react-bootstrap';
import ReactJson from 'react-json-view';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import omit from 'lodash/omit';
import { UPDATE_BUSINESS } from '../../../graphql/business';
import { LoadSpinner, Notification } from '../..';

const styles = {
  jsonForm: {
    padding: '0.75rem',
    borderRadius: '0.25rem',
    fontSize: '0.875rem',
    border: '1px solid var(--gray-lighter)',
    overflow: 'auto',
  },
};

const BusinessForm = ({ business, onUpdateComplete }) => {
  const [formFields, setFormFields] = useState({});
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState(null);

  /* gql update mutation */
  const [updateBusiness, { loading: mutationLoading }] = useMutation(
    UPDATE_BUSINESS,
    {
      onCompleted: ({ updateBusiness }) =>
        onUpdateComplete(updateBusiness.business),
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
      // sucess notification
      setNotificationType('success');
      setShowNotification(true);
    } catch (e) {
      // error notification
      setNotificationType('error');
      setShowNotification(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="text-right mb-1">
        <Button variant="primary" type="submit" size="lg">
          <FontAwesomeIcon icon={['fas', 'save']} size="1x" />
          <span className="ml-1">Save</span>
        </Button>
        <Notification
          title="Saved"
          body={`${business.name} has been updated.`}
          show={showNotification}
          type={notificationType}
          onClose={() => setShowNotification(false)}
        />
      </div>

      <Form.Row className="mb-2">
        <Form.Group as={Col} controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formFields.name || ''}
            onChange={onChangeField}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="business_email">
          <Form.Label>Contact Email</Form.Label>
          <Form.Control
            type="text"
            name="business_email"
            value={formFields.business_email || ''}
            onChange={onChangeField}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row className="mb-2">
        <Form.Group as={Col} controlId="caption">
          <Form.Label>Caption</Form.Label>
          <Form.Control
            type="text"
            name="caption"
            value={formFields.caption || ''}
            onChange={onChangeField}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="mission_statement">
          <Form.Label>Mission Statement</Form.Label>
          <Form.Control
            as="textarea"
            name="mission_statement"
            rows="6"
            value={formFields.mission_statement || ''}
            onChange={onChangeField}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row className="mb-2">
        <Form.Group as={Col} controlId="business_hours">
          <Form.Label>Hours of Operation</Form.Label>
          <ReactJson
            name="business_hours"
            src={formFields.business_hours || {}}
            displayDataTypes={false}
            iconStyle="triangle"
            enableClipboard={false}
            sortKeys={true}
            style={styles.jsonForm}
            onEdit={(edited) => {
              setFormFields({
                ...formFields,
                business_hours: edited.updated_src,
              });
            }}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="social_media_links">
          <Form.Label>Social Media</Form.Label>
          <ReactJson
            name="social_media_links"
            src={formFields.social_media_links || {}}
            displayDataTypes={false}
            iconStyle="triangle"
            enableClipboard={false}
            sortKeys={true}
            style={styles.jsonForm}
            onEdit={(edited) => {
              setFormFields({
                ...formFields,
                social_media_links: edited.updated_src,
              });
            }}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row className="mb-2">
        <Form.Group as={Col} controlId="podcast_links">
          <Form.Label>Podcast</Form.Label>
          <ReactJson
            name="podcast_links"
            src={formFields.podcast_links || {}}
            displayDataTypes={false}
            iconStyle="triangle"
            enableClipboard={false}
            sortKeys={true}
            style={styles.jsonForm}
            onEdit={(edit) => {
              setFormFields({ ...formFields, podcast_links: edit.updated_src });
            }}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="payment_links">
          <Form.Label>Payment & Donation</Form.Label>
          <ReactJson
            name="payment_links"
            src={formFields.payment_links || {}}
            displayDataTypes={false}
            iconStyle="triangle"
            enableClipboard={false}
            sortKeys={true}
            style={styles.jsonForm}
            onEdit={(edit) => {
              setFormFields({ ...formFields, payment_links: edit.updated_src });
            }}
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
};

export default BusinessForm;
