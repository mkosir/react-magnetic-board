import React, { useState } from 'react';

import MagneticBoard from '../../src';
import './UndoClear.scss';

const circleMagnetSVG = 'M 100, 100  m -75, 0  a 75,75 0 1,0 150,0  a 75,75 0 1,0 -150,0';

const UndoClear = () => {
  const [undoTrigger, setUndo] = useState(false);
  const [clearTrigger, setClear] = useState(false);

  const onUndo = () => {
    // Invert value passed to 'onUndo' prop to trigger undo command.
    setUndo(undoTrig => !undoTrig);
  };

  const onClear = () => {
    // Invert value passed to 'onClear' prop to trigger clear command.
    setClear(clearTrig => !clearTrig);
  };

  return (
    <div className="undo-clear">
      <div className="border">
        <MagneticBoard
          magnet={{
            path: circleMagnetSVG,
            scale: 0.25,
            offsetX: 100,
            offsetY: 90,
            fillStyle: '#d93030',
            shadowColor: '#bf2626',
            shadowBlur: 5,
          }}
          onUndo={undoTrigger}
          onClear={clearTrigger}
        />
      </div>
      <div className="buttons">
        <button onClick={onUndo}>Undo</button>
        <button onClick={onClear}>Clear</button>
      </div>
    </div>
  );
};

export default UndoClear;
