import React, { useState } from 'react';
import './Dropdown.scss';
export interface DropdownProps {
  label: string;
  options: string[];
}
const Dropdown: React.FC<DropdownProps> = ({ label, options }) => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="dropdown">
      <label className="dropdown-label">{label}</label>
      <select 
        className="dropdown-select" 
        value={selected} 
        onChange={e => setSelected(e.target.value)}
      >
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;