import type { IconProps } from '../icon-types';
import { COLOR_MAP, SIZE_MAP } from '../icon-styles';
import { cn } from '../../../utils/cn';
import { ICONS } from '../assets/Icons';

export const Icon = ({
  name,
  size = 'md',
  color = 'primary',
  className,
  ...props
}: IconProps) => {
  const IconComponent = ICONS[name];
  const sizeValue = SIZE_MAP[size];
  const colorValue = color ? COLOR_MAP[color] : undefined;

  if (!IconComponent) return null;

  const iconStyle = {
    width: sizeValue,
    height: sizeValue,
    ...(colorValue && { color: colorValue }),
  };

  return (
    <IconComponent
      className={cn(className)}
      size={size}
      color={color}
      style={iconStyle}
      {...props}
    />
  );
};
