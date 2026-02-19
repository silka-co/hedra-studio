import type { Meta, StoryObj } from '@storybook/react';
import { Icon, type IconName } from './Icon';
import { tokens } from '../../tokens/tokens';

const ALL_ICONS: IconName[] = [
  'home', 'search', 'layers', 'film', 'image', 'music', 'type',
  'shapes', 'upload', 'settings', 'folder', 'chevronDown', 'help',
  'plus', 'grid', 'user', 'ratio',
];

const meta: Meta<typeof Icon> = {
  title: 'Primitives/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: 'select',
      options: ALL_ICONS,
    },
    size: { control: { type: 'range', min: 12, max: 48, step: 2 } },
    strokeWidth: { control: { type: 'range', min: 0.5, max: 3, step: 0.1 } },
  },
  parameters: { backgrounds: { default: 'dark' } },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'home',
    size: 20,
    strokeWidth: 1.6,
  },
  decorators: [
    (S) => (
      <span style={{ color: '#f0f0f0', display: 'flex' }}>
        <S />
      </span>
    ),
  ],
};

/** All icons rendered at once for a quick visual overview. */
export const AllIcons: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16,
        color: '#f0f0f0',
        padding: 24,
      }}
    >
      {ALL_ICONS.map((name) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
            width: 56,
          }}
        >
          <Icon name={name} size={20} />
          <span style={{ fontSize: tokens.font.size['2xs'], color: '#6b6b6b', textAlign: 'center' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};
