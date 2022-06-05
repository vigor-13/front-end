import { BaseComponentProps } from '@utils/types';
import { FC } from 'react';

export interface ButtonProps extends BaseComponentProps {
  onClick?: () => any;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, onClick } = props;

  return (
    <button className="px-2 py-0.5 border-2 rounded" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
