import React from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {
  StyledIcon,
  StyledTitleRow,
  StyledTitleText,
  StyledContent,
  StyledContentText,
} from '../style';

/**
 * Returns a sweetalert2 configuration object tailored for a Notification alert
 * @param {String} title title
 * @param {String} message message
 * @returns {Object} sweetalert2 config object https://sweetalert2.github.io/#configuration
 */
const NotificationAlertConfig = ({ title, message }) => {
  const TitleBar = () => (
    <StyledTitleRow>
      <StyledIcon icon={faCheckCircle} color="var(--success)" />
      <StyledTitleText>{title}</StyledTitleText>
    </StyledTitleRow>
  );

  const Content = () => (
    <StyledContent>
      <StyledContentText>{message}</StyledContentText>
    </StyledContent>
  );

  return {
    position: 'top-end',
    toast: true,
    timer: 5000,
    title: <TitleBar />,
    html: message && <Content />,
    showCancelButton: false,
    showCloseButton: true,
    showConfirmButton: false,
  };
};

export default NotificationAlertConfig;
