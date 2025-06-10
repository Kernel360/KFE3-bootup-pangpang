// Typography 스타일
export type TextVariant =
  | 'headline-display'
  | 'headline-page'
  | 'headline-section'
  | 'headline-card'
  | 'body-large'
  | 'body-default'
  | 'body-small'
  | 'label-default'
  | 'caption-default';

// Text 컬러
export type TextColor =
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
export const VARIANTS: Record<TextVariant, string> = {
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
export const COLORS: Record<TextColor, string> = {
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
