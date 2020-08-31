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
      color: var(--primary);
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
    font-family: Helvetica, -apple-system,BlinkMacSystemFont,Helvetica Neue,Arial,sans-serif,Roboto,SegoeUI,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  }

  h1 {
    font-size: 2.75rem;
  }
  h2 {
    font-size: 2rem;
    font-weight: 400;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.25rem;
    font-weight: 400;
  }
  h5 {
    font-size: 1rem;
  }
  h6 {
    font-size: 0.875rem;
  }
  pre {
    font-size: 0.75rem;
  }
  label {
    font-size: 0.875rem;
    color: var(${(props) => (props.theme.mode === 'light' ? '--gray-dark' : '--gray')});
    margin-bottom: 0.25rem;
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
      background-color: var(--info-dark);
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
    background: var(${(props) =>
      props.theme.mode === 'light' ? '--secondary' : '--primary'}) !important;
    border: 0;
  }

  input, textarea, .form-control, .react-json-view {
    color: inherit !important;
    background-color: var(${(props) =>
      props.theme.mode === 'light' ? '--white' : '--primary'});;
    box-shadow: none !important;
    outline: 0 !important;
    border-color: var(${(props) =>
      props.theme.mode === 'light' ? '--gray-light' : '--primary-light'});
    border-style: solid;
    border-width: 1px;
    font-size: max(16px, 1em);

    &:focus {
      color: inherit;
      box-shadow: none;
      border-width: 2px;
      border-color: var(--info-dark);
      background-color: var(${(props) =>
        props.theme.mode === 'light' ? '--white' : '--primary'});
    }
  }

  .form-control-plaintext {
    resize: none;
    padding: 2px 4px;
    transition all 0.2s;

    &:focus {
      padding: 6px 12px;
      resize: vertical;
    }
  }

  .invalid-feedback {
    position: absolute;
  }

  .custom-file-input {
    margin-left: auto;
    margin-right: auto;
    width: auto;
    cursor: copy;
  }
`;

export default GlobalStyle;
