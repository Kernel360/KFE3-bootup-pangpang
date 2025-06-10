import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from './index';
import type { IconProps } from './icon-types';

const meta: Meta<IconProps> = {
  title: 'Icons/Icons',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    color: {
      control: 'select',
      options: [undefined, 'primary', 'danger', 'success', 'info'],
    },
    className: {
      control: 'text',
    },
  },
  args: {
    size: 'md',
    color: undefined,
  },
};

export default meta;

type Story = StoryObj<IconProps>;

export const Playground: Story = {
  render: (props) => {
    const Icon = Icons.HeartIcon;
    return <Icon {...props} />;
  },
};

export const AllIcons: Story = {
  render: (props) => (
    <div className="p-4 flex flex-wrap gap-component-md">
      {Object.entries(Icons).map(([name, Icon]) => (
        <div key={name} className="flex flex-col items-center w-20 gap-2">
          <Icon {...props} />
          <span className="text-xs">{name}</span>
        </div>
      ))}
    </div>
  ),
};
