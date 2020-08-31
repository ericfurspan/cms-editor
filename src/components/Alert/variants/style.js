import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.color || 'var(--info)'};
  font-size: 36px;
`;

export const StyledTitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0 0.5rem 1rem;
`;

export const StyledTitleText = styled.h4`
  margin: 0.5rem 1.5rem;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  details {
    margin: 1rem 0;

    summary {
      cursor: pointer;
      outline: 0;
      width: fit-content;
      margin: auto;
    }
  }
`;

export const StyledContentText = styled.span`
  margin: 0.5rem 1.25rem;
  line-height: 1.5;
`;

export const StyledDetailContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem 0;
  border-radius: 4px;

  code {
    background-color: var(--gray-light);
    padding: 0.875rem;
  }
`;
