import { ElementType } from 'react';
import { cn } from '../../../utils/cn';
import { COLORS, VARIANTS } from './text-styles';
import type { PolymorphicTextProps, TextElement } from './text-types';

export const Text = <T extends TextElement = 'span'>({
  as,
  variant,
  color,
  className,
  children,
  ...props
}: PolymorphicTextProps<T>) => {
  const Component = (as || 'span') as ElementType;
  const variantClass = VARIANTS[variant];
  const colorClass = COLORS[color || 'text-primary'];

  return (
    <Component className={cn(variantClass, colorClass, className)} {...props}>
      {children}
    </Component>
  );
};
