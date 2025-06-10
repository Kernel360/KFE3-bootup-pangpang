import React from 'react';
import { useButton } from './useButton/useButton';
import { BASE, SIZES, VARIANTS } from './button-styles';
import { ButtonProps } from './button-types';
import { cn } from '../../../utils/cn';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      size = 'md',
      variant = 'brand',
      className,
      children,
      isLoading,
      ...rest
    } = props;

    const { buttonProps } = useButton({ ...rest, isLoading });

    return (
      <button
        {...buttonProps}
        ref={ref}
        type={buttonProps.type ?? 'button'}
        className={cn(
          BASE,
          SIZES[size],
          VARIANTS[variant],
          {
            'opacity-50 cursor-not-allowed': buttonProps.disabled || isLoading,
          },
          className,
        )}
        disabled={buttonProps.disabled || isLoading}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
export { Button };
