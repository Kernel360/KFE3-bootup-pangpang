import { FaAngleRight } from 'react-icons/fa6';
import { cn } from '../../../utils/cn';
import type { IconProps } from '../icon-types';
import { COLOR_MAP, SIZE_MAP } from '../icon-styles';

export const AngleRightIcon = ({
  size = 'md',
  color,
  className,
  ...props
}: IconProps) => {
  const sizeValue = SIZE_MAP[size];
  const colorValue = color ? COLOR_MAP[color] : undefined;

  const iconStyle = {
    width: sizeValue,
    height: sizeValue,
    ...(colorValue && { color: colorValue }),
  };

  return (
    <FaAngleRight
      className={cn(className)}
      style={iconStyle}
      aria-hidden="true"
      {...props}
    />
  );
};
