import type { TextColor } from '../Text/text-styles';
import type { LabelSize } from './label-styles';

export type LabelProps = {
  htmlFor: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  size?: LabelSize;
  color?: TextColor;
  className?: string;
  children: React.ReactNode;
} & Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor' | 'className'>;
