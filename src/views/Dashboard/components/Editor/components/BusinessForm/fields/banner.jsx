import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { LoadSpinner } from '../../../../../../../components';
import { SaveUndoRow } from '../../SaveUndoRow';
import { StyledForm } from '../style';

const validationSchema = yup.object().shape({
  banner: yup.string().nullable().default(''),
});

const BannerField = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      enableReinitialize
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleChange, handleReset, isSubmitting, isValidating, values, dirty, errors }) => {
        const isLoading = isSubmitting || isValidating;

        return (
          <Col>
            <StyledForm onSubmit={handleSubmit}>
              <Form.Group controlId="banner">
                <Form.Row className="align-items-center">
                  <Col as={Form.Label}>Banner</Col>
                </Form.Row>

                <Form.Control
                  type="text"
                  name="banner"
                  value={values.banner || ''}
                  onChange={handleChange}
                  disabled={isLoading}
                  isInvalid={!!errors.banner}
                  plaintext={!!values.banner}
                />
                <Form.Control.Feedback type="invalid">{errors.banner}</Form.Control.Feedback>
              </Form.Group>
              {dirty && <SaveUndoRow onUndo={handleReset} />}
              {isLoading && <LoadSpinner inline />}
            </StyledForm>
          </Col>
        );
      }}
    </Formik>
  );
};

export default BannerField;
