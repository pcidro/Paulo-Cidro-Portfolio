
import "../css/switch.css";

type switchProps = {
  onChange: () => void;
  checked: boolean;
};

const Switch = ({ onChange, checked }: switchProps) => {
  return (
    <label className="switch">
      <input checked={checked} type="checkbox" onChange={onChange} />
      <span className="slider" />
    </label>
  );
};

export default Switch;
