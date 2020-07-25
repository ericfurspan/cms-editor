import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const StyledSubmitBtn = styled(Button).attrs((props) => ({
  variant: props.theme.mode === 'light' ? 'primary' : 'secondary',
}))``;

export const StyledLinkButton = styled(Button).attrs((props) => ({
  variant:
    props.theme.mode === 'light' ? 'outline-primary' : 'outline-secondary',
}))``;
