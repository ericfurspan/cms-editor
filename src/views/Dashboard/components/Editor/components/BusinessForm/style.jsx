import styled from 'styled-components';
import ReactJson from 'react-json-view';
import { Button, Popover, Form, Badge } from 'react-bootstrap';

export const StyledForm = styled(Form)`
  padding: 1.5rem;

  ${(props) =>
    props.theme.mode === 'light'
      ? `
    box-shadow: 0 0 0 1px rgba(63,63,68,0.1), 0 2px 16px 0 rgba(63,63,68,0.2);
  `
      : `
    background-color: var(--primary-light);
  `}
`;

export const StyledJSONField = styled(ReactJson).attrs((props) => ({
  displayDataTypes: false,
  enableClipboard: false,
  iconStyle: 'triangle',
  collapsed: true,
  theme: props.theme.mode === 'light' ? 'grayscale:inverted' : 'grayscale',
  style: {
    padding: '0.75rem',
    borderRadius: '0.25rem',
    fontSize: '0.875rem',
  },
}))``;

export const StyledActionButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledActionButton = styled(Button)`
  margin-left: 1.25rem;
  min-width: ${(props) => (props.$wide ? '112px' : '80px')};

  & svg {
    margin-right: 0.375rem;
  }
`;

export const StyledPopoverTitle = styled(Popover.Title)`
  color: var(--gray-dark);
  background-color: var(--gray-light);
`;

export const StyledPopoverContent = styled(Popover.Content)`
  padding: 0.75rem;
  color: var(--primary-dark);
  margin-bottom: 0;
`;

export const StyledPopoverTarget = styled(Form.Text)`
  position: absolute;
  right: 0.5rem;
  cursor: help;
  outline: 0;

  & span {
    font-weight: 200;
  }

  & svg {
    color: var(--info);
    font-size: 0.875rem;
  }
`;

export const StyledTopBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2rem;
  min-height: 72px;
`;

export const StyledLastUpdate = styled(Badge)`
  background-color: transparent;
  font-family: monospace;
  font-size: 1rem;
`;
