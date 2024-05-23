import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 200px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    img {
      width: 100px;
    }
    
    h1 {
      font-size: 85px;
      margin-left: 10px;
      color: #243655;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;


export const Body = styled.div`
`;

