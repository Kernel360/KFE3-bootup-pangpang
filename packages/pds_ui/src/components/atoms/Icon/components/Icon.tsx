import type { IconProps } from '../icon-types';
import { COLORS, SIZES } from '../icon-styles';
import { cn } from '../../../../utils/cn';
import { ICONS } from '../assets/Icons';

export const Icon = ({
  name,
  size = 'md',
  color = 'primary',
  className,
  ...props
}: IconProps) => {
  const IconComponent = ICONS[name];
  const sizeValue = SIZES[size];
  const colorValue = color ? COLORS[color] : undefined;

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
