import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
// import { ButtonProps } from './button-types';
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: '버튼 예시',
    size: 'md',
    variant: 'brand',
    isDisabled: false,
    isLoading: false,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['brand', 'success', 'danger', 'info', 'neutral'],
    },
    isDisabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    children: '플레이그라운드 버튼',
    size: 'md',
    variant: 'brand',
  },
};

export const Brand: Story = {
  args: {
    children: '브랜드 버튼',
    variant: 'brand',
  },
};
export const Success: Story = {
  args: {
    children: '성공 버튼',
    variant: 'success',
  },
};
export const Danger: Story = {
  args: {
    children: '위험 버튼',
    variant: 'danger',
  },
};
export const Info: Story = {
  args: {
    children: '정보 버튼',
    variant: 'info',
  },
};
export const Neutral: Story = {
  args: {
    children: '중립 버튼',
    variant: 'neutral',
  },
};
export const Disabled: Story = {
  args: {
    children: '비활성화 버튼',
    isDisabled: true,
  },
};
export const Loading: Story = {
  args: {
    children: '로딩 버튼',
    isLoading: true,
  },
};
