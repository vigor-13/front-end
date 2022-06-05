import { useToggle } from 'react-use';
import type { Hoc } from '@utils/types';
import ModalComponent from '../Modal';

export interface UseModalReturn {
  isOpen: boolean;
  Modal: Hoc;
  openModal: () => void;
  closeModal: () => void;
}

export const useModal = (): UseModalReturn => {
  const [open, toggle] = useToggle(false);
  const openModal = () => toggle(true);
  const closeModal = () => toggle(false);

  const Modal: Hoc = ({ children }) => {
    return (
      <ModalComponent open={open} closeModal={closeModal}>
        {children}
      </ModalComponent>
    );
  };

  return {
    isOpen: open,
    Modal,
    openModal,
    closeModal,
  };
};
