import styled from 'styled-components';

interface IContainerProps {
  color: string
}

export const Container = styled.div<IContainerProps>`
  position: relative;
  background: #FFF;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  
  border-top: 20px solid ${(props: IContainerProps) => props.color};
  cursor: grab;

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }
  
  p:nth-child(1) {
    background-color: ${props => props.theme['bg-card-title-color']};
    font-weight: 600;
  }

  p {
    text-align: center;

    padding: 5px;
    font-weight: 400;
    line-height: 20px;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 2px;
  }

  &:hover {
    transition: all 0.5s ease;
    filter: brightness(0.9);
  }
`;


export const FormEditModal = styled.form`
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


export const DeleteButton = styled.button`
  background-color: ${props => props.theme['bg-button-color']};
  background-color: red;
  width: 400px;
  color: white;
  height: 40px;
  transition: all ease-in-out 0.1s;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 3px 0 red;
  }
`;

export const Responsible = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px 0;
  background-color: ${props => props.theme['bg-card-title-color']};
`