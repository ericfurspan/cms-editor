import React, { useState } from 'react';
import { Form, Col, Figure } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { LoadSpinner, ImageCarousel } from '../../../../../../../components';
import { StyledForm, StyledAbsContainer } from '../style';
import { SaveUndoRow } from '../../SaveUndoRow';

const validationSchema = yup.object().shape({
  gallery: yup.array(),
});

const GalleryField = ({ initialValues, onSubmit }) => {
  const [selectedFileBlob, setSelectedFileBlob] = useState({});

  const handleFileInput = (event) => {
    const {
      files: [file],
    } = event.target;
    const blob = URL.createObjectURL(file);

    setSelectedFileBlob({ url: blob, name: file.name });
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      enableReinitialize
    >
      {({ isSubmitting, isValidating, values }) => {
        const isLoading = isSubmitting || isValidating;
        const blobPreview = selectedFileBlob.url && selectedFileBlob;
        const galleryPreview = values.gallery.length > 0 && values.gallery;

        const handleSubmit = (event) => {
          event.preventDefault();
          event.stopPropagation();
          const fileInput = event.target.elements.gallery;
          onSubmit('gallery', fileInput);
          setSelectedFileBlob({});
        };

        return (
          <Col className="mb-4">
            <StyledForm onSubmit={handleSubmit}>
              <Form.Group
                controlId="gallery"
                className="d-flex flex-column w-100 align-items-center"
              >
                <Form.Row className="w-100">
                  <Col as={Form.Label} className="p-0">
                    Gallery
                  </Col>
                  {blobPreview && <SaveUndoRow onUndo={() => setSelectedFileBlob({})} />}
                </Form.Row>
                <Form.File
                  name="gallery"
                  label="Gallery"
                  custom
                  className="h-100 w-100 mb-1 text-center"
                >
                  {blobPreview ? (
                    <Figure.Image
                      className="d-block m-auto"
                      alt="Selected image file"
                      src={blobPreview.url}
                      height={150}
                      width={150}
                    />
                  ) : (
                    <>
                      {galleryPreview && (
                        <ImageCarousel
                          images={galleryPreview.map((img) => ({
                            src: `${process.env.API_URL}${img.url}`,
                            ...img,
                          }))}
                        />
                      )}
                      {!galleryPreview && (
                        <Form.Text className="m-4">Click to select a file</Form.Text>
                      )}
                    </>
                  )}
                  <StyledAbsContainer
                    as={Form.File.Input}
                    accept="image/png,image/jpeg,image/gif,image/svg"
                    onChange={handleFileInput}
                  />
                </Form.File>

                <Form.Text muted>Supported file types: PNG, JPEG, GIF, SVG</Form.Text>
              </Form.Group>
              {isLoading && <LoadSpinner inline />}
            </StyledForm>
          </Col>
        );
      }}
    </Formik>
  );
};

export default GalleryField;
