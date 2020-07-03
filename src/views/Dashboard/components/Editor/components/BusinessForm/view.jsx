import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {
  Form,
  Col,
  InputGroup,
  Popover,
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap';
import { Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import omit from 'lodash/omit';
import { UPDATE_BUSINESS } from '../../../../../../graphql/business';
import { LoadSpinner, Notification } from '../../../../../../components';
import sampleContent from '../../../../../../static/json/business-sample.json';
import { validationSchema } from './utils';
import {
  StyledJSONField,
  StyledActionButtonGroup,
  StyledActionButton,
  StyledPopoverTitle,
  StyledPopoverContent,
  StyledPopoverTarget,
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
  <StyledPopoverTarget tabIndex="0">
    <span>type</span>&nbsp;
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
            data: omit(values, ['id', '__typename', 'logo']),
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
      }) => {
        return (
          <Form noValidate onSubmit={handleSubmit}>
            {isSubmitting || isValidating ? (
              <LoadSpinner />
            ) : (
              <>
                <Form.Row className="mb-2">
                  <Form.Group
                    as={Col}
                    md={{ span: 4, offset: 1 }}
                    controlId="name"
                  >
                    <OverlayTrigger
                      placement="bottom-start"
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
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md={{ span: 4, offset: 1 }}
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
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>@</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="text"
                        name="business_email"
                        value={values.business_email || ''}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                </Form.Row>

                <Form.Row className="mb-2">
                  <Form.Group
                    as={Col}
                    md={{ span: 4, offset: 4 }}
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
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="mb-2">
                  <Form.Group
                    as={Col}
                    md={{ span: 8, offset: 2 }}
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
                      rows="6"
                      value={values.mission_statement || ''}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="mb-2">
                  <Form.Group
                    as={Col}
                    lg={{ span: 4, offset: 1 }}
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
                      onEdit={(edited) => {
                        setFieldValue('business_hours', edited.updated_src);
                      }}
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    lg={{ span: 4, offset: 1 }}
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
                      onEdit={(edited) => {
                        setFieldValue('social_media_links', edited.updated_src);
                      }}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row className="mb-2">
                  <Form.Group
                    as={Col}
                    lg={{ span: 4, offset: 1 }}
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
                      onEdit={(edited) => {
                        setFieldValue('podcast_links', edited.updated_src);
                      }}
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    lg={{ span: 4, offset: 1 }}
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
                      onEdit={(edited) => {
                        setFieldValue('payment_links', edited.updated_src);
                      }}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row className="mb-2">
                  <Form.Group
                    as={Col}
                    lg={{ span: 4, offset: 1 }}
                    controlId="events"
                  >
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

                  <Form.Group
                    as={Col}
                    lg={{ span: 4, offset: 1 }}
                    controlId="news"
                  >
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

            {dirty && (
              <StyledActionButtonGroup>
                <OverlayTrigger
                  placement="left"
                  overlay={<Tooltip>Undo current changes.</Tooltip>}
                >
                  <StyledActionButton
                    variant="danger"
                    type="button"
                    onClick={() => onHandleReset(handleReset)}
                  >
                    <FontAwesomeIcon icon={['fas', 'undo-alt']} />
                  </StyledActionButton>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="left"
                  overlay={<Tooltip>Save current changes.</Tooltip>}
                >
                  <StyledActionButton variant="success" type="submit">
                    <FontAwesomeIcon icon={['fas', 'save']} />
                  </StyledActionButton>
                </OverlayTrigger>
              </StyledActionButtonGroup>
            )}
            <Notification
              config={notificationConfig}
              show={showNotification}
              onClose={() => setShowNotification(false)}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default BusinessForm;