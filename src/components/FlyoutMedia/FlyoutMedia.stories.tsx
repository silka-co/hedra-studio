import type { Meta, StoryObj } from '@storybook/react';
import { FlyoutMedia } from './FlyoutMedia';

const meta: Meta<typeof FlyoutMedia> = {
  title: 'Flyout/FlyoutMedia',
  component: FlyoutMedia,
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
type Story = StoryObj<typeof FlyoutMedia>;

export const Default: Story = {};
