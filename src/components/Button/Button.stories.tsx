import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  decorators: [
    (Story) => (
      <div className="flex gap-5">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
export const Fill: Story = {
  render: () => (
    <>
      <Button intent="primary">Solid</Button>
      <Button intent="secondary">Outline</Button>
      <Button intent="tertiary">None</Button>
    </>
  ),
  name: "Kinds",
};

export const Primary: Story = {
  args: {
    intent: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    intent: "secondary",
    children: "Button",
  },
};

export const Tertiary: Story = {
  args: {
    intent: "tertiary",
    children: "Button",
  },
};
