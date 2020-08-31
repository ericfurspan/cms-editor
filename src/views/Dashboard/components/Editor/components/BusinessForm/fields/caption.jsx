import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { LoadSpinner } from '../../../../../../../components';
import { SaveUndoRow } from '../../SaveUndoRow';
import { StyledForm } from '../style';

const validationSchema = yup.object().shape({
  caption: yup.string().nullable().default(''),
});

const CaptionField = ({ initialValues, onSubmit }) => {
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
              <Form.Group controlId="caption">
                <Form.Row className="align-items-center">
                  <Col as={Form.Label}>Caption</Col>
                  {dirty && <SaveUndoRow onUndo={handleReset} />}
                </Form.Row>

                <Form.Control
                  type="text"
                  name="caption"
                  value={values.caption || ''}
                  onChange={handleChange}
                  disabled={isLoading}
                  isInvalid={!!errors.caption}
                  plaintext={!!values.caption}
                />
                <Form.Control.Feedback type="invalid">{errors.caption}</Form.Control.Feedback>
              </Form.Group>
              {isLoading && <LoadSpinner inline />}
            </StyledForm>
          </Col>
        );
      }}
    </Formik>
  );
};

export default CaptionField;
