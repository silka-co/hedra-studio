import type { Meta, StoryObj } from '@storybook/react';
import { FlyoutEmptyState } from './FlyoutEmptyState';

const meta: Meta<typeof FlyoutEmptyState> = {
  title: 'Flyout/FlyoutEmptyState',
  component: FlyoutEmptyState,
  parameters: { backgrounds: { default: 'surface' } },
  decorators: [
    (S) => (
      <div style={{ width: 300, height: 400, background: '#141414' }}>
        <S />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FlyoutEmptyState>;

export const Default: Story = {
  args: { label: 'Home' },
};

export const Audio: Story = {
  args: { label: 'Audio' },
};
