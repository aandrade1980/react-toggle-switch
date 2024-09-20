import { KeyboardEvent } from 'react';
import './ToggleSwitch.scss';

export default function ToggleSwitch({
  name,
  checked,
  onChange,
  label = { yes: 'yes', no: 'no' },
  small = false,
  disable
}: {
  name: string;
  checked: boolean;
  onChange: ({ id, value }: { id: string; value: boolean }) => void;
  label?: { yes: string; no: string };
  small?: boolean;
  disable?: boolean;
}) {
  const handleKeyPress = (e: KeyboardEvent<HTMLLabelElement>) => {
    const { key } = e;

    // User press space bar or enter
    if (key === ' ' || key === 'Enter') {
      e.preventDefault();
      onChange({ id: name, value: !checked });
    }
  };

  return (
    <div className={`toggle-switch ${small ? 'small-switch' : ''}`}>
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={e => onChange({ id: name, value: e.target.checked })}
        disabled={disable}
      />
      <label
        className="toggle-switch-label"
        htmlFor={name}
        tabIndex={disable ? -1 : 1}
        onKeyDown={handleKeyPress}
      >
        <span
          className="toggle-switch-inner"
          data-yes={label.yes}
          data-no={label.no}
        />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
}
