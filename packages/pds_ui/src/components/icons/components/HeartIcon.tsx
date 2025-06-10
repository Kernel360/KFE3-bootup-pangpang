import { GoHeart } from 'react-icons/go';
import { cn } from '../../../utils/cn';
import type { IconProps } from '../icon-types';
import { COLOR_MAP } from '../icon-styles';

export const HeartIcon = ({
  size = 'md',
  color,
  className,
  ...props
}: IconProps) => {
  const colorClass = color ? COLOR_MAP[color] : undefined;
  return (
    <GoHeart
      className={cn(`size-icon-${size}`, colorClass, className)}
      aria-hidden="true"
      {...props}
    />
  );
};
