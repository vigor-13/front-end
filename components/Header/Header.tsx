import { FC } from 'react';
import { BaseComponentProps } from '@utils/types';
import Button from '@components/Button';

export interface HeaderProps extends BaseComponentProps {}

const Header: FC<HeaderProps> = (props) => {
  const { children } = props;
  return (
    <header className="flex bg-white p-2">
      <h1>LOGO</h1>
      <div className="flex-1 mx-2 text-center">{children}</div>
      <div className="flex flex-row-reverse space-x-4 space-x-reverse">
        <Button>Log In</Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
};

export default Header;
