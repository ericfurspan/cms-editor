import styled from 'styled-components';
import ReactJson from 'react-json-view';
import { Button, Popover, Form } from 'react-bootstrap';

export const StyledJSONField = styled(ReactJson).attrs(() => ({
  displayDataTypes: false,
  enableClipboard: false,
  iconStyle: 'triangle',
  style: {
    padding: '0.75rem',
    borderRadius: '0.25rem',
    fontSize: '0.875rem',
    overflow: 'auto',
  },
}))``;

export const StyledActionButtonGroup = styled.div`
  position: fixed;
  bottom: 16px;
  right: 24px;
  display: flex;
  align-items: center;
`;

export const StyledActionButton = styled(Button)`
  width: 56px;
  height: 56px;
  font-size: 21px;
  border-radius: 100%;
  margin-left: 1.25rem;
`;

export const StyledPopoverTitle = styled(Popover.Title)`
  color: var(--gray);
  background-color: var(--light);
`;

export const StyledPopoverContent = styled(Popover.Content)`
  padding: 0.75rem;
  color: var(--dark);
  margin-bottom: 0;
`;

export const StyledPopoverTarget = styled(Form.Text)`
  color: var(--dark);
  position: absolute;
  right: 1rem;
  cursor: help;
  outline: 0;

  & span {
    font-weight: 200;
  }

  & svg {
    color: var(--info);
  }
`;
