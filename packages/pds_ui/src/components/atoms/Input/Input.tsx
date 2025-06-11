import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils/cn';

// Input 컴포넌트의 스타일 variants 정의
const inputVariants = cva(
  [
    'w-full border transition-colors duration-200',
    'placeholder:text-text-tertiary text-text-primary',
    'focus:outline-none focus:ring-2 focus:ring-offset-0',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-surface-default',
    'file:border-0 file:bg-transparent',
  ],
  {
    variants: {
      variant: {
        default: [
          'border-border-default bg-surface-white',
          'focus:border-brand-primary focus:ring-brand-primary/20',
          'hover:enabled:border-brand-primary-hover',
        ],
        filled: [
          'border-transparent bg-surface-default',
          'focus:bg-surface-white focus:border-brand-primary focus:ring-brand-primary/20',
          'hover:bg-surface-white',
        ],
        ghost: [
          'border-transparent bg-transparent',
          'focus:border-border-default focus:ring-brand-primary/20',
        ],
      },
      size: {
        sm: 'h-input-sm px-component-sm typo-body-small rounded-input',
        md: 'h-input-md px-component-md typo-body-default rounded-input',
        lg: 'h-input-lg px-component-lg typo-body-large rounded-input',
      },
      state: {
        default: '',
        error:
          'border-danger-primary focus:border-danger-primary focus:ring-danger-primary/20',
        success:
          'border-success-primary focus:border-success-primary focus:ring-success-primary/20',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      state: 'default',
    },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  isError?: boolean;
  isSuccess?: boolean;
  containerClassName?: string;
}

// Input 컴포넌트 구현
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      variant,
      size,
      state,
      isError,
      isSuccess,
      id,
      disabled,
      required,
      ...props
    },
    ref,
  ) => {
    // 상태 결정 (props 우선순위: isError > isSuccess > state)
    const currentState = isError ? 'error' : isSuccess ? 'success' : state;

    return (
      <div className={cn('relative w-full', containerClassName)}>
        <input
          ref={ref}
          id={id}
          disabled={disabled}
          required={required}
          className={cn(
            inputVariants({ variant, size, state: currentState }),
            className,
          )}
          aria-invalid={isError}
          aria-required={required}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
