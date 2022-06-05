import { FC, useState } from 'react';
import dynamic from 'next/dynamic';
import { BaseComponentProps } from '@utils/types';
import Button from '@components/Button';
import { useModal } from '@components/utils/Modal';
import { AuthPageProps } from 'pages/auth/[variant]';

const DynamicAuthPage = dynamic<AuthPageProps>(() => import('../../pages/auth'), {
  ssr: false,
});

export interface HeaderProps extends BaseComponentProps {}

const Header: FC<HeaderProps> = (props) => {
  const { children } = props;
  const { Modal, openModal } = useModal();
  const [authVariant, setAuthVariant] = useState<'login' | 'register'>('login');

  const onClickAuthButton = (pageType: 'login' | 'register') => {
    setAuthVariant(pageType);
    openModal();
  };

  return (
    <>
      <header className="flex bg-white p-2">
        <h1>LOGO</h1>
        <div className="flex-1 mx-2 text-center">{children}</div>
        <div className="flex space-x-4">
          <Button onClick={() => onClickAuthButton('login')}>Log In</Button>
          <Button onClick={() => onClickAuthButton('register')}>Sign Up</Button>
        </div>
      </header>
      <Modal>
        <DynamicAuthPage variant={authVariant} />
      </Modal>
    </>
  );
};

export default Header;
