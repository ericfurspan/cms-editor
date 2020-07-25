import { gql } from '@apollo/client';

export const UPLOAD_FILE = gql`
  mutation($file: Upload!) {
    uploadFile(file: $file) {
      success
    }
  }
`;
