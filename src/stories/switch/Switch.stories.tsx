import type { Meta, StoryObj } from "@storybook/react";
import {Switch, Props } from "./Switch";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const meta: Meta<typeof Switch> = {
  component: Switch,
  title: "Example/Switch",
  argTypes: {},
  tags: ["autodocs"],
  parameters:{
    layout:"centered"
  }
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    variant: "Basic",
    disabled:true,
    withIcon1:true,
    icon:AddIcon
  },
};
export const withText: Story = {
  args: {
    placeholder: "text",
    placeholder1: "text",
    variant: "withText",
    withIcon1:true,
   icon:AddIcon
  },
};
export const withIcon: Story = {
    args: {
      variant: "withIcon",
      withIcon1:false,
      icon:AddIcon,
      icon1:RemoveIcon
    },
  };

