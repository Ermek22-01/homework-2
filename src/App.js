 import React, { useState } from 'react';

const App = () => {
  const [squareColor1, setSquareColor1] = useState('red');
  const [squareColor2, setSquareColor2] = useState('blue');

  const swapColors = () => {
    setSquareColor1(squareColor2);
    setSquareColor2(squareColor1);
  };

  return (
      <div>
        <div
            style={{ width: '100px', height: '100px', backgroundColor: squareColor1 }}
            onClick={swapColors}
        ></div>
        <div
            style={{ width: '100px', height: '100px', backgroundColor: squareColor2 }}
            onClick={swapColors}
        ></div>
      </div>
  );
};

export default App;
