export type InputSize = 'sm' | 'md' | 'lg';
export type InputVariant = 'default' | 'filled' | 'ghost';
export type InputState = 'default' | 'error' | 'success';

export const BASE =
  'w-full border transition-colors duration-200 rounded-input placeholder:text-text-tertiary text-text-primary focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-surface-default file:border-0 file:bg-transparent';

export const VARIANTS: Record<InputVariant, string> = {
  default:
    'border-border-default bg-surface-white focus:border-brand-primary focus:ring-brand-primary/20 hover:enabled:border-brand-primary-hover',
  filled:
    'border-transparent bg-surface-default focus:bg-surface-white focus:border-brand-primary focus:ring-brand-primary/20 hover:bg-surface-white',
  ghost:
    'border-transparent bg-transparent focus:border-border-default focus:ring-brand-primary/20',
};
export const SIZES: Record<InputSize, string> = {
  sm: 'h-input-sm px-component-sm typo-body-small',
  md: 'h-input-md px-component-md typo-body-default',
  lg: 'h-input-lg px-component-lg typo-body-large',
};
export const STATES: Record<InputState, string> = {
  default: '',
  error:
    'border-danger-primary focus:border-danger-primary focus:ring-danger-primary/20',
  success:
    'border-success-primary focus:border-success-primary focus:ring-success-primary/20',
};
