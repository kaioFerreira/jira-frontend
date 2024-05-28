import { ReactNode } from "react";
import { ModalOverlay, ModalBody } from "./styles";
import { MdClose } from "react-icons/md";

interface IModalProps {
  openModal: boolean,
  setOpenModal: (openModal: boolean) => void;
  children: ReactNode;
}

export function Modal({openModal, setOpenModal, children}: IModalProps){  
  if (!openModal) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalBody>
        <MdClose size={20} onClick={() => setOpenModal(!openModal)}/>
        {children}
      </ModalBody>
    </ModalOverlay>
  );
}