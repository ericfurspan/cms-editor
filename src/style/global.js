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
      background-color: var(--gray-light);
      color: var(--black);
    `
        : `
      background-color: var(--primary-dark);
      color: var(--gray-light);
    `}
  }

  body,
  #root {
    height: 100%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif, Roboto, Ubuntu;
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
    font-weight: 500;
  }
  a {
    color: var(--link);
  }

  .badge {
    padding: 0.5em 0.65em;
  }

  .nav-pills .nav-link {
    &:active, &.active {
      background-color: var(--primary);
    }

    &:hover:not(.active) {
      color: var(--gray-dark);
    }
  }

  .dropdown,
  .dropup,
  .dropleft,
  .dropright {
    .dropdown-toggle::before, .dropdown-toggle::after {
      display: none;
    }

    .dropdown-item.active, .dropdown-item:active {
      color: var(--primary);
      background-color: initial;
    }
  }

  .popover {
    min-width: max-content;
  }

  .btn.disabled, button:disabled {
    cursor: not-allowed;
  }

  .input-group > .form-control {
    border-top-right-radius: 0.25rem !important;
    border-bottom-right-radius: 0.25rem !important;
  }

  input, .form-control, .react-json-view {
    color: inherit;
    background-color: var(${(props) =>
      props.theme.mode === 'light' ? '--white' : '--primary'});
    box-shadow: none !important;
    border-radius: 0;
    border-color: var(${(props) =>
      props.theme.mode === 'light' ? '--gray' : '--primary-light'});
    border-style: solid;
    border-width: 1px;
    padding: 6px 12px;

    &:focus {
      color: inherit;
      background-color: inherit;
      border-width: 2px;
    }
  }

  input[type=file] {
    border: 0;
  }
`;

export default GlobalStyle;
