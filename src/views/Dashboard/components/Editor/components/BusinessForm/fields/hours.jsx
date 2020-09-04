import React from 'react';
import { Form, Col, Accordion } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import omit from 'lodash/omit';
import { LoadSpinner, ContextAwareToggle } from '../../../../../../../components';
import { SaveUndoRow } from '../../SaveUndoRow';
import { StyledForm, StyledColGrid } from '../style';
import { cleanOperatingHourLabel } from '../utils';

const timeValidator = () => yup.string().default('00:00');
const validationSchema = yup.object().shape({
  operating_hours: yup.object().shape({
    monday_start: timeValidator(),
    tuesday_start: timeValidator(),
    wednesday_start: timeValidator(),
    thursday_start: timeValidator(),
    friday_start: timeValidator(),
    saturday_start: timeValidator(),
    sunday_start: timeValidator(),
    monday_end: timeValidator(),
    tuesday_end: timeValidator(),
    wednesday_end: timeValidator(),
    thursday_end: timeValidator(),
    friday_end: timeValidator(),
    saturday_end: timeValidator(),
    sunday_end: timeValidator(),
  }),
});

const fieldList = [
  'monday_start',
  'monday_end',
  'tuesday_start',
  'tuesday_end',
  'wednesday_start',
  'wednesday_end',
  'thursday_start',
  'thursday_end',
  'friday_start',
  'friday_end',
  'saturday_start',
  'saturday_end',
  'sunday_start',
  'sunday_end',
];

const OperatingHoursField = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={omit(initialValues, '__typename') || {}}
      enableReinitialize
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleChange, handleReset, isSubmitting, isValidating, values, errors, dirty }) => {
        const isLoading = isSubmitting || isValidating;
        const hasExistingValues = Object.values(values.operating_hours).find((val) => val.length > 0);

        return (
          <Col className="mb-4">
            <StyledForm onSubmit={handleSubmit}>
              <Accordion defaultActiveKey={hasExistingValues ? '0' : null}>
                <Form.Group>
                  <Form.Row className="mb-2 align-items-center position-relative">
                    <Col as={Form.Label}>
                      <ContextAwareToggle eventKey="0">Operating Hours</ContextAwareToggle>
                    </Col>
                    {dirty && <SaveUndoRow onUndo={handleReset} />}
                  </Form.Row>

                  <Accordion.Collapse eventKey="0">
                    <Form.Group>
                      <StyledColGrid cols="3">
                        {fieldList.map((fieldName, idx) => (
                          <Form.Row key={fieldName}>
                            {idx % 2 === 0 && (
                              <Col>
                                <Form.Label as="small">{cleanOperatingHourLabel(fieldName)}</Form.Label>
                              </Col>
                            )}
                            <Col md="auto" className="mb-2">
                              <Form.Control
                                type="time"
                                step="1800"
                                name={`operating_hours.${fieldName}`}
                                value={values.operating_hours[fieldName] || ''}
                                onChange={handleChange}
                                disabled={isLoading}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.operating_hours && errors.operating_hours[fieldName]}
                              </Form.Control.Feedback>
                            </Col>
                          </Form.Row>
                        ))}
                      </StyledColGrid>
                    </Form.Group>
                  </Accordion.Collapse>
                  {isLoading && <LoadSpinner inline />}
                </Form.Group>
              </Accordion>
            </StyledForm>
          </Col>
        );
      }}
    </Formik>
  );
};

export default OperatingHoursField;
