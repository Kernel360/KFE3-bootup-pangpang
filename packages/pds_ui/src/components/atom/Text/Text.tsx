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

type PolymorphicProps<T extends React.ElementType> = {
  as?: T;
  variant: TextVariant;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;

export function Text<T extends React.ElementType = 'span'>({
  as,
  variant,
  className = '',
  children,
  ...rest
}: PolymorphicProps<T>) {
  const Component = as || 'span';
  const variantClass = variantClassMap[variant];

  return (
    <Component className={cn(variantClass, className)} {...rest}>
      {children}
    </Component>
  );
}
