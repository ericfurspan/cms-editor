import React, { useState } from 'react';
import { Form, Col, Accordion } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { LoadSpinner, ContextAwareToggle } from '../../../../../../../components';
import { SaveUndoRow } from '../../SaveUndoRow';
import { StyledForm } from '../style';
import { cleanLabel } from '../utils';

const WebLinkField = ({ initialValues, onSubmit }) => {
  const [selectedPlatform, setSelectedPlatform] = useState('');

  const validationSchema = yup.object().shape({
    web_links: yup.object().shape(
      Object.keys(initialValues.web_links).reduce(
        (accum, fieldName) => ({
          ...accum,
          [fieldName]: yup.string().url('Must be a valid URL'),
        }),
        {}
      )
    ),
  });

  const submitHandler = (e) => {
    onSubmit(e);
    setSelectedPlatform('');
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      enableReinitialize
      onSubmit={submitHandler}
    >
      {({ handleSubmit, handleChange, handleReset, isSubmitting, isValidating, values, errors, dirty }) => {
        const isLoading = isSubmitting || isValidating;
        const platformKeys = Object.keys(initialValues.web_links);
        const hasExistingValues = platformKeys.filter((k) => !!initialValues.web_links[k]).length > 0;
        const usedPlatformKeys = platformKeys.filter((k) => initialValues.web_links[k].length > 0);
        const unusedPlatformKeys = platformKeys.filter((k) => initialValues.web_links[k].length === 0);

        return (
          <Col className="mb-4">
            <StyledForm onSubmit={handleSubmit}>
              <Accordion defaultActiveKey={hasExistingValues ? '0' : null}>
                <Form.Group>
                  <Form.Row className="mb-2 align-items-center position-relative">
                    <Col as={Form.Label}>
                      <ContextAwareToggle eventKey="0">Web Links</ContextAwareToggle>
                    </Col>
                    {dirty && <SaveUndoRow onUndo={handleReset} />}
                  </Form.Row>
                  <Accordion.Collapse eventKey="0">
                    <>
                      {/* display existing platform links */}
                      {usedPlatformKeys.map((platformName, index) => (
                        <Form.Row key={index} className="mb-2 align-items-center">
                          <Col>
                            <Form.Label>{cleanLabel(platformName)}</Form.Label>
                            <Form.Control
                              type="url"
                              name={`web_links.${platformName}`}
                              onChange={handleChange}
                              value={values.web_links[platformName]}
                              plaintext
                              isInvalid={errors.web_links && errors.web_links[platformName]}
                            />
                          </Col>

                          <Form.Control.Feedback type="invalid">
                            {errors.web_links && errors.web_links[platformName]}
                          </Form.Control.Feedback>
                        </Form.Row>
                      ))}

                      {/* adding a new platform */}
                      {unusedPlatformKeys.length > 0 && (
                        <Form.Row className="align-items-center justify-content-end">
                          {selectedPlatform && (
                            <Col xs="6">
                              <Form.Label>URL</Form.Label>
                              <Form.Control
                                type="url"
                                name={`web_links.${selectedPlatform}`}
                                onChange={handleChange}
                                value={values.web_links[selectedPlatform]}
                                isInvalid={errors.web_links && errors.web_links[selectedPlatform]}
                              />
                            </Col>
                          )}
                          <Col xs="4">
                            <Form.Label>Add a Platform</Form.Label>
                            <Form.Control
                              as="select"
                              onChange={({ target }) => setSelectedPlatform(target.value)}
                            >
                              {unusedPlatformKeys.map((platformName) => (
                                <option key={platformName}>{cleanLabel(platformName)}</option>
                              ))}
                            </Form.Control>
                          </Col>
                        </Form.Row>
                      )}
                    </>
                  </Accordion.Collapse>
                </Form.Group>
                {isLoading && <LoadSpinner inline />}
              </Accordion>
            </StyledForm>
          </Col>
        );
      }}
    </Formik>
  );
};

export default WebLinkField;
