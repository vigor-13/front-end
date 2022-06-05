import { BaseComponentProps } from '@utils/types';
import { FC } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import AuthInput from './AuthInput';
import Button from '@components/Button';

export interface AuthFormProps extends BaseComponentProps {
  variant: 'login' | 'register';
}

export interface AuthInput {
  email: string;
  password: string;
}

const AuthForm: FC<AuthFormProps> = (props) => {
  const { variant } = props;
  const method = useForm<AuthInput>();

  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...method}>
      <form
        className="flex flex-col space-y-4"
        onSubmit={method.handleSubmit(onSubmit)}
      >
        <AuthInput name="email" />
        <AuthInput name="password" type="password" />
        <Button>
          <div className="uppercase">{variant}</div>
        </Button>
      </form>
    </FormProvider>
  );
};

export default AuthForm;
