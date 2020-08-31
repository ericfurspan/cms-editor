import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { LoadSpinner } from '../../../../../../../components';
import { SaveUndoRow } from '../../SaveUndoRow';
import { StyledForm } from '../style';

const validationSchema = yup.object().shape({
  name: yup.string().required('Required'),
});

const NameField = ({ initialValues, onSubmit }) => {
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
              <Form.Group controlId="name">
                <Form.Row className="align-items-center">
                  <Col as={Form.Label}>Name</Col>
                  {dirty && <SaveUndoRow onUndo={handleReset} />}
                </Form.Row>
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  disabled={isLoading}
                  isInvalid={!!errors.name}
                  plaintext={!!values.name}
                />
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>
              {isLoading && <LoadSpinner inline />}
            </StyledForm>
          </Col>
        );
      }}
    </Formik>
  );
};

export default NameField;
