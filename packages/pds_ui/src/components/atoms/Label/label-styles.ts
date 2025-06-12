import { Text } from '../Text/Text';

export type LabelSize = 'default' | 'sm' | 'md' | 'lg';

// 라벨 크기별 Text variant 매핑
export const VARIANTS: Record<
  LabelSize,
  Parameters<typeof Text>[0]['variant']
> = {
  default: 'label-default',
  sm: 'body-small',
  md: 'body-default',
  lg: 'body-large',
} as const;
