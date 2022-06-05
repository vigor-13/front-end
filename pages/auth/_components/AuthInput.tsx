import { BaseComponentProps } from '@utils/types';
import { useState } from 'react';
import { FC, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

export interface AuthInputProps
  extends BaseComponentProps,
    InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const AuthInput: FC<AuthInputProps> = (props) => {
  const { children, name, ...rest } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name] ? errors[name].message : null;

  return (
    <div className="w-[18rem]">
      <div className="first-letter:uppercase">{name}</div>
      <input
        className="border-2 rounded p-1 inline-block w-full h-12"
        {...rest}
        {...register(name)}
      />
      {errorMessage ? (
        <div className="flex flex-row-reverse text-red-500 text-xs mt-1">
          {errorMessage}
        </div>
      ) : null}
    </div>
  );
};

export default AuthInput;
