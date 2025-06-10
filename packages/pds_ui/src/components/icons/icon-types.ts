import { IconName } from './assets/Icons';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: 'primary' | 'success' | 'danger' | 'info';
  className?: string;
  name: IconName;
}
