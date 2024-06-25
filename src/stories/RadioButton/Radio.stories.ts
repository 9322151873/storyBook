import { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";



const meta: Meta<typeof Radio> = {
  component: Radio,
  title: "Example/Radio",
  tags: ["autodocs"],
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "enter label",
    value: 'option1',
   
  },
};
export const Disabled: Story = {
  args: {
    label: "enter label",
    disabled: true,
    // value: 'option1',
   
  },
};

export const Pressed: Story = {
  args: {
    label: "enter label",
    value:"option3",
    pressed:true,
   
}
}
