import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Components/Checkbox",
  tags:["autodocs"],
  parameters:{
    layout:"centered"
  }

};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label:"Enter label",
    default:true,
  },
};
export const Pressed: Story = {
  args: {
    label:"Enter label",
    pressed:true,
  
  },
};
export const Disabled: Story = {
  args: {
    label:"Enter label",
    disabled:true,
  },
};
