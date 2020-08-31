import React from 'react';
import { useMutation } from '@apollo/client';
import omitDeep from 'omit-deep-lodash';
import { UPDATE_BUSINESS, UPLOAD_SINGLE_FILE } from '../../../../../../graphql';
import { StyledWrapper } from './style';
import { Name, Email, Logo, Caption, Description, WebLink, Gallery, News } from './fields';
import { Alert } from '../../../../../../components';

const BusinessForm = ({ business, onUpdateComplete }) => {
  const [updateBusiness] = useMutation(UPDATE_BUSINESS, {
    onCompleted: (data) => {
      onUpdateComplete(data.updateBusiness.business);
    },
  });

  const [uploadSingleFile] = useMutation(UPLOAD_SINGLE_FILE, {
    onCompleted: (data) => {
      onUpdateComplete({ logo: data.upload });
    },
  });

  const handleFileUpload = (fieldName, { files, validity }) => {
    if (validity.valid) {
      if (files.length > 0) {
        try {
          uploadSingleFile({
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
      <Name initialValues={{ name: business.name }} onSubmit={handleBusinessUpdate} />
      <Email initialValues={{ email: business.email }} onSubmit={handleBusinessUpdate} />
      <Logo initialValues={{ logo: business.logo }} onSubmit={handleFileUpload} />
      <Caption initialValues={{ caption: business.caption }} onSubmit={handleBusinessUpdate} />
      <Description
        initialValues={{ description: business.description }}
        onSubmit={handleBusinessUpdate}
      />
      <News initialValues={{ news: business.news }} onSubmit={handleBusinessUpdate} />
      <WebLink
        initialValues={{ web_links: business.web_links }}
        onSubmit={handleBusinessUpdate}
      />
      <Gallery initialValues={{ gallery: business.gallery }} onSubmit={handleFileUpload} />

      {/* <Hours
        initialValues={{ operating_hours: business.operating_hours || {} }}
        onSubmit={handleBusinessUpdate}
      /> */}
    </StyledWrapper>
  );
};

export default BusinessForm;
