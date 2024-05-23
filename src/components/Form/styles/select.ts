import styled from 'styled-components';

export const SelectElement = styled.select`

  padding: 10px 13px;

  font-size: 14px;
  text-align: center;
  font-weight: 700;

  color: #5E6278;
  border: 1px solid #E1E3EA;
  border-radius: 4px;
  
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: ${props => props.theme['bg-button-color']};
    box-shadow: 0 3px 10px 0 rgba(34,41,47,.1);
  }

`;