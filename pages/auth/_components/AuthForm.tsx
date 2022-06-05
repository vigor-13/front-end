import { FC } from 'react';
import * as yup from 'yup';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BaseComponentProps } from '@utils/types';
import Button from '@components/Button';
import AuthInput from './AuthInput';

export const authFormScheme = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required('필수항목입니다.')
    .matches(/^\S*$/, '공백을 제거해주세요.')
    .email('올바른 이메일 형식이 아닙니다.'),

  password: yup
    .string()
    .trim()
    .required('필수항목입니다.')
    .min(4, '4글자 이상이어야 합니다.'),
});

export interface AuthInput {
  email: string;
  password: string;
}

export interface AuthFormProps extends BaseComponentProps {
  variant: 'login' | 'register';
}

const AuthForm: FC<AuthFormProps> = (props) => {
  const { variant } = props;
  const method = useForm<AuthInput>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {},
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
    resolver: yupResolver(authFormScheme),
  });

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
