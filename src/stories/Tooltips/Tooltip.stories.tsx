import { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: "Components/Tooltip",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    label: "Success Text Tooltip Text",
    paragraph: "",
    Success: true,
    variant: "Success",
  },
};
export const Information: Story = {
  args: {
    label: "Info text Tooltip Text ",
    Information: true,
    paragraph: "",
    variant: "Information",
  },
};
export const WarninG: Story = {
  args: {
    label: "Warning Text Tooltip Text",
    WarninG: true,
    paragraph: "",
    variant: "WarninG",
  },
};
export const Error: Story = {
  args: {
    label: "Error Text Tooltip Text",
    Error: true,
    paragraph: "",
    variant: "Error",
  },
};
export const Genral: Story = {
  args: {
    label: "Genral Text Tooltip Text",
    Genral: true,
    paragraph: "",
    variant: "Genral",
  },
};
