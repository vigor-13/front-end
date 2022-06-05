import { useRouter } from 'next/router';
import { NextPageWithLayout } from '@utils/types';
import { AuthForm } from './_components';

export interface AuthPageProps {
  variant?: 'login' | 'register';
}

const AuthPage: NextPageWithLayout = (props: AuthPageProps) => {
  const router = useRouter();
  const { variant: _variant } = props; // from Component Props
  let { variant } = router.query; // from Router

  variant = variant ? variant : _variant;
  if (variant !== 'login' && variant !== 'register') {
    throw new Error('Invalid auth page query.');
  }

  return (
    <div>
      <h2 className="mb-4 text-lg font-bold first-letter:uppercase">{variant}</h2>
      <div>
        <AuthForm variant={variant} />
      </div>
    </div>
  );
};

export default AuthPage;
