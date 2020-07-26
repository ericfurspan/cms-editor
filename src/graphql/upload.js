import { gql } from '@apollo/client';

export const UPLOAD_FILE = gql`
  mutation($file: Upload!, $refId: ID!, $ref: String, $field: String) {
    upload(file: $file, refId: $refId, ref: $ref, field: $field) {
      url
      previewUrl
      name
      id
    }
  }
`;

export const UPLOAD_MULTIPLE_FILES = gql`
  mutation($files: [Upload!]!, $refId: ID!, $ref: String, $field: String) {
    multipleUpload(files: $files, refId: $refId, ref: $ref, field: $field) {
      url
      previewUrl
      name
      id
    }
  }
`;
