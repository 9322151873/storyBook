import type { Meta, StoryObj } from "@storybook/react";
import { Nav, Props } from "./Nav";
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const meta: Meta<typeof Nav> = {
  component: Nav,
  title: "Example/Nav",
  argTypes: {},
  tags: ["autodocs"],
  parameters:{
    layout:"centered"
  }
};
export default meta;

type Story = StoryObj<typeof meta>;

//Props

export const Default: Story = {
  args: {
    placeholder: "Success text Tooltip Text",
    variant: "Classic",
    icons:HomeIcon,
    icon2:AccountCircleIcon,
    icon3: ChevronRightIcon,
project :"Projects",
user :"User",
role :"roles",
results:"Reasults"
  },
};
export const Classic: Story = {
  args: {
    placeholder: "Success text Tooltip Text",
    variant: "Classic",
    icons:HomeIcon,
    icon2:AccountCircleIcon,
    icon3: ChevronRightIcon,
project :"Projects",
user :"User",
role :"roles",
results:"Reasults"
  },
};




