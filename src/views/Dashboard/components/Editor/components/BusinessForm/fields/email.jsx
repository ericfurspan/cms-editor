import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { LoadSpinner } from '../../../../../../../components';
import { SaveUndoRow } from '../../SaveUndoRow';
import { StyledForm } from '../style';

const validationSchema = yup.object().shape({
  email: yup.string().email('Must be a valid email'),
});

const EmailField = ({ initialValues, onSubmit }) => {
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
              <Form.Group controlId="email">
                <Form.Row className="align-items-center">
                  <Col as={Form.Label}>Email</Col>
                  {dirty && <SaveUndoRow onUndo={handleReset} />}
                </Form.Row>

                <Form.Control
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  plaintext={!!values.email}
                  isInvalid={!!errors.email}
                  disabled={isLoading}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>
              {isLoading && <LoadSpinner inline />}
            </StyledForm>
          </Col>
        );
      }}
    </Formik>
  );
};

export default EmailField;
