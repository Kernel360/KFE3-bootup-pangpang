import React from 'react';
import { cn } from '../../../utils/cn';

// 텍스트 표시에 적합한 HTML 요소들만 허용
type TextElement =
  | 'span'
  | 'p'
  | 'div'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'label';

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

// 타이포그래피 variant 매핑
const VARIANT_CLASS_MAP: Record<TextVariant, string> = {
  'headline-display': 'typo-heading-display',
  'headline-page': 'typo-heading-page',
  'headline-section': 'typo-heading-section',
  'headline-card': 'typo-heading-card',
  'body-large': 'typo-body-large',
  'body-default': 'typo-body-default',
  'body-small': 'typo-body-small',
  'label-default': 'typo-label-default',
  'caption-default': 'typo-caption-default',
} as const;

// 색상 매핑
const COLOR_CLASS_MAP: Record<TextColor, string> = {
  'brand-primary': 'text-brand-primary',
  'brand-primary-hover': 'text-brand-primary-hover',
  'brand-primary-pressed': 'text-brand-primary-pressed',
  'brand-secondary': 'text-brand-secondary',
  'brand-subtle': 'text-brand-subtle',
  'brand-surface': 'text-brand-surface',
  'success-primary': 'text-success-primary',
  'success-hover': 'text-success-hover',
  'success-pressed': 'text-success-pressed',
  'success-text': 'text-success-text',
  'success-subtle': 'text-success-subtle',
  'success-surface': 'text-success-surface',
  'danger-primary': 'text-danger-primary',
  'danger-hover': 'text-danger-hover',
  'danger-pressed': 'text-danger-pressed',
  'danger-text': 'text-danger-text',
  'danger-subtle': 'text-danger-subtle',
  'danger-surface': 'text-danger-surface',
  'info-primary': 'text-info-primary',
  'info-hover': 'text-info-hover',
  'info-pressed': 'text-info-pressed',
  'info-text': 'text-info-text',
  'info-subtle': 'text-info-subtle',
  'info-surface': 'text-info-surface',
  'text-primary': 'text-text-primary',
  'text-secondary': 'text-text-secondary',
  'text-tertiary': 'text-text-tertiary',
  'text-disabled': 'text-text-disabled',
} as const;

// Text 컴포넌트 고유 props
type TextProps = {
  as?: TextElement; // 텍스트 요소로 제한
  variant: TextVariant;
  className?: string;
  color?: TextColor;
  children: React.ReactNode;
};

// 다형성 props 타입 정의
type PolymorphicTextProps<T extends TextElement> = TextProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TextProps>;

export function Text<T extends TextElement = 'span'>({
  as,
  variant,
  color,
  className,
  children,
  ...props
}: PolymorphicTextProps<T>) {
  const Component = (as || 'span') as React.ElementType;
  const variantClass = VARIANT_CLASS_MAP[variant];
  const colorClass = COLOR_CLASS_MAP[color || 'text-primary'];

  return (
    <Component className={cn(variantClass, colorClass, className)} {...props}>
      {children}
    </Component>
  );
}
