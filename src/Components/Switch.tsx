import React from "react";
import "../css/switch.css";

type switchProps = {
  checked: boolean;
  onChange: () => void;
};

const Switch = ({ checked, onChange }: switchProps) => {
  return (
    <div className="switch">
      <input
        checked={checked}
        id="toggle"
        type="checkbox"
        onChange={onChange}
      />
      <label className="toggle" htmlFor="toggle">
        <i />
      </label>
    </div>
  );
};

export default Switch;
