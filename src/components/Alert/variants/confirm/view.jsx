import React from 'react';
import {
  StyledTitleRow,
  StyledTitleText,
  StyledContent,
  StyledContentText,
  StyledFooter,
  StyledIcon,
} from '../style';

/**
 * Returns a sweetalert2 configuration object tailored for a Confirmation alert
 * @param {String} title alert title
 * @param {String} message alert message
 * @param {String} footer footer message
 * @param {String} confirmBtnText text content of the confirm button
 * @param {Function} preConfirmCallback callback function to execute after user confirmation
 * @returns {Object} sweetalert2 config object https://sweetalert2.github.io/#configuration
 */
const ConfirmAlertConfig = ({ title, message, footer, confirmBtnText, preConfirmCallback }) => {
  const TitleBar = () => (
    <StyledTitleRow>
      <StyledTitleText>{title}</StyledTitleText>
    </StyledTitleRow>
  );

  const Content = () => (
    <StyledContent>
      <StyledContentText>{message}</StyledContentText>
    </StyledContent>
  );

  const Footer = () => (
    <StyledFooter>
      <StyledIcon size="1.25rem" color="var(--dark)" icon={['fas', 'info-circle']} />
      <span className="ml-2">{footer}</span>
    </StyledFooter>
  );

  return {
    position: 'center',
    title: <TitleBar />,
    html: <Content />,
    footer: <Footer />,
    preConfirm: preConfirmCallback,
    reverseButtons: true,
    confirmButtonText: confirmBtnText,
    showCancelButton: true,
    showCloseButton: true,
    showLoaderOnConfirm: true,
    allowOutsideClick: false,
    allowEnterKey: false,
  };
};

export default ConfirmAlertConfig;
