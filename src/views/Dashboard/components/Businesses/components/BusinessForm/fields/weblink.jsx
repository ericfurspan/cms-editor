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

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      enableReinitialize
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleChange, handleReset, isSubmitting, isValidating, values, errors, dirty }) => {
        const isLoading = isSubmitting || isValidating;
        const platformKeys = Object.keys(initialValues.web_links);

        return (
          <Col>
            <StyledForm onSubmit={handleSubmit}>
              <Accordion>
                <Form.Row className="mb-2 align-items-center">
                  <Col as={Form.Label}>
                    <ContextAwareToggle eventKey="0">Web Links</ContextAwareToggle>
                  </Col>
                </Form.Row>
                <Accordion.Collapse eventKey="0">
                  <>
                    <Form.Row className="align-items-center mb-3">
                      <Col xs="3">
                        <Form.Label className="text-gray">Platforms</Form.Label>
                        <Form.Control
                          as="select"
                          onChange={({ target }) => setSelectedPlatform(target.value)}
                        >
                          <option value="" disabled>
                            Select a platform
                          </option>
                          {platformKeys.map((platformName) => (
                            <option key={platformName} value={platformName}>
                              {cleanLabel(platformName)}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>

                      <Col>
                        <Form.Label className="text-gray">URL</Form.Label>
                        <Form.Control
                          type="url"
                          name={`web_links.${selectedPlatform}`}
                          onChange={handleChange}
                          value={values.web_links[selectedPlatform] || ''}
                          isInvalid={errors.web_links && errors.web_links[selectedPlatform]}
                        />
                      </Col>
                      <Form.Control.Feedback type="invalid">
                        {errors.web_links && errors.web_links[selectedPlatform]}
                      </Form.Control.Feedback>
                    </Form.Row>
                    {dirty && <SaveUndoRow onUndo={handleReset} />}
                    {isLoading && <LoadSpinner inline />}
                  </>
                </Accordion.Collapse>
              </Accordion>
            </StyledForm>
          </Col>
        );
      }}
    </Formik>
  );
};

export default WebLinkField;
