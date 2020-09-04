import styled from 'styled-components';
import ContentLoader from 'react-content-loader';

export const StyledLoader = styled(ContentLoader).attrs((props) => ({
  title: props.title,
  backgroundColor: props.theme.mode === 'light' ? 'var(--gray-lighter)' : 'var(--gray-light)',
  foregroundColor: props.theme.mode === 'light' ? 'var(--gray-lighter)' : 'var(--gray)',
}))`
  margin: 1rem;
  padding: 2rem;
  height: 100%;
  width: calc(100% - 2.5rem);
`;
