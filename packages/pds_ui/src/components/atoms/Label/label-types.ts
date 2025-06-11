import type { TextColor } from '../Text/text-styles';
import type { LabelSize } from './label-styles';

export type LabelProps = {
  /** 연결할 input 요소의 id (필수) */
  htmlFor: string;
  /** 필수 필드 여부 */
  required?: boolean;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 에러 상태 */
  error?: boolean;
  /** 라벨 크기 */
  size?: LabelSize;
  /** 텍스트 색상 (Text 컴포넌트의 색상 활용) */
  color?: TextColor;
  /** 추가 CSS 클래스 */
  className?: string;
  /** 라벨 텍스트 */
  children: React.ReactNode;
} & Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor' | 'className'>;
