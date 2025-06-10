import type { TextColor, TextVariant } from './text-styles';

// 텍스트 표시에 적합한 HTML 요소들 타입
export type TextElement =
  | 'span'
  | 'p'
  | 'div'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

// Text 컴포넌트 고유 props
type TextProps = {
  as?: TextElement; // 텍스트 요소로 제한
  variant: TextVariant;
  className?: string;
  color?: TextColor;
  children: React.ReactNode;
};

// 다형성 props 타입 정의
export type PolymorphicTextProps<T extends TextElement> = TextProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TextProps>;
