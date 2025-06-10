import { ButtonSize, ButtonVariant } from './button-styles';
import {
  BaseButtonProps,
  ButtonElementType,
} from './useButton/useButton-types';

export type ButtonStyleProps = {
  size?: ButtonSize;
  variant?: ButtonVariant;
  className?: string;
};

export type ButtonProps<T extends ButtonElementType = 'button'> =
  ButtonStyleProps & BaseButtonProps<T>;
