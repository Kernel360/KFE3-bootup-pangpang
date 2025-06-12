import { cn } from '../../../utils/cn';
import { Text } from '../Text/Text';
import { VARIANTS, type LabelSize } from './label-styles';
import { LabelProps } from './label-types';

const RequiredIndicator = ({ size }: { size: LabelSize }) => (
  <Text
    as="span"
    variant={size === 'sm' ? 'caption-default' : 'body-small'}
    color="danger-primary"
    className="ml-1"
    aria-label="필수 필드"
  >
    *
  </Text>
);

export const Label = ({
  htmlFor,
  required = false,
  disabled = false,
  error = false,
  size = 'md',
  color,
  className,
  children,
  ...props
}: LabelProps) => {
  const labelColor = (() => {
    if (color) return color; // 명시적 color가 있으면 우선
    if (disabled) return 'text-disabled';
    if (error) return 'danger-text';
    return 'text-primary';
  })();

  const textVariant = VARIANTS[size];

  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'label-base cursor-pointer block',
        disabled && 'cursor-not-allowed',
        className,
      )}
      {...props}
    >
      <Text variant={textVariant} color={labelColor}>
        {children}
        {required && <RequiredIndicator size={size} />}
      </Text>
    </label>
  );
};
