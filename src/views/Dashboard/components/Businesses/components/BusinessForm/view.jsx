import React from 'react';
import { Row } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import omitDeep from 'omit-deep-lodash';
import { UPDATE_BUSINESS, UPLOAD_SINGLE_FILE } from '../../../../../../graphql';
import { StyledWrapper } from './style';
import {
  Name,
  Email,
  Logo,
  Caption,
  Description,
  Banner,
  WebLink,
  Gallery,
  News,
  Promotions,
} from './fields';
import { Alert } from '../../../../../../components';

const BusinessForm = ({ business, onUpdateComplete }) => {
  const [updateBusiness] = useMutation(UPDATE_BUSINESS, {
    onCompleted: (data) => {
      onUpdateComplete(data.updateBusiness.business);
    },
  });

  const [uploadLogo] = useMutation(UPLOAD_SINGLE_FILE, {
    onCompleted: (data) => {
      onUpdateComplete({ logo: data.upload });
    },
  });

  const [uploadGallery] = useMutation(UPLOAD_SINGLE_FILE, {
    onCompleted: (data) => {
      onUpdateComplete({ gallery: [...business.gallery, data.upload] });
    },
  });

  const handleFileUpload = (fieldName, { files, validity }) => {
    if (validity.valid) {
      if (files.length > 0) {
        const mutationFn = fieldName === 'logo' ? uploadLogo : uploadGallery;
        try {
          mutationFn({
            variables: {
              file: files[0],
              ref: 'business',
              refId: business.id,
              field: fieldName,
            },
          });
          Alert('notification', { title: 'Saved changes' });
        } catch (e) {
          Alert('error', { title: 'Uh oh...', message: e.message });
        }
      }
    }
  };

  const handleDeleteFile = async (fieldName, fileId) => {
    const url = `${process.env.API_URL}/upload/files/${fileId}`;
    const token = localStorage.getItem('token');

    try {
      await fetch(url, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (fieldName === 'logo') {
        onUpdateComplete({ logo: null });
      } else if (fieldName === 'gallery') {
        const updated = business.gallery.filter((g) => g.id !== fileId);
        onUpdateComplete({ gallery: updated });
      }
      Alert('notification', { title: 'Deleted file' });
    } catch (e) {
      Alert('error', { title: 'Uh oh...', message: e.message });
    }
  };

  const handleBusinessUpdate = (data) => {
    try {
      updateBusiness({
        variables: {
          input: {
            where: { id: business.id },
            data: omitDeep(data, '__typename'),
          },
        },
      });
      Alert('notification', { title: 'Saved changes' });
    } catch (e) {
      Alert('error', { title: 'Uh oh...', message: e.message });
    }
  };

  return (
    <StyledWrapper>
      <Row>
        <Name initialValues={{ name: business.name }} onSubmit={handleBusinessUpdate} />
        <Email initialValues={{ email: business.email }} onSubmit={handleBusinessUpdate} />
      </Row>
      <Logo
        initialValues={{ logo: business.logo }}
        onSubmit={handleFileUpload}
        onDeleteFile={handleDeleteFile}
      />
      <Row>
        <Caption initialValues={{ caption: business.caption }} onSubmit={handleBusinessUpdate} />
        <Banner initialValues={{ banner: business.banner }} onSubmit={handleBusinessUpdate} />
      </Row>
      <Row>
        <Description initialValues={{ description: business.description }} onSubmit={handleBusinessUpdate} />
      </Row>
      <Row>
        <WebLink initialValues={{ web_links: business.web_links }} onSubmit={handleBusinessUpdate} />
      </Row>
      <Row>
        <Promotions initialValues={{ promotions: business.promotions }} onSubmit={handleBusinessUpdate} />
      </Row>
      <Row>
        <News initialValues={{ news: business.news }} onSubmit={handleBusinessUpdate} />
      </Row>
      <Row>
        <Gallery
          initialValues={{ gallery: business.gallery }}
          onSubmit={handleFileUpload}
          onDeleteFile={handleDeleteFile}
        />
      </Row>
    </StyledWrapper>
  );
};

export default BusinessForm;
