import React from 'react';
import { Form, Col, Accordion, Button, InputGroup } from 'react-bootstrap';
import { Formik, FieldArray, Field } from 'formik';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContextAwareToggle } from '../../../../../../../components';
import { SaveUndoRow } from '../../SaveUndoRow';
import { StyledForm, StyledFormButton, StyledFormIcon } from '../style';

const validationSchema = yup.object().shape({
  news: yup.array().of(
    yup.object().shape({
      title: yup.string().required('Required'),
      source: yup.string(),
      url: yup.string().url('Must be a valid URL').required('Required'),
    })
  ),
});

const NewsField = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      enableReinitialize
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleReset, values, touched, dirty, errors }) => {
        return (
          <Col>
            <StyledForm onSubmit={handleSubmit}>
              <Accordion>
                <Form.Row className="mb-3 align-items-baseline">
                  <Col as={Form.Label}>
                    <ContextAwareToggle eventKey="0">News</ContextAwareToggle>
                  </Col>
                </Form.Row>
                <Accordion.Collapse eventKey="0">
                  <>
                    <FieldArray name="news">
                      {({ _insert, remove, push }) => (
                        <Col className="pb-4">
                          {values.news &&
                            values.news.length > 0 &&
                            values.news.map((_, index) => (
                              <Form.Row className="align-items-center pb-2" key={index}>
                                <Col xs={12} md={10}>
                                  <Form.Group controlId={`news.${index}.title`}>
                                    <InputGroup size="sm" as={Form.Row}>
                                      <Form.Label className="mr-2 font-italic text-gray">Title</Form.Label>
                                      <Field
                                        as={Form.Control}
                                        type="text"
                                        size="sm"
                                        name={`news.${index}.title`}
                                        label="Title"
                                        placeholder="Title"
                                        isInvalid={
                                          dirty &&
                                          touched.news &&
                                          touched.news[index] &&
                                          touched.news[index].title &&
                                          errors.news &&
                                          errors.news[index] &&
                                          errors.news[index].title
                                        }
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        {dirty &&
                                          touched.news &&
                                          touched.news[index] &&
                                          touched.news[index].title &&
                                          errors.news &&
                                          errors.news[index] &&
                                          errors.news[index].title}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                  <Form.Group controlId={`news.${index}.url`}>
                                    <InputGroup size="sm" as={Form.Row}>
                                      <Form.Label className="mr-2 font-italic text-gray">URL</Form.Label>
                                      <Form.Control
                                        as={Field}
                                        type="url"
                                        size="sm"
                                        name={`news.${index}.url`}
                                        label="URL"
                                        placeholder="URL"
                                        isInvalid={
                                          dirty &&
                                          touched.news &&
                                          touched.news[index] &&
                                          touched.news[index].url &&
                                          errors.news &&
                                          errors.news[index] &&
                                          errors.news[index].url
                                        }
                                      />
                                      <InputGroup.Append>
                                        <InputGroup.Text>
                                          <FontAwesomeIcon icon={['fas', 'link']} />
                                        </InputGroup.Text>
                                      </InputGroup.Append>
                                      <Form.Control.Feedback type="invalid">
                                        {dirty &&
                                          touched.news &&
                                          touched.news[index] &&
                                          touched.news[index].url &&
                                          errors.news &&
                                          errors.news[index] &&
                                          errors.news[index].url}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                  <Form.Group controlId={`news.${index}.source`}>
                                    <InputGroup size="sm" as={Form.Row}>
                                      <Form.Label className="mr-2 font-italic text-gray">Source</Form.Label>
                                      <Field
                                        as={Form.Control}
                                        type="text"
                                        size="sm"
                                        name={`news.${index}.source`}
                                        label="Source"
                                        placeholder="Source"
                                        isInvalid={
                                          dirty &&
                                          touched.news &&
                                          touched.news[index] &&
                                          touched.news[index].source &&
                                          errors.news &&
                                          errors.news[index] &&
                                          errors.news[index].source
                                        }
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        {dirty &&
                                          touched.news &&
                                          touched.news[index] &&
                                          touched.news[index].source &&
                                          errors.news &&
                                          errors.news[index] &&
                                          errors.news[index].source}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                  <Col className="text-right">
                                    <Button variant="outline-danger" size="sm" onClick={() => remove(index)}>
                                      Delete
                                    </Button>
                                  </Col>
                                </Col>
                              </Form.Row>
                            ))}
                          <Col>
                            <StyledFormButton
                              size="sm"
                              variant="secondary"
                              onClick={() => push({ title: '', source: '', url: '' })}
                              disabled={!!errors.news}
                            >
                              <StyledFormIcon $iconName="plus" />
                              Add
                            </StyledFormButton>
                          </Col>
                        </Col>
                      )}
                    </FieldArray>
                    {dirty && <SaveUndoRow onUndo={handleReset} />}
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

export default NewsField;
