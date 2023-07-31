import type { Meta, StoryObj } from '@storybook/react';
import Wave from './index';

const meta = {
  title: 'Component/Wave',
  component: Wave,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Wave>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopWave: Story = {
  args: {
    color: "green",
    direction: "top",
  },
};

