import styled from 'styled-components';

export const StyledBrandRow = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: center;
  padding: 1rem;
`;

export const StyledLogo = styled.div`
  display: inline-block;
  position: relative;

  svg {
    color: ${(props) =>
      props.theme.mode === 'light' ? 'var(--white)' : 'var(--primary)'};
    font-size: 1.25rem;
  }
`;

export const StyledBrandIcon = styled.div`
  width: 32px;
  height: 32px;
  display: inline;
  position: absolute;
  top: calc(50% - 16px);
  left: calc(50% - 16px);
  z-index: 1;

  border-bottom: 1px solid var(--warning);
`;

export const StyledDiamond = styled.div`
  display: inline-block;
  border-style: solid;
  border-color: transparent transparent
    ${(props) =>
      props.theme.mode === 'light' ? 'var(--primary)' : 'var(--white)'}
    transparent;
  border-width: 0 25px 25px 25px;
  height: 0;
  width: 50px;
  box-sizing: content-box;
  position: relative;
  margin: 0 0 42px 0;

  &:after {
    content: '';
    position: absolute;
    top: 25px;
    left: -25px;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: ${(props) =>
        props.theme.mode === 'light' ? 'var(--primary)' : 'var(--white)'}
      transparent transparent transparent;
    border-width: 70px 50px 0 50px;
  }
`;

// export const StyledBurst = styled.div`
//   position: relative;
//   width: 130px;
//   height: 78px;
//   margin: 20px 0;
//   background: var(--primary-light);
//   border-radius: 50% / 10%;
//   color: white;
//   text-align: center;
//   text-indent: 0.1em;

//   &:before {
//     content: '';
//     position: absolute;
//     top: 10%;
//     bottom: 10%;
//     right: -5%;
//     left: -5%;
//     background: inherit;
//     border-radius: 5% / 50%;
//   }
// `;

// export const StyledPacman = styled.div`
//   width: 0px;
//   height: 0px;
//   border-right: 60px solid transparent;
//   border-top: 60px solid var(--primary-light);
//   border-left: 60px solid var(--primary-light);
//   border-bottom: 60px solid var(--primary-light);
//   border-top-left-radius: 60px;
//   border-top-right-radius: 60px;
//   border-bottom-left-radius: 60px;
//   border-bottom-right-radius: 60px;
// `;

// export const StyledTriangle = styled.div`
//   height: 0;
//   width: 0;
//   border-left: 42px solid transparent;
//   border-right: 42px solid transparent;
//   border-bottom: 84px solid var(--primary-light);
//   display: inline-block;
//   position: relative;
// `;
