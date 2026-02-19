import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Canvas } from './Canvas';
import { ASPECT_RATIOS } from '../../constants/navigation';

const meta: Meta<typeof Canvas> = {
  title: 'Layout/Canvas',
  component: Canvas,
  argTypes: {
    aspectRatio: {
      control: 'select',
      options: ASPECT_RATIOS.map((r) => r.value),
    },
  },
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Canvas>;

export const Widescreen: Story = {
  args: { aspectRatio: '16/9' },
};

export const Square: Story = {
  args: { aspectRatio: '1/1' },
};

export const Portrait: Story = {
  args: { aspectRatio: '9/16' },
};

/** Cycle through all ratios to see the transition. */
export const Interactive: Story = {
  render: () => {
    const [index, setIndex] = useState(0);
    const ratio = ASPECT_RATIOS[index];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <div style={{ padding: '8px 16px', display: 'flex', gap: 8, background: '#141414', borderBottom: '1px solid #ffffff08' }}>
          {ASPECT_RATIOS.map((r, i) => (
            <button
              key={r.value}
              onClick={() => setIndex(i)}
              style={{
                background: i === index ? '#ffffff1a' : 'transparent',
                border: '1px solid',
                borderColor: i === index ? '#ffffff1a' : 'transparent',
                borderRadius: 4,
                color: '#f0f0f0',
                fontSize: 11,
                padding: '4px 8px',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              {r.label}
            </button>
          ))}
        </div>
        <Canvas aspectRatio={ratio.value} />
      </div>
    );
  },
};
