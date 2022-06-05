import { useRouter } from 'next/router';
import { NextPageWithLayout } from '@utils/types';

export interface AuthPageProps {
  variant?: 'login' | 'register';
}

const AuthPage: NextPageWithLayout = (props: AuthPageProps) => {
  const router = useRouter();
  const { variant: _variant } = props; // from Component Props
  let { variant } = router.query; // from Router

  variant = variant ? variant : _variant;

  return <div>{variant} Page</div>;
};

export default AuthPage;
