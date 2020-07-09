import styled from 'styled-components';
import ReactJson from 'react-json-view';
import { Button, Popover, Form } from 'react-bootstrap';

export const StyledForm = styled(Form)`
  background-color: var(--white);
  padding: 1.5rem;
  box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05),
    0 2px 4px 0 rgba(63, 63, 68, 0.15);
`;

export const StyledJSONField = styled(ReactJson).attrs(() => ({
  displayDataTypes: false,
  enableClipboard: false,
  iconStyle: 'triangle',
  collapsed: true,
  theme: 'grayscale:inverted',
  style: {
    padding: '0.75rem',
    borderRadius: '0.25rem',
    fontSize: '0.875rem',
    overflow: 'auto',
  },
}))``;

export const StyledActionButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 2rem;
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
