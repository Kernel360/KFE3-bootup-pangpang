import { ComponentProps, HTMLAttributes } from 'react';
import { InputSize } from '../input-styles';

export type InputElementType = 'input' | 'textarea';

export type BaseInputProps<T extends InputElementType = 'input'> = {
  as?: T;
  role?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  isDisabled?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
  placeholder?: string;
  value?: string;
  tabIndex?: number;
  size?: InputSize;
} & Omit<ComponentProps<T>, 'size'>;

export type UseInputReturn<T> = {
  inputProps: Omit<HTMLAttributes<T>, 'size'> & {
    role?: string;
    type?: 'text' | 'password' | 'email' | 'number';
    tabIndex?: number;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    placeholder?: string;
    value?: string;
  };
};

export type OverloadedInputFunction = {
  (props: BaseInputProps<'input'>): UseInputReturn<HTMLInputElement>;
  (props: BaseInputProps<'textarea'>): UseInputReturn<HTMLTextAreaElement>;
};
