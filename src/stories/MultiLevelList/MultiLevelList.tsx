import React from 'react';
import './MultiLevelList.css';

interface ListItem {
  label: string;
  children?: ListItem[];
}

export interface MultiLevelListProps {
  items: ListItem[];
}

const MultiLevelList: React.FC<MultiLevelListProps> = ({ items }) => {
  const renderList = (items: ListItem[]) => (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.label}
          {item.children && renderList(item.children)}
        </li>
      ))}
    </ul>
  );

  return <div>{renderList(items)}</div>;
};

export default MultiLevelList;
