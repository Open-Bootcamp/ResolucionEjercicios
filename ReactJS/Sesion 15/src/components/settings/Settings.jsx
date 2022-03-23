import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

const defaultConfig = {
    theme: 'dark',
    lang: 'es',
};

export default function Settings() {
    const [config, setConfig] = useLocalStorage('config', defaultConfig);

    const handleClick = (event) => {
        event.preventDefault();
        setConfig((oldConfig) => (
            {
            ...oldConfig,
            theme: 'light',
            }));
    };

    return (
      <div>
        <h1>APP SETTINGS</h1>
        <p>
          Actual Config:
          { config }
        </p>
        <button type="button" onClick={handleClick}>
          Save New Settings
        </button>
      </div>
    );
}
