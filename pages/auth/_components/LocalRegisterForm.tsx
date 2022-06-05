import { BaseComponentProps } from '@utils/types';
import { FC, useEffect } from 'react';
import * as yup from 'yup';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@components/Button';
import AuthInput from './AuthInput';
import { useRegisterQuery, UseRegisterPayload } from '@hooks/query';
import { useAppDispatch } from '@redux-store/store.hooks';
import { setAccessToken, setIsLogin } from '@redux-store/slices';
import { useRouter } from 'next/router';

const LocalRegisterFormScheme = yup.object().shape({
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

interface LocalRegisterFields {
  email: string;
  password: string;
}

export interface LocalRegisterFormProps extends BaseComponentProps {}

const LocalRegisterForm: FC<LocalRegisterFormProps> = (props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const method = useForm<LocalRegisterFields>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {},
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
    resolver: yupResolver(LocalRegisterFormScheme),
  });

  const { setPayload, queryResult } = useRegisterQuery();
  const { data } = queryResult;

  const onSubmit = (data: any) => {
    const payload: UseRegisterPayload = {
      key: data.email,
      password: data.password,
    };

    setPayload(payload);
  };

  useEffect(() => {
    if (data && data.access_token) {
      dispatch(setAccessToken(data.access_token));
      router.push('/').then(() => router.reload());
    }
  }, [data]);

  return (
    <FormProvider {...method}>
      <form
        className="flex flex-col space-y-4"
        onSubmit={method.handleSubmit(onSubmit)}
      >
        <AuthInput name="email" />
        <AuthInput name="password" type="password" />
        <Button>
          <div className="uppercase">Register</div>
        </Button>
      </form>
      <div>{data && data.error ? data.message : null}</div>
    </FormProvider>
  );
};

export default LocalRegisterForm;
