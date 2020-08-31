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
  const initialWithDefaults = initialValues.news
    ? [...initialValues.news, { title: '', source: '', url: '' }]
    : { title: '', source: '', url: '' };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ news: initialWithDefaults }}
      enableReinitialize
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleReset, values, dirty, errors }) => {
        const hasExistingValues = initialValues.news && initialValues.news.length > 0;

        return (
          <Col className="mb-4">
            <StyledForm onSubmit={handleSubmit}>
              <Accordion defaultActiveKey={hasExistingValues ? '0' : null}>
                <Form.Row className="mb-3 align-items-baseline">
                  <Col as={Form.Label}>
                    <ContextAwareToggle eventKey="0">News</ContextAwareToggle>
                  </Col>
                  {dirty && <SaveUndoRow onUndo={handleReset} />}
                </Form.Row>
                <Accordion.Collapse eventKey="0">
                  <FieldArray name="news">
                    {({ _insert, remove, push }) => (
                      <Col>
                        {values.news &&
                          values.news.length > 0 &&
                          values.news.map((_, index) => (
                            <Form.Row className="align-items-baseline" key={index}>
                              <Col xs={3}>
                                <Form.Group controlId={`news.${index}.title`}>
                                  <InputGroup size="sm">
                                    <Field
                                      as={Form.Control}
                                      type="text"
                                      size="sm"
                                      name={`news.${index}.title`}
                                      label="Title"
                                      placeholder="Title"
                                      isInvalid={
                                        errors.news &&
                                        errors.news[index] &&
                                        errors.news[index].title
                                      }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {errors.news &&
                                        errors.news[index] &&
                                        errors.news[index].title}
                                    </Form.Control.Feedback>
                                  </InputGroup>
                                </Form.Group>
                              </Col>
                              <Col xs={3}>
                                <Form.Group controlId={`news.${index}.source`}>
                                  <InputGroup size="sm">
                                    <Field
                                      as={Form.Control}
                                      type="text"
                                      size="sm"
                                      name={`news.${index}.source`}
                                      label="Source"
                                      placeholder="Source"
                                      isInvalid={
                                        errors.news &&
                                        errors.news[index] &&
                                        errors.news[index].source
                                      }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {errors.news &&
                                        errors.news[index] &&
                                        errors.news[index].source}
                                    </Form.Control.Feedback>
                                  </InputGroup>
                                </Form.Group>
                              </Col>
                              <Col>
                                <Form.Group controlId={`news.${index}.url`}>
                                  <InputGroup size="sm">
                                    <Form.Control
                                      as={Field}
                                      type="url"
                                      size="sm"
                                      name={`news.${index}.url`}
                                      label="URL"
                                      placeholder="URL"
                                      isInvalid={
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
                                      {errors.news &&
                                        errors.news[index] &&
                                        errors.news[index].url}
                                    </Form.Control.Feedback>
                                  </InputGroup>
                                </Form.Group>
                              </Col>
                              <Col xs={1}>
                                <Button
                                  variant="outline-danger"
                                  size="sm"
                                  onClick={() => remove(index)}
                                >
                                  Delete
                                </Button>
                              </Col>
                            </Form.Row>
                          ))}
                        <Col className="mt-3">
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
