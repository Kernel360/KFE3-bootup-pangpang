import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: '타이포 예시 텍스트',
    variant: 'body-default',
    color: 'text-primary',
    as: 'span',
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['span', 'p', 'h1', 'h2', 'h3', 'label'],
    },
    variant: {
      control: 'select',
      options: [
        'headline-display',
        'headline-page',
        'headline-section',
        'headline-card',
        'body-large',
        'body-default',
        'body-small',
        'label-default',
        'caption-default',
      ],
    },
    color: {
      control: 'select',
      options: [
        'brand-primary',
        'brand-primary-hover',
        'brand-primary-pressed',
        'brand-secondary',
        'brand-subtle',
        'brand-surface',
        'success-primary',
        'success-hover',
        'success-pressed',
        'success-text',
        'success-subtle',
        'success-surface',
        'danger-primary',
        'danger-hover',
        'danger-pressed',
        'danger-text',
        'danger-subtle',
        'danger-surface',
        'info-primary',
        'info-hover',
        'info-pressed',
        'info-text',
        'info-subtle',
        'info-surface',
        'text-primary',
        'text-secondary',
        'text-tertiary',
        'text-disabled',
      ],
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

type Story = StoryObj<typeof Text>;

export const Playground: Story = {
  args: {
    children: '플레이그라운드 예시 텍스트',
    variant: 'body-default',
    color: 'text-primary',
    as: 'span',
  },
};

export const HeadlineDisplay: Story = {
  args: {
    children: 'Headline Display',
    variant: 'headline-display',
    color: 'brand-primary',
    as: 'h1',
  },
};
export const HeadlinePage: Story = {
  args: {
    children: 'Headline Page',
    variant: 'headline-page',
    color: 'brand-primary',
    as: 'h2',
  },
};
export const HeadlineSection: Story = {
  args: {
    children: 'Headline Section',
    variant: 'headline-section',
    color: 'brand-secondary',
    as: 'h3',
  },
};
export const HeadlineCard: Story = {
  args: {
    children: 'Headline Card',
    variant: 'headline-card',
    color: 'brand-secondary',
    as: 'h4',
  },
};
export const BodyLarge: Story = {
  args: {
    children: 'Body Large',
    variant: 'body-large',
    color: 'success-primary',
    as: 'p',
  },
};
export const BodyDefault: Story = {
  args: {
    children: 'Body Default',
    variant: 'body-default',
    color: 'text-primary',
    as: 'p',
  },
};
export const BodySmall: Story = {
  args: {
    children: 'Body Small',
    variant: 'body-small',
    color: 'danger-primary',
    as: 'span',
  },
};
export const LabelDefault: Story = {
  args: {
    children: 'Label Default',
    variant: 'label-default',
    color: 'text-tertiary',
    as: 'label',
  },
};
export const CaptionDefault: Story = {
  args: {
    children: 'Caption Default',
    variant: 'caption-default',
    color: 'text-disabled',
    as: 'span',
  },
};
