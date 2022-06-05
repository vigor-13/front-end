import { FC } from 'react';
import { BaseComponentProps } from '@utils/types';

export interface LayoutProps extends BaseComponentProps {}

const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;

  return <div>{children}</div>;
};

export default Layout;
