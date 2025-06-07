import React from 'react';
import clsx from 'clsx';
import '../../../styles/globals.css';

type ButtonProps = {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'brand' | 'success' | 'danger' | 'info' | 'neutral';
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  children,
  size = 'md',
  variant = 'brand',
  disabled = false,
  onClick,
}: ButtonProps): React.ReactElement => {
  const base = 'transition-colors';
  const sizes = {
    sm: 'py-component-xs px-component-sm text-(length:--font-size-body-small) font-(--font-weight-label-default) rounded-input',
    md: 'py-component-sm px-component-md text-(length:--font-size-body-large) font-(--font-weight-body-large) rounded-card',
    lg: 'py-component-md px-component-lg text-(length:--font-size-heading-section) font-(--font-weight-heading-section) rounded-modal',
  };
  const variants = {
    brand:
      'bg-brand-primary text-white hover:bg-brand-primary-hover active:bg-brand-primary-pressed disabled:bg-text-disabled',
    success:
      'bg-success-primary text-white hover:bg-success-hover active:bg-success-pressed disabled:bg-text-disabled',
    danger:
      'bg-danger-primary text-white hover:bg-danger-hover active:bg-danger-pressed disabled:bg-text-disabled',
    info: 'bg-info-primary text-white hover:bg-info-hover active:bg-info-pressed disabled:bg-text-disabled',
    neutral:
      'bg-text-tertiary text-white hover:bg-text-secondary active:bg-text-primary disabled:bg-text-disabled',
  };

  return (
    <button
      type="button"
      className={clsx(base, sizes[size], variants[variant], {
        'opacity-50 cursor-not-allowed': disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
