import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atom/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio' },
    variant: { control: 'radio' },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

// Brand
export const Brand_md: Story = {
  args: {
    children: 'Brand Button Medium',
    variant: 'brand',
    size: 'md',
  },
};

export const Brand_sm: Story = {
  args: {
    children: 'Brand Button Small',
    variant: 'brand',
    size: 'sm',
  },
};

export const Brand_lg: Story = {
  args: {
    children: 'Brand Button Large',
    variant: 'brand',
    size: 'lg',
  },
};

// Success
export const Success_md: Story = {
  args: {
    children: 'Success Button Medium',
    variant: 'success',
    size: 'md',
  },
};

export const Success_sm: Story = {
  args: {
    children: 'Success Button Small',
    variant: 'success',
    size: 'sm',
  },
};

export const Success_lg: Story = {
  args: {
    children: 'Success Button Large',
    variant: 'success',
    size: 'lg',
  },
};

// Danger
export const Danger_md: Story = {
  args: {
    children: 'Danger Button Medium',
    variant: 'danger',
    size: 'md',
  },
};

export const Danger_sm: Story = {
  args: {
    children: 'Danger Button Small',
    variant: 'danger',
    size: 'sm',
  },
};

export const Danger_lg: Story = {
  args: {
    children: 'Danger Button Large',
    variant: 'danger',
    size: 'lg',
  },
};

// Info
export const Info_md: Story = {
  args: {
    children: 'Info Button Medium',
    variant: 'info',
    size: 'md',
  },
};

export const Info_sm: Story = {
  args: {
    children: 'Info Button Small',
    variant: 'info',
    size: 'sm',
  },
};

export const Info_lg: Story = {
  args: {
    children: 'Info Button Large',
    variant: 'info',
    size: 'lg',
  },
};

// Neutral
export const Neutral_md: Story = {
  args: {
    children: 'Neutral Button Medium',
    variant: 'neutral',
    size: 'md',
  },
};

export const Neutral_sm: Story = {
  args: {
    children: 'Neutral Button Small',
    variant: 'neutral',
    size: 'sm',
  },
};

export const Neutral_lg: Story = {
  args: {
    children: 'Neutral Button Large',
    variant: 'neutral',
    size: 'lg',
  },
};

// Disabled
export const Disabled_md: Story = {
  args: {
    children: 'Disabled Button Medium',
    variant: 'brand',
    size: 'md',
    disabled: true,
  },
};

export const Disabled_sm: Story = {
  args: {
    children: 'Disabled Button Small',
    variant: 'brand',
    size: 'sm',
    disabled: true,
  },
};

export const Disabled_lg: Story = {
  args: {
    children: 'Disabled Button Large',
    variant: 'brand',
    size: 'lg',
    disabled: true,
  },
};
