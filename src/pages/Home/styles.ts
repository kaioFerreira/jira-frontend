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

  button {
    background-color: ${props => props.theme['bg-button-color']};
    color: #fff;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
  }

`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;


export const FormTask = styled.form`
  display: flex;

  flex-direction: column;  
  justify-content: center;
  align-items: center;

  gap: 8px;

  border-radius: 10px;
  padding: 20px 40px;

  max-width: 1000px;

  div {
    width: 400px;
  }

  label {
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 30px;
  }

  button {
    background-color: ${props => props.theme['bg-button-color']};
    width: 400px;
    color: white;
    height: 40px;

    transition: all ease-in-out 0.1s;
    border-radius: 4px;
    
  }

  button:hover {
    cursor: pointer;
    box-shadow: 0 0 3px 0 ${props => props.theme['bg-button-color']};
  }
`;