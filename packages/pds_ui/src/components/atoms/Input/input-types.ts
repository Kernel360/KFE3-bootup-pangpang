import { InputSize, InputState, InputVariant } from './input-styles';
import { BaseInputProps, InputElementType } from './useInput/useInput-types';

export type InputStyleProps = {
  size?: InputSize;
  variant?: InputVariant;
  state?: InputState;
  isError?: boolean;
  isSuccess?: boolean;
  className?: string;
};

export type InputProps<T extends InputElementType = 'input'> = Omit<
  BaseInputProps<T>,
  'size'
> &
  InputStyleProps & {
    disabled?: boolean;
    required?: boolean;
    readOnly?: boolean;
  };
