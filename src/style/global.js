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
      color: var(--primary-dark);
    `
        : `
      background-color: var(--primary-dark);
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
    font-size: 3rem;
  }

  h1, h2 {
    margin-bottom: 0.25rem;
  }

  label {
    font-size: 0.875rem;
    color: var(--gray-dark);
    margin-bottom: 2px;
  }
  summary {
    width: max-content;
    user-select: none;
  }
  a {
    color: var(--link);
  }

  .card {
    min-height: 200px;
  
    ${(props) =>
      props.theme.mode === 'dark' &&
      `
      background-color: var(--primary-dark);
      border-color: var(--primary);
    `}

    &.clickable {
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        transform: scale(1.1);
      }
    }

    .card-img-top {
      border-radius: unset;
    }
  }

  .list-group-item {
    padding: 0.5rem 1rem;
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
    box-shadow: none;
    outline: 0;
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
    border-color: var(${(props) => (props.theme.mode === 'light' ? '--gray-lighter' : '--primary')});
    border-style: solid;
    border-width: 1px;
    border-radius: 0 !important;
    font-size: max(16px, 1rem);

    &:focus {
      color: inherit;
      box-shadow: none;
      border-width: 2px;
      border-color: var(--link);
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

  .swal2-cancel {
    margin-right: 0.75rem;
  }
`;

export default GlobalStyle;
