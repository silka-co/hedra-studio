import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatioDropdown } from './AspectRatioDropdown';

const meta: Meta<typeof AspectRatioDropdown> = {
  title: 'Components/AspectRatioDropdown',
  component: AspectRatioDropdown,
  parameters: { backgrounds: { default: 'surface' } },
};

export default meta;
type Story = StoryObj<typeof AspectRatioDropdown>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('16/9');
    return <AspectRatioDropdown {...args} value={value} onChange={setValue} />;
  },
  decorators: [
    (S) => (
      <div style={{ padding: 24, display: 'flex', justifyContent: 'center' }}>
        <S />
      </div>
    ),
  ],
};

export const AllRatios: Story = {
  render: () => {
    const [value, setValue] = useState('4/3');
    return (
      <div style={{ padding: 24 }}>
        <AspectRatioDropdown value={value} onChange={setValue} />
        <p style={{ marginTop: 12, fontSize: 11, color: '#6b6b6b', fontFamily: 'monospace' }}>
          selected: {value}
        </p>
      </div>
    );
  },
};
