import React, { useState } from 'react';
import { Form, Col, Figure } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoadSpinner } from '../../../../../../../components';
import { StyledForm, StyledAbsContainer } from '../style';
import { SaveUndoRow } from '../../SaveUndoRow';

const validationSchema = yup.object().shape({
  logo: yup.object(),
});

const LogoField = ({ initialValues, onSubmit }) => {
  const [selectedImageBlob, setSelectedImageBlob] = useState({});

  const handleFileInput = (event) => {
    const {
      files: [file],
    } = event.target;
    const blob = URL.createObjectURL(file);

    setSelectedImageBlob({ url: blob, name: file.name });
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      enableReinitialize
      className="mb-4"
    >
      {({ isSubmitting, isValidating, values }) => {
        const isLoading = isSubmitting || isValidating;
        const blobPreview = selectedImageBlob.url && selectedImageBlob;

        let remoteImage;
        if (values.logo) {
          remoteImage =
            process.env.NODE_ENV !== 'production'
              ? process.env.API_URL + values.logo.url
              : values.logo.url;
        }

        const handleSubmit = (event) => {
          event.preventDefault();
          event.stopPropagation();
          const fileInput = event.target.elements.logo;
          onSubmit('logo', fileInput);
          setSelectedImageBlob({});
        };

        return (
          <Col className="mb-4">
            <StyledForm onSubmit={handleSubmit}>
              <Form.Group
                controlId="logo"
                className="d-flex flex-column align-items-center w-100"
              >
                <Form.Row className="w-100 align-items-center">
                  <Col as={Form.Label}>Logo</Col>
                  {blobPreview && <SaveUndoRow onUndo={() => setSelectedImageBlob({})} />}
                </Form.Row>
                <Form.File
                  name="logo"
                  label="Logo"
                  custom
                  className="h-100 w-100 mb-1 text-center"
                >
                  {blobPreview ? (
                    <Figure.Image
                      alt="Selected image file"
                      src={blobPreview.url}
                      height={150}
                      width={150}
                      rounded
                      className="d-block m-auto"
                    />
                  ) : (
                    <>
                      {values.logo && (
                        <>
                          <Figure.Image
                            alt="Logo image"
                            src={remoteImage}
                            width={150}
                            height={150}
                            rounded
                          />
                        </>
                      )}
                      {!values.logo && (
                        <>
                          <FontAwesomeIcon
                            icon={['fas', 'image']}
                            size="3x"
                            color="var(--gray-light)"
                          />
                          <Form.Text muted>
                            Click to select an asset or drag &amp; drop a file in this area
                          </Form.Text>
                        </>
                      )}
                    </>
                  )}
                  <StyledAbsContainer
                    as={Form.File.Input}
                    accept="image/png,image/jpeg,image/gif,image/svg"
                    onChange={handleFileInput}
                  />
                </Form.File>

                <Form.Text muted className="font-italic">
                  supported files: PNG, JPEG, GIF, SVG
                </Form.Text>
              </Form.Group>
              {isLoading && <LoadSpinner inline />}
            </StyledForm>
          </Col>
        );
      }}
    </Formik>
  );
};

export default LogoField;
