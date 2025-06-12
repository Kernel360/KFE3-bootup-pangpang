import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './components/Icon';
import { ICONS, IconName } from './assets/Icons';

const ICON_NAMES = Object.keys(ICONS) as IconName[];
const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: 'select',
      options: ICON_NAMES,
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'danger',
        'success',
        'warning',
        'gray',
        'black',
        'white',
      ],
    },
    className: { control: false },
  },
  args: {
    name: ICON_NAMES[0],
    size: 'md',
    color: 'primary',
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Playground: Story = {
  args: {},
};

export const AllIcons: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      {ICON_NAMES.map((iconName) => (
        <div
          key={iconName}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 64,
          }}
        >
          <Icon {...args} name={iconName} />
          <span style={{ fontSize: 12, marginTop: 8 }}>{iconName}</span>
        </div>
      ))}
    </div>
  ),
  args: {
    size: 'md',
    color: 'primary',
  },
  parameters: {
    controls: { exclude: ['name'] },
  },
};
