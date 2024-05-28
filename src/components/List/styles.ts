import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  flex: 0 0 320px;

  background-color: #F2F3F5;
  border-radius: 4px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    div {
      display: flex;
      span {
        opacity: 0.4;
      }
    }
    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;

      &:hover {
        transition: all 0.5s ease;
        filter: brightness(0.9);
      }
    }
  }

  ul {
    overflow-y: scroll;
    height: 600px;
    margin-top: 30px;
  }
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
    font-weight: 700;
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