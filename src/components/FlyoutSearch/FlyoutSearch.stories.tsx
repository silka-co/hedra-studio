import type { Meta, StoryObj } from '@storybook/react';
import { FlyoutSearch } from './FlyoutSearch';

const meta: Meta<typeof FlyoutSearch> = {
  title: 'Flyout/FlyoutSearch',
  component: FlyoutSearch,
  parameters: { backgrounds: { default: 'surface' } },
  decorators: [
    (S) => (
      <div style={{ width: 300, background: '#141414' }}>
        <S />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FlyoutSearch>;

export const Default: Story = {};
