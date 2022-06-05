import { BaseComponentProps } from '@utils/types';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useUnmount } from 'react-use';
import { PortalPath } from './portal.type';

export interface PortalProps extends BaseComponentProps {
  portalPath?: PortalPath;
  open: boolean;
}

const Portal = (props: PortalProps) => {
  const { children, portalPath = '#ROOT_PORTAL', open } = props;
  const [portalNode, setPortalNode] = useState<Element | null>(null);

  useEffect(() => {
    if (!open) return;

    const portalElement = document.querySelector(portalPath);
    if (!portalElement) return;

    setPortalNode(portalElement);
  }, [open, portalPath, setPortalNode]);

  useUnmount(() => {});

  return portalNode ? createPortal(children, portalNode) : null;
};

export default Portal;
