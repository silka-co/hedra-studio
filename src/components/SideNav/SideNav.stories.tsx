import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SideNav } from './SideNav';

const meta: Meta<typeof SideNav> = {
  title: 'Layout/SideNav',
  component: SideNav,
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'fullscreen',
  },
  decorators: [
    (S) => (
      <div style={{ display: 'flex', height: '100vh', position: 'relative', overflow: 'hidden' }}>
        <S />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SideNav>;

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState('projects');
    return <SideNav activeItem={active} onActiveChange={setActive} />;
  },
};
