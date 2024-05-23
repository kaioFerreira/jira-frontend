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

export const NewCard = styled.button`
  margin: 20px auto;
  background-color: ${props => props.theme['bg-button-color']};
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;