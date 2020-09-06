import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
    height: 100%;
  }

  @media screen and (max-width: 600px) {
    html {
      font-size: 14px;
    }
  }

  body {
    ${(props) =>
      props.theme.mode === 'light'
        ? `
      background-color: var(--white-darker);
      color: var(--black);
    `
        : `
      background-color: var(--primary);
      color: var(--white);
    `}
  }

  body,
  #root {
    height: 100%;
    overflow: hidden;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Roboto, Ubuntu, sans-serif;
  }

  h1 {
    margin-bottom: 0;
  }

  label {
    font-size: 0.875rem;
    color: var(--gray);
    margin-bottom: 2px;
  }
  summary {
    width: max-content;
    user-select: none;
  }
  a {
    color: var(--link);
  }

  .dropdown,
  .dropup,
  .dropleft,
  .dropright {
    .dropdown-toggle::before, .dropdown-toggle::after {
      display: none;
    }

    .dropdown-item {
      font-size: 0.875rem;
    }

    .dropdown-item.active, .dropdown-item:active {
      color: var(--white);
      background-color: var(--link);
    }
  }

  .popover {
    min-width: max-content;
  }

  .btn:focus {
    box-shadow: 0 0 0 0.1rem rgba(21, 31, 43, 0.25);
  }

  .btn.disabled, button:disabled {
    cursor: not-allowed;
  }

  input:disabled, input[readonly] {
    background: var(${(props) => (props.theme.mode === 'light' ? '--secondary' : '--primary')}) !important;
    border: 0;
  }

  input, textarea, .form-control, .react-json-view {
    color: inherit !important;
    background-color: var(${(props) => (props.theme.mode === 'light' ? '--white' : '--primary')});;
    box-shadow: none !important;
    outline: 0 !important;
    border-color: var(${(props) => (props.theme.mode === 'light' ? '--gray-lighter' : '--primary-light')});
    border-style: solid;
    border-width: 1px;
    border-radius: 0 !important;
    font-size: max(16px, 1rem);

    &:focus {
      color: inherit;
      box-shadow: none;
      border-width: 2px;
      border-color: var(--info);
      background-color: var(${(props) => (props.theme.mode === 'light' ? '--white' : '--primary')});
    }

    &::placeholder {
      font-size: 0.875rem;
    }
  }

  .form-control-plaintext {
    resize: none;
    padding: 6px 0;
    transition: padding 0.3s;

    &:focus {
      padding: 6px 12px;
      resize: vertical;
    }
  }

  .custom-file-input {
    margin-left: auto;
    margin-right: auto;
    width: auto;
    cursor: copy;
  }

  .swal2-popup {
    box-shadow: 0 0 0.15em var(--white-darker) !important;
  }
`;

export default GlobalStyle;
