import { BaseButtonProps, OverloadedButtonFunction } from './useButton-types';

//eslint-disable-next-line
export const useButton: OverloadedButtonFunction = (props: any): any => {
  const {
    as = 'button',
    isDisabled,
    isLoading,
    tabIndex,
    onKeyDown,
    type = 'button',
  } = props;

  const disabled = isDisabled || isLoading;

  const handleKeyDown = (event: React.KeyboardEvent) => {
    onKeyDown?.(event);

    if (event.key === ' ' || event.key === 'Spacebar' || event.key === '32') {
      if (disabled) return;
      if (event.defaultPrevented) return;
      if (as === 'button') return;

      event.preventDefault();
      (event.currentTarget as HTMLElement).click();

      return;
    }

    if (event.key === 'Enter' || event.key === '13') {
      if (disabled) return;
      if (event.defaultPrevented) return;
      if (as === 'input' && type !== 'button') return;

      event.preventDefault();
      (event.currentTarget as HTMLElement).click();

      return;
    }
  };

  const baseProps = {
    ...props,
    'data-loading': isLoading,
    tabIndex: disabled ? undefined : (tabIndex ?? 0),
    onKeyDown: handleKeyDown,
  };

  let additionalProps = {};

  switch (as) {
    case 'button': {
      additionalProps = {
        type: type ?? 'button',
        disabled,
      };
      break;
    }
    case 'a': {
      const { href, target, rel } = props as BaseButtonProps<'a'>;

      additionalProps = {
        role: 'button',
        href: disabled ? undefined : href,
        target: disabled ? undefined : target,
        rel: disabled ? undefined : rel,
        'area-disabled': isDisabled,
      };
      break;
    }
    case 'input': {
      additionalProps = {
        role: 'button',
        type: props.type,
        disabled,
        'area-disabled': undefined,
      };
      break;
    }
    default: {
      additionalProps = {
        role: 'button',
        type: type ?? 'button',
        'area-disabled': isDisabled,
      };
      break;
    }
  }

  const buttonProps = {
    ...baseProps,
    ...additionalProps,
  };

  return {
    buttonProps,
  };
};
