import React from 'react';
import { cn } from '../../../utils/cn';

type TextVariant =
  | 'headline-display'
  | 'headline-page'
  | 'headline-section'
  | 'headline-card'
  | 'body-large'
  | 'body-default'
  | 'body-small'
  | 'label-default'
  | 'caption-default';

const variantClassMap: Record<TextVariant, string> = {
  'headline-display': 'typo-heading-display',
  'headline-page': 'typo-heading-page',
  'headline-section': 'typo-heading-section',
  'headline-card': 'typo-heading-card',
  'body-large': 'typo-body-large',
  'body-default': 'typo-body-default',
  'body-small': 'typo-body-small',
  'label-default': 'typo-label-default',
  'caption-default': 'typo-caption-default',
};

type TextColor =
  | 'brand-primary'
  | 'brand-primary-hover'
  | 'brand-primary-pressed'
  | 'brand-secondary'
  | 'brand-subtle'
  | 'brand-surface'
  | 'success-primary'
  | 'success-hover'
  | 'success-pressed'
  | 'success-text'
  | 'success-subtle'
  | 'success-surface'
  | 'danger-primary'
  | 'danger-hover'
  | 'danger-pressed'
  | 'danger-text'
  | 'danger-subtle'
  | 'danger-surface'
  | 'info-primary'
  | 'info-hover'
  | 'info-pressed'
  | 'info-text'
  | 'info-subtle'
  | 'info-surface'
  | 'text-primary'
  | 'text-secondary'
  | 'text-tertiary'
  | 'text-disabled';

type PolymorphicProps<T extends React.ElementType> = {
  as?: T;
  variant: TextVariant;
  className?: string;
  color?: TextColor;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;

export function Text<T extends React.ElementType = 'span'>({
  as,
  variant,
  color = 'text-primary',
  className = '',
  children,
  ...rest
}: PolymorphicProps<T>) {
  const Component = as || 'span';
  const variantClass = variantClassMap[variant];
  const colorClass = color ? `text-${color}` : '';

  return (
    <Component className={cn(variantClass, colorClass, className)} {...rest}>
      {children}
    </Component>
  );
}
