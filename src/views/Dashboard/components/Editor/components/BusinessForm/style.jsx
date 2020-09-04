import styled from 'styled-components';
import ReactJson from 'react-json-view';
import { Button } from 'react-bootstrap';
import { Form } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BREAKPOINTS from '../../../../../../utils/breakpoints';

export const StyledWrapper = styled.div`
  padding: 1rem 2rem;
  position: relative;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    padding: 1rem;
    margin: 0;
  }
`;

export const StyledForm = styled(Form)``;

export const StyledFormButton = styled(Button)`
  margin: ${(props) => (props.$noMargin ? '0' : '0 0 0 0.5rem')};
  min-width: ${(props) => (props.$iconOnly ? '36px' : '64px')};
  ${(props) =>
    props.$color &&
    `
    color: ${props.$color};
  `}
`;

export const StyledFormIcon = styled(FontAwesomeIcon).attrs((props) => ({
  icon: ['fas', props.$iconName],
  size: props.$size || 'sm',
}))`
  margin-right: ${(props) => (props.$noSiblings ? '0' : '0.375rem')};
`;

export const StyledAbsContainer = styled.div`
  height: inherit;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: transparent;
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

export const StyledFileSubmitBtn = styled(Button)`
  & svg {
    margin-right: 0.375rem;
  }
`;

export const StyledDeleteFileBtn = styled(Button)`
  position: absolute;
  right: 0;
  top: 50%;

  & svg {
    margin-right: 0.375rem;
  }
`;

export const StyledColGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, minmax(auto, 300px));
  column-gap: 0.75rem;
  row-gap: 0.25rem;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    display: inline;
  }
`;
