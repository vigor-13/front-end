import { BaseComponentProps } from '@utils/types';
import { FC } from 'react';

export interface ButtonProps extends BaseComponentProps {}

const Button: FC<ButtonProps> = (props) => {
  const { children } = props;

  return <button className="px-2 py-0.5 border-2 rounded">{children}</button>;
};

export default Button;
