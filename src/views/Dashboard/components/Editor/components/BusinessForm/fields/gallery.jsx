import React, { useState } from 'react';
import { Form, Col, Figure } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { LoadSpinner, ImageCarousel, FileUploadPlaceholder } from '../../../../../../../components';
import { StyledForm, StyledAbsContainer } from '../style';
import { SaveUndoRow } from '../../SaveUndoRow';

const validationSchema = yup.object().shape({
  gallery: yup.array(),
});

const GalleryField = ({ initialValues, onSubmit, onDeleteFile }) => {
  const [selectedImageBlob, setSelectedImageBlob] = useState({});

  const handleFileInput = (event) => {
    const {
      files: [file],
    } = event.target;
    const blob = URL.createObjectURL(file);

    setSelectedImageBlob({ url: blob, name: file.name });
  };

  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} enableReinitialize>
      {({ isSubmitting, isValidating, values }) => {
        const isLoading = isSubmitting || isValidating;
        const blobPreview = selectedImageBlob.url && selectedImageBlob;
        const remoteImages =
          values.gallery.length > 0 &&
          values.gallery.map((img) => {
            const src = process.env.NODE_ENV !== 'production' ? process.env.API_URL + img.url : img.url;
            return { src, ...img };
          });

        const handleSubmit = (event) => {
          event.preventDefault();
          event.stopPropagation();
          const fileInput = event.target.elements.gallery;
          onSubmit('gallery', fileInput);
          setSelectedImageBlob({});
        };

        return (
          <Col>
            <StyledForm onSubmit={handleSubmit}>
              <Form.Group controlId="gallery" className="d-flex flex-column w-100 align-items-center">
                <Form.Row className="w-100">
                  <Col as={Form.Label} className="p-0">
                    Gallery
                  </Col>
                </Form.Row>
                <Form.File name="gallery" label="Gallery" custom className="h-100 w-100 mb-1 text-center">
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
                      {remoteImages && <ImageCarousel images={remoteImages} onRemoveImage={onDeleteFile} />}
                      {!remoteImages && <FileUploadPlaceholder icon="images" />}
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
              {blobPreview && <SaveUndoRow onUndo={() => setSelectedImageBlob({})} />}
              {isLoading && <LoadSpinner inline />}
            </StyledForm>
          </Col>
        );
      }}
    </Formik>
  );
};

export default GalleryField;
