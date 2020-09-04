import styled from 'styled-components';
import { Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledCol = styled(Col)`
  margin-bottom: 0.25rem;
  text-align: right;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const StyledButton = styled(Button)`
  margin: ${(props) => (props.$noMargin ? '0' : '0 0 0 0.5rem')};
  min-width: ${(props) => (props.$iconOnly ? '32px' : '64px')};
  ${(props) =>
    props.$color &&
    `
    color: ${props.$color};
  `}
`;

export const StyledIcon = styled(FontAwesomeIcon).attrs((props) => ({
  icon: ['fas', props.$iconName],
  size: props.$size || 'sm',
}))`
  margin-right: ${(props) => (props.$noSiblings ? '0' : '0.375rem')};
`;
