import React from 'react';

type TextProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  weight?: 'normal' | 'medium' | 'bold' | 'semibold' | 'light';
  color?: string; // tailwind text-* 클래스명 (예: 'text-gray-800')
  className?: string;
};

export const Text: React.FC<TextProps> = ({
  children,
  as: Component = 'span',
  size = 'base',
  weight = 'normal',
  color = 'text-black',
  className = '',
  ...props
}) => {
  const sizeMap = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
  };

  const weightMap = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    light: 'font-light',
  };

  return (
    <Component
      className={`${sizeMap[size]} ${weightMap[weight]} ${color} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
