import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Col, Popover, OverlayTrigger } from 'react-bootstrap';
import { Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import omit from 'lodash/omit';
import { UPDATE_BUSINESS } from '../../../../../../graphql/business';
import { LoadSpinner, Notification } from '../../../../../../components';
import sampleContent from '../../../../../../static/json/business-sample.json';
import { validationSchema } from './utils';
import {
  StyledForm,
  StyledJSONField,
  StyledActionButtonGroup,
  StyledActionButton,
  StyledPopoverTitle,
  StyledPopoverContent,
  StyledPopoverTarget,
  StyledLastUpdate,
  StyledTopBar,
} from './style';

const createPopoverContent = ({ type, accessor, stringify }) => (
  <Popover id={accessor}>
    <StyledPopoverTitle>
      type: &nbsp;<code>{type}</code>
    </StyledPopoverTitle>
    <StyledPopoverContent as="pre">
      {stringify
        ? JSON.stringify(sampleContent[accessor], null, 2)
        : sampleContent[accessor]}
    </StyledPopoverContent>
  </Popover>
);

const createPopoverTarget = () => (
  <StyledPopoverTarget>
    <FontAwesomeIcon icon={['fas', 'info-circle']} />
  </StyledPopoverTarget>
);

const BusinessForm = ({ business, onUpdateComplete }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationConfig, setNotificationConfig] = useState({});

  /* gql update mutation */
  const [updateBusiness, { loading: mutationLoading }] = useMutation(
    UPDATE_BUSINESS,
    {
      onCompleted: (data) => {
        onUpdateComplete(data.updateBusiness.business);
      },
    }
  );

  if (mutationLoading) {
    return <LoadSpinner />;
  }

  const onHandleReset = (resetForm) => {
    try {
      resetForm();
      setNotificationConfig({ type: 'success', message: 'Reset form' });
    } catch (e) {
      setNotificationConfig({ type: 'error', message: e.message });
    } finally {
      setShowNotification(true);
    }
  };

  /* execute update mutation */
  const executeMutation = (values) => {
    try {
      updateBusiness({
        variables: {
          input: {
            where: { id: values.id },
            data: omit(values, ['id', '__typename', 'logo', 'updated_at']),
          },
        },
      });
      setNotificationConfig({ type: 'success', message: 'Saved changes' });
    } catch (e) {
      setNotificationConfig({ type: 'error', message: e.message });
    } finally {
      setShowNotification(true);
    }
  };

  const lastUpdated = new Date(business.updated_at)
    .toLocaleString()
    .replace(',', ' at');

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={business}
      enableReinitialize
      onSubmit={executeMutation}
    >
      {({
        handleSubmit,
        handleChange,
        handleReset,
        setFieldValue,
        isSubmitting,
        isValidating,
        values,
        dirty,
        errors,
      }) => {
        return (
          <StyledForm noValidate onSubmit={handleSubmit}>
            {isSubmitting || isValidating ? (
              <LoadSpinner />
            ) : (
              <>
                <StyledTopBar>
                  <StyledLastUpdate pill>
                    Last updated {lastUpdated}
                  </StyledLastUpdate>
                  <StyledActionButtonGroup>
                    <StyledActionButton
                      variant="secondary"
                      type="button"
                      size="sm"
                      disabled={!dirty}
                      onClick={() => onHandleReset(handleReset)}
                    >
                      <span>Reset</span>
                    </StyledActionButton>
                    <StyledActionButton
                      variant="success"
                      type="submit"
                      size="sm"
                      $wide
                      disabled={!dirty}
                    >
                      <span>Save</span>
                    </StyledActionButton>
                  </StyledActionButtonGroup>
                </StyledTopBar>

                <Form.Row className="justify-content-around">
                  <Form.Group
                    as={Col}
                    lg={{ span: 5 }}
                    className="mb-4"
                    controlId="name"
                  >
                    <OverlayTrigger
                      placement="auto-start"
                      overlay={createPopoverContent({
                        type: 'String',
                        accessor: 'name',
                      })}
                    >
                      {createPopoverTarget()}
                    </OverlayTrigger>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    lg={{ span: 6, offset: 1 }}
                    className="mb-4"
                    controlId="business_email"
                  >
                    <OverlayTrigger
                      placement="auto-start"
                      overlay={createPopoverContent({
                        type: 'String',
                        accessor: 'business_email',
                      })}
                    >
                      {createPopoverTarget()}
                    </OverlayTrigger>
                    <Form.Label>Contact Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="business_email"
                      value={values.business_email || ''}
                      onChange={handleChange}
                      isInvalid={!!errors.business_email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.business_email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Group>
                  <Form.File
                    name="logo"
                    label="Logo"
                    onChange={({
                      target: {
                        validity,
                        files: [file],
                      },
                    }) => {
                      if (validity.valid) {
                        setFieldValue('logo', file);
                      }
                    }}
                    feedback={errors.logo}
                    id="business_logo"
                  />
                </Form.Group>

                <Form.Row className="justify-content-around">
                  <Form.Group
                    as={Col}
                    lg={{ span: 4 }}
                    className="mb-4"
                    controlId="caption"
                  >
                    <OverlayTrigger
                      placement="auto-start"
                      overlay={createPopoverContent({
                        type: 'String',
                        accessor: 'caption',
                      })}
                    >
                      {createPopoverTarget()}
                    </OverlayTrigger>
                    <Form.Label>Caption</Form.Label>
                    <Form.Control
                      type="text"
                      name="caption"
                      value={values.caption || ''}
                      onChange={handleChange}
                      isInvalid={!!errors.caption}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.caption}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    lg={{ span: 7, offset: 1 }}
                    className="mb-4"
                    controlId="mission_statement"
                  >
                    <OverlayTrigger
                      placement="auto-start"
                      overlay={createPopoverContent({
                        type: 'String',
                        accessor: 'mission_statement',
                      })}
                    >
                      {createPopoverTarget()}
                    </OverlayTrigger>
                    <Form.Label>Mission Statement</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="mission_statement"
                      rows="5"
                      value={values.mission_statement || ''}
                      onChange={handleChange}
                      isInvalid={!!errors.mission_statement}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.mission_statement}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group
                    as={Col}
                    className="mb-4"
                    controlId="business_hours"
                  >
                    <OverlayTrigger
                      placement="auto-start"
                      overlay={createPopoverContent({
                        type: 'JSON (object)',
                        accessor: 'business_hours',
                        stringify: true,
                      })}
                    >
                      {createPopoverTarget()}
                    </OverlayTrigger>
                    <Form.Label>Business Hours</Form.Label>
                    <StyledJSONField
                      name="business_hours"
                      src={values.business_hours || {}}
                      sortKeys
                      onAdd={() => true}
                      onEdit={(edited) => {
                        setFieldValue('business_hours', edited.updated_src);
                      }}
                      onDelete={(deleted) => {
                        setFieldValue('business_hours', deleted.updated_src);
                      }}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group
                    as={Col}
                    className="mb-4"
                    controlId="social_media_links"
                  >
                    <OverlayTrigger
                      placement="auto-start"
                      overlay={createPopoverContent({
                        type: 'JSON (object)',
                        accessor: 'social_media_links',
                        stringify: true,
                      })}
                    >
                      {createPopoverTarget()}
                    </OverlayTrigger>
                    <Form.Label>Social Media</Form.Label>
                    <StyledJSONField
                      name="social_media_links"
                      src={values.social_media_links || {}}
                      onAdd={() => true}
                      onEdit={(edited) => {
                        setFieldValue('social_media_links', edited.updated_src);
                      }}
                      onDelete={(deleted) => {
                        setFieldValue(
                          'social_media_links',
                          deleted.updated_src
                        );
                      }}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group
                    as={Col}
                    className="mb-4"
                    controlId="podcast_links"
                  >
                    <OverlayTrigger
                      placement="auto-start"
                      overlay={createPopoverContent({
                        type: 'JSON (object)',
                        accessor: 'podcast_links',
                        stringify: true,
                      })}
                    >
                      {createPopoverTarget()}
                    </OverlayTrigger>
                    <Form.Label>Podcast</Form.Label>
                    <StyledJSONField
                      name="podcast_links"
                      src={values.podcast_links || {}}
                      onAdd={() => true}
                      onEdit={(edited) => {
                        setFieldValue('podcast_links', edited.updated_src);
                      }}
                      onDelete={(deleted) => {
                        setFieldValue('podcast_links', deleted.updated_src);
                      }}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group
                    as={Col}
                    className="mb-4"
                    controlId="payment_links"
                  >
                    <OverlayTrigger
                      placement="auto-start"
                      overlay={createPopoverContent({
                        type: 'JSON (object)',
                        accessor: 'payment_links',
                        stringify: true,
                      })}
                    >
                      {createPopoverTarget()}
                    </OverlayTrigger>
                    <Form.Label>Payment / Donation</Form.Label>
                    <StyledJSONField
                      name="payment_links"
                      src={values.payment_links || {}}
                      onAdd={() => true}
                      onEdit={(edited) => {
                        setFieldValue('payment_links', edited.updated_src);
                      }}
                      onDelete={(deleted) => {
                        setFieldValue('payment_links', deleted.updated_src);
                      }}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} className="mb-4" controlId="events">
                    <OverlayTrigger
                      placement="auto-start"
                      overlay={createPopoverContent({
                        type: 'JSON (array)',
                        accessor: 'events',
                        stringify: true,
                      })}
                    >
                      {createPopoverTarget()}
                    </OverlayTrigger>
                    <Form.Label>Events</Form.Label>
                    <StyledJSONField
                      name="events"
                      src={values.events || []}
                      onAdd={() => true}
                      onEdit={(edited) => {
                        setFieldValue('events', edited.updated_src);
                      }}
                      onDelete={(deleted) => {
                        setFieldValue('events', deleted.updated_src);
                      }}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} className="mb-4" controlId="news">
                    <OverlayTrigger
                      placement="auto-start"
                      overlay={createPopoverContent({
                        type: 'JSON (array)',
                        accessor: 'news',
                        stringify: true,
                      })}
                    >
                      {createPopoverTarget()}
                    </OverlayTrigger>
                    <Form.Label>News</Form.Label>
                    <StyledJSONField
                      name="news"
                      src={values.news || []}
                      onAdd={() => true}
                      onEdit={(edited) => {
                        setFieldValue('news', edited.updated_src);
                      }}
                      onDelete={(deleted) => {
                        setFieldValue('news', deleted.updated_src);
                      }}
                    />
                  </Form.Group>
                </Form.Row>
              </>
            )}
            <Notification
              config={notificationConfig}
              show={showNotification}
              onClose={() => setShowNotification(false)}
            />
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default BusinessForm;
