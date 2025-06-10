export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'brand' | 'success' | 'danger' | 'info' | 'neutral';

export const BASE = 'transition-colors';

export const SIZES: Record<ButtonSize, string> = {
  sm: 'py-component-xs px-component-sm text-(length:--font-size-body-small) font-(--font-weight-label-default) rounded-input',
  md: 'py-component-sm px-component-md text-(length:--font-size-body-large) font-(--font-weight-body-large) rounded-card',
  lg: 'py-component-md px-component-lg text-(length:--font-size-heading-section) font-(--font-weight-heading-section) rounded-modal',
} as const;

export const VARIANTS: Record<ButtonVariant, string> = {
  brand:
    'bg-brand-primary text-white hover:bg-brand-primary-hover active:bg-brand-primary-pressed disabled:bg-text-disabled',
  success:
    'bg-success-primary text-white hover:bg-success-hover active:bg-success-pressed disabled:bg-text-disabled',
  danger:
    'bg-danger-primary text-white hover:bg-danger-hover active:bg-danger-pressed disabled:bg-text-disabled',
  info: 'bg-info-primary text-white hover:bg-info-hover active:bg-info-pressed disabled:bg-text-disabled',
  neutral:
    'bg-text-tertiary text-white hover:bg-text-secondary active:bg-text-primary disabled:bg-text-disabled',
} as const;
