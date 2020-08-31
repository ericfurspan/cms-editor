import React from 'react';
import { Form, Col, Accordion, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoadSpinner, ContextAwareToggle } from '../../../../../../../components';
import { SaveUndoRow } from '../../SaveUndoRow';
import { StyledForm } from '../style';
import { cleanLabel } from '../utils';

const WebLinkField = ({ initialValues, onSubmit }) => {
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
      {({
        handleSubmit,
        handleChange,
        handleReset,
        isSubmitting,
        isValidating,
        values,
        errors,
        dirty,
      }) => {
        const isLoading = isSubmitting || isValidating;
        const platformKeys = Object.keys(values.web_links);
        const hasExistingValues = platformKeys.filter((k) => !!values.web_links[k]).length > 0;

        return (
          <Col className="mb-4">
            <StyledForm onSubmit={handleSubmit}>
              <Accordion defaultActiveKey={hasExistingValues ? '0' : null}>
                <Form.Group>
                  <Form.Row className="mb-2 align-items-center">
                    <Col as={Form.Label}>
                      <ContextAwareToggle eventKey="0">Web Links</ContextAwareToggle>
                    </Col>
                    {dirty && <SaveUndoRow onUndo={handleReset} />}
                  </Form.Row>
                  <Accordion.Collapse eventKey="0">
                    <>
                      {platformKeys.map((platformName, index) => (
                        <Form.Row key={index} className="mb-2 align-items-center">
                          <InputGroup size="sm">
                            <InputGroup.Prepend>
                              <InputGroup.Text>{cleanLabel(platformName)}</InputGroup.Text>
                            </InputGroup.Prepend>

                            <Form.Control
                              type="url"
                              name={`web_links.${platformName}`}
                              onChange={handleChange}
                              value={values.web_links[platformName]}
                              isInvalid={errors.web_links && errors.web_links[platformName]}
                            />
                            <InputGroup.Append>
                              <InputGroup.Text>
                                <FontAwesomeIcon icon={['fas', 'link']} />
                              </InputGroup.Text>
                            </InputGroup.Append>
                            <Form.Control.Feedback type="invalid">
                              {errors.web_links && errors.web_links[platformName]}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Row>
                      ))}
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
