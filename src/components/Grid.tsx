import styled from '@emotion/styled';

const Grid = styled.div`
  display: grid;
  grid-gap: 0.25rem;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
`;

const GridItem = styled.div`
  box-sizing: border-box;

  > div {
    border: 1px solid #dedede;
    padding: 0.25rem;
  }
`;

export {
  Grid,
  GridItem,
}