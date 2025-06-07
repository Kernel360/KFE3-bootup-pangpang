import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from '../src/components/atom/Text/Text';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: '타이포 예시 텍스트',
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
    className: {
      control: 'text',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const HeadlineDisplay: Story = {
  args: {
    as: 'h1',
    variant: 'headline-display',
    children: 'Headline Display',
  },
};

export const HeadlinePage: Story = {
  args: {
    as: 'h2',
    variant: 'headline-page',
    children: 'Headline Page',
  },
};

export const HeadlineSection: Story = {
  args: {
    as: 'h3',
    variant: 'headline-section',
    children: 'Headline Section',
  },
};

export const HeadlineCard: Story = {
  args: {
    as: 'h4',
    variant: 'headline-card',
    children: 'Headline Card',
  },
};

export const BodyLarge: Story = {
  args: {
    as: 'p',
    variant: 'body-large',
    children: 'Body Large',
  },
};

export const BodyDefault: Story = {
  args: {
    as: 'p',
    variant: 'body-default',
    children: 'Body Default',
  },
};

export const BodySmall: Story = {
  args: {
    as: 'span',
    variant: 'body-small',
    children: 'Body Small',
  },
};

export const LabelDefault: Story = {
  args: {
    as: 'label',
    variant: 'label-default',
    children: 'Label Default',
    htmlFor: 'input-id',
  },
};

export const CaptionDefault: Story = {
  args: {
    as: 'span',
    variant: 'caption-default',
    children: 'Caption Default',
  },
};

// Playground
export const Playground: Story = {
  args: {
    as: 'span',
    variant: 'body-default',
    children: 'Playground',
    className: 'text-brand-primary',
  },
};
