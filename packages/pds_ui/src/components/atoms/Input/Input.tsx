import React from 'react';
import { cn } from '../../../utils/cn';
import { InputProps } from './input-types';
import { useInput } from './useInput/useInput';
import { BASE, SIZES, STATES, VARIANTS } from './input-styles';

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    size = 'md',
    variant = 'default',
    state = 'default',
    isError,
    isSuccess,
    className,
    disabled,
    required,
    readOnly,
    ...rest
  } = props;

  const useInputProps = {
    ...rest,
    isDisabled: disabled,
    isRequired: required,
    isReadOnly: readOnly,
    size,
  };

  const { inputProps } = useInput(useInputProps);

  // 상태 결정 (props 우선순위: isError > isSuccess > state)
  const currentState = isError ? 'error' : isSuccess ? 'success' : state;

  return (
    <input
      {...inputProps}
      ref={ref}
      className={cn(
        BASE,
        SIZES[size],
        VARIANTS[variant],
        STATES[currentState],
        className,
      )}
      aria-invalid={isError}
      aria-required={required}
    />
  );
});

Input.displayName = 'Input';

export default Input;
