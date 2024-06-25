import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Dropdown, { DropdownProps } from './Dropdown';
export default {
  title: 'Example/Dropdown',
  component: Dropdown,
} as Meta;
const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: 'Default Label',
  options: ['Monthly', 'Weekly', 'Daily'],
};