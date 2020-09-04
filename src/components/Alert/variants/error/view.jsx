import React from 'react';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import {
  StyledIcon,
  StyledTitleRow,
  StyledTitleText,
  StyledContent,
  StyledDetailContent,
  StyledContentText,
} from '../style';

/**
 * Returns a SweetAlert2 configuration object tailored for an Error alert
 * @param {String} title alert title
 * @param {String} errorCode error code
 * @param {String} errorMessage error message
 * @param {String} helpText guidance text to resolve error
 * @param {Function} closeCallback optional callback to call onAfterClose
 * @returns {Object} sweetalert2 config object https://sweetalert2.github.io/#configuration
 */
const ErrorAlertConfig = ({ title, errorCode = '', errorMessage = '', helpText, closeCallback }) => {
  const errorDescription = `${errorCode} \n ${errorMessage}`;

  const TitleBar = () => (
    <StyledTitleRow>
      <StyledIcon warning="true" icon={faExclamationTriangle} />
      <StyledTitleText>{title}</StyledTitleText>
    </StyledTitleRow>
  );

  const Content = () => (
    <StyledContent>
      <StyledContentText>{helpText}</StyledContentText>
      <details>
        <summary>
          <pre>Error code</pre>
        </summary>
        <StyledDetailContent>
          <code>{errorDescription}</code>
        </StyledDetailContent>
      </details>
    </StyledContent>
  );

  return {
    position: 'center',
    title: <TitleBar />,
    html: <Content />,
    showConfirmButton: false,
    showCloseButton: true,
    allowOutsideClick: false,
    allowEnterKey: false,
    onAfterClose: closeCallback,
  };
};

export default ErrorAlertConfig;
