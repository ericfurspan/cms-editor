import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { NotificationAlertConfig, ErrorAlertConfig, ConfirmAlertConfig } from './variants';

/* Wraps the native sweetalert2 implementation with support for React elements as content */
const ReactSwal = withReactContent(
  Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-secondary',
    },
    buttonsStyling: false,
  })
);

/**
 * Displays a sweetalert2 popup dialog
 * @param {String} variant `error`, `confirm`, or `notification`.
 * @param {Object} alertOptions options for sweetalert2 configuration. see specific options for each variant.
 */
const Alert = (variant, { ...alertOptions }) => {
  if (variant === 'error') {
    ReactSwal.fire(ErrorAlertConfig(alertOptions));
  }

  if (variant === 'confirm') {
    ReactSwal.fire(ConfirmAlertConfig(alertOptions));
  }

  if (variant === 'notification') {
    ReactSwal.fire(NotificationAlertConfig(alertOptions));
  }
};

export default Alert;
