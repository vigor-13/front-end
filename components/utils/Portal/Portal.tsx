import { BaseComponentProps } from '@utils/types';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps extends BaseComponentProps {}

const Portal = ({ children }: PortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.querySelector('#ROOT_PORTAL')!)
    : null;
};

export default Portal;
