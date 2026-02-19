import type { Meta, StoryObj } from '@storybook/react';
import { FlyoutPanel } from './FlyoutPanel';
import type { NavItem } from '../../constants/navigation';

const PROJECTS_ITEM: NavItem = {
  id: 'projects',
  label: 'Projects',
  icon: 'folder',
  flyoutSize: 'lg',
};

const SEARCH_ITEM: NavItem = {
  id: 'search',
  label: 'Search',
  icon: 'search',
  flyoutSize: 'md',
};

const meta: Meta<typeof FlyoutPanel> = {
  title: 'Layout/FlyoutPanel',
  component: FlyoutPanel,
  args: {
    isOpen: true,
    onMouseEnter: () => {},
    onMouseLeave: () => {},
  },
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'fullscreen',
  },
  decorators: [
    (S) => (
      <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
        <S />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FlyoutPanel>;

export const ProjectsOpen: Story = {
  args: { item: PROJECTS_ITEM, isOpen: true },
};

export const SearchOpen: Story = {
  args: { item: SEARCH_ITEM, isOpen: true },
};

export const Closed: Story = {
  args: { item: PROJECTS_ITEM, isOpen: false },
};
