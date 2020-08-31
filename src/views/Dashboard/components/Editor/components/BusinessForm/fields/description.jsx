import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { LoadSpinner } from '../../../../../../../components';
import { SaveUndoRow } from '../../SaveUndoRow';
import { StyledForm } from '../style';

const validationSchema = yup.object().shape({
  description: yup.string(),
});

const MissionField = ({ initialValues, onSubmit }) => {
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
        dirty,
        errors,
      }) => {
        const isLoading = isSubmitting || isValidating;

        return (
          <Col className="mb-4">
            <StyledForm onSubmit={handleSubmit}>
              <Form.Group controlId="description">
                <Form.Row className="align-items-center">
                  <Col as={Form.Label}>Description</Col>
                  {dirty && <SaveUndoRow onUndo={handleReset} />}
                </Form.Row>
                <Form.Control
                  as="textarea"
                  name="description"
                  rows="2"
                  value={values.description || ''}
                  onChange={handleChange}
                  disabled={isLoading}
                  isInvalid={!!errors.description}
                  plaintext={!!values.description}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback>
              </Form.Group>
              {isLoading && <LoadSpinner inline />}
            </StyledForm>
          </Col>
        );
      }}
    </Formik>
  );
};

export default MissionField;
