import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('#000000');

  const [manageInterval, setManageInterval] = useState(0);
  const [doubleClick, setDoubleClick] = useState(0);

  const getColor = () => Math.floor(Math.random() * 256);

  const getHex = (red, green, blue) => {
    return (
      '#' +
      [red, green, blue]
        .map((c) => {
          const hex = c.toString(16);
          return hex.lenght === 1 ? '0' + hex : hex;
        })
        .join('')
    );
  };

  const generateHex = () => {
    const rgb = {
      r: getColor(),
      g: getColor(),
      b: getColor(),
    };
    return setColor(getHex(rgb.r, rgb.g, rgb.b));
  };

  const onChangeColor = () => {
    return setManageInterval(setInterval(generateHex, 500));
  };

  const onStopChangeColor = () => {
    return clearInterval(manageInterval);
  };

  const onClickChangeColor = () => {
    return clearInterval(manageInterval);
  };

  return (
    <div className="App" style={{ margin: 'auto' }}>
      <div
        id="square"
        onMouseOver={onChangeColor}
        onMouseLeave={onStopChangeColor}
        onDoubleClick={onClickChangeColor}
        style={{ width: '255px', height: '255px', backgroundColor: color, margin: 'auto' }}
      ></div>{' '}
      <p style={{ color: 'black' }}>Color: {color} </p>
    </div>
  );
}

export default App;
