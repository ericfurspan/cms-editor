import React from 'react';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import {
  StyledIcon,
  StyledTitleRow,
  StyledTitleText,
  StyledContent,
  StyledContentText,
} from '../style';

/**
 * Returns a sweetalert2 configuration object tailored for a Confirmation alert
 * @param {String} title alert title
 * @param {String} message alert message
 * @param {String} confirmBtnText text content of the confirm button
 * @param {Function} preConfirmCallback callback function to execute after user confirmation
 * @returns {Object} sweetalert2 config object https://sweetalert2.github.io/#configuration
 */
const ConfirmAlertConfig = ({ title, message, confirmBtnText, preConfirmCallback }) => {
  const TitleBar = () => (
    <StyledTitleRow>
      <StyledIcon icon={faQuestionCircle} />
      <StyledTitleText>{title}</StyledTitleText>
    </StyledTitleRow>
  );

  const Content = () => (
    <StyledContent>
      <StyledContentText>{message}</StyledContentText>
    </StyledContent>
  );

  return {
    position: 'center',
    title: <TitleBar />,
    html: <Content />,
    preConfirm: preConfirmCallback,
    reverseButtons: true,
    confirmButtonText: confirmBtnText,
    showCancelButton: true,
    showCloseButton: true,
    confirmButtonColor: 'var(--success)',
    cancelButtonColor: 'var(--gray)',
    showLoaderOnConfirm: true,
    allowOutsideClick: false,
    allowEnterKey: false,
  };
};

export default ConfirmAlertConfig;
