import styled from '@emotion/styled';

export const Paper = styled.div`
  background-color: white;
  width: 100%;
  border: 1px solid grey;
  &.shadow {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
`;
