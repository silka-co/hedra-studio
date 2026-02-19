import type { Meta, StoryObj } from '@storybook/react';
import { FlyoutProjects } from './FlyoutProjects';

const meta: Meta<typeof FlyoutProjects> = {
  title: 'Flyout/FlyoutProjects',
  component: FlyoutProjects,
  parameters: { backgrounds: { default: 'surface' } },
  decorators: [
    (S) => (
      <div style={{ width: 380, background: '#141414' }}>
        <S />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FlyoutProjects>;

export const Default: Story = {};
