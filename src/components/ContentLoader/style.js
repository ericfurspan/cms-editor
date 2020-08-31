import styled from 'styled-components';
import ContentLoader from 'react-content-loader';

export const StyledLoader = styled(ContentLoader).attrs((props) => ({
  backgroundColor: props.theme.mode === 'light' ? 'var(--gray-lightest)' : 'var(--primary)',
  foregroundColor: props.theme.mode === 'light' ? 'var(--gray-light)' : 'var(--primary-light)',
}))`
  margin: 1rem;
  padding: 2rem;
  height: 100%;
  width: calc(100% - 2.5rem);
`;
