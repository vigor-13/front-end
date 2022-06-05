import { BaseComponentProps } from '@utils/types';
import { ButtonHTMLAttributes } from 'react';
import { FC } from 'react';

export interface ButtonProps
  extends BaseComponentProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => any;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, onClick, ...rest } = props;

  return (
    <button className="px-2 py-0.5 border-2 rounded" onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
