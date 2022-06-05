import { FC } from 'react';
import { BaseComponentProps } from '@utils/types';
import Header from '@components/Header';

export interface LayoutProps extends BaseComponentProps {}

const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <div>
      <Header>children</Header>
      {children}
    </div>
  );
};

export default Layout;
