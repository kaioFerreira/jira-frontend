import styled from 'styled-components';

export const ModalBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: fit-content;
  background-color: #fff;
  transform: translate(-50%, -50%);
  border-radius: 10px;

  svg {
    position: fixed;
    top: 10px;
    opacity: 0.3;
    right: 10px;
    cursor: pointer;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgb(0,0,0, 0.3);
  z-index: 1300;
`;
