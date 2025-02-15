import type { Meta, StoryObj } from "@storybook/react";
import { Tooltips } from "./Tooltips";
declare const meta: Meta<typeof Tooltips>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Success: Story;
export declare const Warning: Story;
export declare const Information: Story;
export declare const Error: Story;
