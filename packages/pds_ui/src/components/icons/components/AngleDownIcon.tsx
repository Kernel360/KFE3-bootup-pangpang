import { FaAngleDown } from 'react-icons/fa6';
import { cn } from '../../../utils/cn';
import type { IconProps } from '../icon-types';
import { COLORS, SIZES } from '../icon-styles';

export const AngleDownIcon = ({
  size = 'md',
  color,
  className,
  ...props
}: IconProps) => {
  const sizeValue = SIZES[size];
  const colorValue = color ? COLORS[color] : undefined;

  const iconStyle = {
    width: sizeValue,
    height: sizeValue,
    ...(colorValue && { color: colorValue }),
  };

  return (
    <FaAngleDown
      className={cn(className)}
      style={iconStyle}
      aria-hidden="true"
      {...props}
    />
  );
};
