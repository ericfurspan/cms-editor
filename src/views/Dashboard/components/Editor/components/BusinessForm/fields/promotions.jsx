import React from 'react';
import { Form, Col, Accordion, Button, InputGroup } from 'react-bootstrap';
import { Formik, FieldArray, Field } from 'formik';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContextAwareToggle } from '../../../../../../../components';
import { SaveUndoRow } from '../../SaveUndoRow';
import { StyledForm, StyledFormButton, StyledFormIcon } from '../style';

const validationSchema = yup.object().shape({
  promotions: yup.array().of(
    yup.object().shape({
      url: yup.string().url('Must be a valid URL').required('Required'),
      title: yup.string().required('Required'),
      description: yup.string(),
    })
  ),
});

const PromotionsField = ({ initialValues, onSubmit }) => {
  const hasExistingValues = initialValues.promotions && initialValues.promotions.length > 0;

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      enableReinitialize
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleReset, values, touched, dirty, errors }) => {
        return (
          <Col className="mb-4">
            <StyledForm onSubmit={handleSubmit}>
              <Accordion defaultActiveKey={hasExistingValues ? '0' : null}>
                <Form.Row className="mb-3 align-items-baseline position-relative">
                  <Col as={Form.Label}>
                    <ContextAwareToggle eventKey="0">Promotions</ContextAwareToggle>
                  </Col>
                  {dirty && <SaveUndoRow onUndo={handleReset} />}
                </Form.Row>
                <Accordion.Collapse eventKey="0">
                  <FieldArray name="promotions">
                    {({ _insert, remove, push }) => (
                      <Col className="pb-4">
                        {values.promotions &&
                          values.promotions.length > 0 &&
                          values.promotions.map((_, index) => (
                            <Form.Row className="align-items-center pb-2" key={index}>
                              <Col xs={10}>
                                <Form.Group controlId={`promotions.${index}.title`}>
                                  <InputGroup size="sm">
                                    <Field
                                      as={Form.Control}
                                      type="text"
                                      size="sm"
                                      name={`promotions.${index}.title`}
                                      label="Title"
                                      placeholder="Title"
                                      isInvalid={
                                        dirty &&
                                        touched.promotions &&
                                        touched.promotions[index] &&
                                        touched.promotions[index].title &&
                                        errors.promotions &&
                                        errors.promotions[index] &&
                                        errors.promotions[index].title
                                      }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {dirty &&
                                        touched.promotions &&
                                        touched.promotions[index] &&
                                        touched.promotions[index].title &&
                                        errors.promotions &&
                                        errors.promotions[index] &&
                                        errors.promotions[index].title}
                                    </Form.Control.Feedback>
                                  </InputGroup>
                                </Form.Group>
                                <Form.Group controlId={`promotions.${index}.description`}>
                                  <InputGroup size="sm">
                                    <Field
                                      as={Form.Control}
                                      type="text"
                                      size="sm"
                                      name={`promotions.${index}.description`}
                                      label="Description"
                                      placeholder="Description"
                                      isInvalid={
                                        dirty &&
                                        touched.promotions &&
                                        touched.promotions[index] &&
                                        touched.promotions[index].description &&
                                        errors.promotions &&
                                        errors.promotions[index] &&
                                        errors.promotions[index].description
                                      }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {dirty &&
                                        touched.promotions &&
                                        touched.promotions[index] &&
                                        touched.promotions[index].description &&
                                        errors.promotions &&
                                        errors.promotions[index] &&
                                        errors.promotions[index].description}
                                    </Form.Control.Feedback>
                                  </InputGroup>
                                </Form.Group>
                                <Form.Group controlId={`promotions.${index}.url`}>
                                  <InputGroup size="sm">
                                    <Form.Control
                                      as={Field}
                                      type="url"
                                      size="sm"
                                      name={`promotions.${index}.url`}
                                      label="URL"
                                      placeholder="URL"
                                      isInvalid={
                                        dirty &&
                                        touched.promotions &&
                                        touched.promotions[index] &&
                                        touched.promotions[index].url &&
                                        errors.promotions &&
                                        errors.promotions[index] &&
                                        errors.promotions[index].url
                                      }
                                    />
                                    <InputGroup.Append>
                                      <InputGroup.Text>
                                        <FontAwesomeIcon icon={['fas', 'link']} />
                                      </InputGroup.Text>
                                    </InputGroup.Append>
                                    <Form.Control.Feedback type="invalid">
                                      {dirty &&
                                        touched.promotions &&
                                        touched.promotions[index] &&
                                        touched.promotions[index].url &&
                                        errors.promotions &&
                                        errors.promotions[index] &&
                                        errors.promotions[index].url}
                                    </Form.Control.Feedback>
                                  </InputGroup>
                                </Form.Group>
                              </Col>
                              <Col className="text-right mb-3">
                                <Button variant="outline-danger" size="sm" onClick={() => remove(index)}>
                                  Delete
                                </Button>
                              </Col>
                            </Form.Row>
                          ))}
                        <Col>
                          <StyledFormButton
                            size="sm"
                            variant="secondary"
                            onClick={() => push({ title: '', description: '', url: '' })}
                            disabled={!!errors.promotions}
                          >
                            <StyledFormIcon $iconName="plus" />
                            Add
                          </StyledFormButton>
                        </Col>
                      </Col>
                    )}
                  </FieldArray>
                </Accordion.Collapse>
              </Accordion>
            </StyledForm>
          </Col>
        );
      }}
    </Formik>
  );
};

export default PromotionsField;
