import { OverloadedInputFunction } from './useInput-types';

export const useInput: OverloadedInputFunction = (props: any): any => {
  const {
    as = 'input',
    isDisabled,
    isReadOnly,
    isRequired,
    tabIndex,
    onKeyDown,
    type = 'text',
    placeholder,
    value,
    ...rest
  } = props;

  const disabled = isDisabled;

  const handleKeyDown = (event: React.KeyboardEvent) => {
    onKeyDown?.(event);

    if (event.key === 'Enter' || event.key === '13') {
      if (disabled) return;
      if (event.defaultPrevented) return;

      event.preventDefault();
    }
  };

  const baseProps = {
    ...rest,
    tabIndex: disabled ? undefined : (tabIndex ?? 0),
    onKeyDown: handleKeyDown,
  };

  let additionalProps: Record<string, any> = {};

  switch (as) {
    case 'input':
      additionalProps = {
        type,
        disabled,
        readOnly: isReadOnly,
        required: isRequired,
        placeholder,
        value,
      };
      break;
    case 'textarea':
      additionalProps = {
        disabled,
        readOnly: isReadOnly,
        required: isRequired,
        placeholder,
        value,
      };
      break;
    default:
      additionalProps = {
        role: 'textbox',
        disabled,
      };
      break;
  }

  return {
    inputProps: { ...baseProps, ...additionalProps },
  };
};
