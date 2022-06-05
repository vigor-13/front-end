import { useRouter } from 'next/router';
import { NextPageWithLayout } from '@utils/types';
import { AuthForm, LocalLoginForm, LocalRegisterForm } from './_components';
import { ParsedUrlQuery } from 'querystring';

export interface AuthPageProps {
  variant?: 'login' | 'register';
}

const AuthPage: NextPageWithLayout = (props: AuthPageProps) => {
  const router = useRouter();
  const { variant: _variant } = props; // from Component Props
  const query = router.query; // from Router

  const variant = _isValidVariant(query)
    ? (query.variant as 'login' | 'register')
    : _variant;
  if (!variant) return null;

  return (
    <div>
      <h2 className="mb-4 text-lg font-bold first-letter:uppercase">{variant}</h2>
      <div>{variant === 'login' ? <LocalLoginForm /> : <LocalRegisterForm />}</div>
    </div>
  );
};

const _isValidVariant = (query: ParsedUrlQuery): boolean => {
  return query.variant === ('login' || 'register');
};

export default AuthPage;
