import { IconName } from './assets/Icons';

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type IconColor = 'primary' | 'success' | 'danger' | 'info';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: IconSize;
  color?: IconColor;
  className?: string;
  name: IconName;
}
