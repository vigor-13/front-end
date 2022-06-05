import { ReactNode } from 'react';

export interface BaseComponentProps {
  children?: ReactNode;
}

export type Hoc = (props: BaseComponentProps) => JSX.Element;
