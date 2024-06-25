import React from 'react';
import { Meta, Story } from '@storybook/react';
import MultiLevelList, { MultiLevelListProps } from './MultiLevelList';
import './MultiLevelList.css';

export default {
  title: 'Components/MultiLevelList',
  component: MultiLevelList,
} as Meta;

const Template: Story<MultiLevelListProps> = (args) => <MultiLevelList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      label: 'Item 1',
      children: [
        { label: 'Item 1.1' },
        {
          label: 'Item 1.2',
          children: [
            { label: 'Item 1.2.1' },
            { label: 'Item 1.2.2' },
          ],
        },
      ],
    },
    { label: 'Item 2' },
    {
      label: 'Item 3',
      children: [
        { label: 'Item 3.1' },
        { label: 'Item 3.2' },
      ],
    },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  items: [],
};
