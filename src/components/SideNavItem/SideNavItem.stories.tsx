import type { Meta, StoryObj } from '@storybook/react';
import { SideNavItem } from './SideNavItem';
import '../../tokens/tokens.css';

const ITEM = { id: 'projects', label: 'Projects', icon: 'folder' };

const meta: Meta<typeof SideNavItem> = {
  title: 'Components/SideNavItem',
  component: SideNavItem,
  args: {
    item: ITEM,
    isHovered: false,
    isActive: false,
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    onClick: () => {},
  },
  decorators: [
    (S) => (
      <div
        style={{
          background: '#141414',
          padding: 8,
          display: 'inline-flex',
          borderRadius: 8,
        }}
      >
        <S />
      </div>
    ),
  ],
  parameters: { backgrounds: { default: 'surface' } },
};

export default meta;
type Story = StoryObj<typeof SideNavItem>;

export const Default: Story = {};

export const Hovered: Story = {
  args: { isHovered: true },
};

export const Active: Story = {
  args: { isActive: true },
};
