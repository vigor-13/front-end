import { BaseComponentProps } from '@utils/types';
import { FC } from 'react';

export interface HeaderProps extends BaseComponentProps {}

const Header: FC<HeaderProps> = (props) => {
  const { children } = props;
  return (
    <header className="flex bg-white p-2">
      <h1>LOGO</h1>
      <div className="flex-1 mx-2 text-center">{children}</div>
      <div>
        <button>login</button>
        <button>register</button>
      </div>
    </header>
  );
};

export default Header;
