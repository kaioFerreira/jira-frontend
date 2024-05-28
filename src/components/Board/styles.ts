import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  height: calc(100% - 80px);

  > div + div{
    margin: 0 40px;
  }
`;