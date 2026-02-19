import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TopNav } from './TopNav';

const meta: Meta<typeof TopNav> = {
  title: 'Layout/TopNav',
  component: TopNav,
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof TopNav>;

export const Default: Story = {
  render: () => {
    const [ratio, setRatio] = useState('16/9');
    return <TopNav aspectRatio={ratio} onAspectRatioChange={setRatio} />;
  },
};
