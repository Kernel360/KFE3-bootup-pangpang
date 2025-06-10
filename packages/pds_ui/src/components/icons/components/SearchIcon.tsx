import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { cn } from '../../../utils/cn';
import type { IconProps } from '../icon-types';
import { COLOR_MAP, SIZE_MAP } from '../icon-styles';

export const SearchIcon = ({
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
    <PiMagnifyingGlassBold
      className={cn(className)}
      style={iconStyle}
      aria-hidden="true"
      {...props}
    />
  );
};
