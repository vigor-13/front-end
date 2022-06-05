import { BaseComponentProps } from '@utils/types';
import Portal, { PortalPath } from '@components/utils/Portal';
import { FC } from 'react';
import { IoClose } from 'react-icons/io5';

export interface ModalProps extends BaseComponentProps {
  portalPath?: PortalPath;
  open: boolean;
  closeModal: () => void;
}

const Modal: FC<ModalProps> = (props) => {
  const { children, portalPath, open, closeModal } = props;

  return (
    <Portal portalPath={portalPath} open={open}>
      <div className="flex justify-center items-center fixed w-full h-screen inset-0 backdrop-blur-sm bg-slate-400/10">
        <div className="bg-white inline-flex justify-center items-center rounded-md p-8 relative shadow-md">
          <div className="pt-4">{children}</div>
          <button className="absolute top-4 right-4" onClick={closeModal}>
            <IoClose size={20} />
          </button>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
