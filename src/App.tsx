import { useState } from 'react';
import ToggleSwitch from './toggle-switch/ToggleSwitch';

import './App.css';

function App() {
  const [switchData, setSwitchData] = useState({
    newsletter: { checked: false },
    daily: { checked: false }
  });

  const onChangeSwitch = ({ id, value }: { id: string; value: boolean }) => {
    const currentData = { ...switchData };

    currentData[id as keyof typeof switchData].checked = value;

    setSwitchData(currentData);
  };

  return (
    <>
      <ToggleSwitch
        name="newsletter"
        label={{ yes: 'yes', no: 'no' }}
        checked={switchData['newsletter'].checked}
        onChange={onChangeSwitch}
      />
      <ToggleSwitch
        name="daily"
        label={{ yes: 'Si', no: 'Nop' }}
        checked={switchData['daily'].checked}
        onChange={onChangeSwitch}
      />
      {/* 
      <ToggleSwitch name="weekly" small /> */}
      {/* 
      <ToggleSwitch name="monthly" />  */}
    </>
  );
}

export default App;
