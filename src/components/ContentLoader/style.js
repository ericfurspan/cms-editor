import styled from 'styled-components';
import ContentLoader from 'react-content-loader';

export const StyledLoader = styled(ContentLoader).attrs((props) => ({
  title: props.title,
}))`
  margin: 1rem;
  padding: 2rem;
  height: 100%;
  width: calc(100% - 2.5rem);
`;
