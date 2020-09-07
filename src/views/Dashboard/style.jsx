import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import BREAKPOINTS from '../../utils/breakpoints';

export const StyledPageWrapper = styled(Row)`
  height: 100%;
  overflow: hidden;
`;

export const StyledContentWrapper = styled.div`
  padding: 0;
  margin-bottom: 2rem;
  background-color:
    ${(props) => (props.theme.mode === 'light' ? 'var(--white)' : 'inherit')};

  ${(props) => props.$marginTop && `margin-top: 1rem;`}

  ${(props) =>
    props.$withShadow === true &&
    `
    border: ${props.theme.mode === 'light' ? '0' : '1px solid var(--primary-light)'};
    box-shadow: ${
      props.theme.mode === 'light'
        ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        : '0 2px 4px 0 rgba(31,45,61,.07);'
    };
  `}

  @media only screen and (max-width: ${BREAKPOINTS.LARGE}) {
    border: 0;
  }
`;

export const StyledContentBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;
  padding: 1rem 1rem 0;
`;

export const StyledMetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
  padding: 0.25rem;
`;
