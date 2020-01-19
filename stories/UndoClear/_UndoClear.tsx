import React from 'react';

import doctabTemplate from 'story-tab-react';
import Demo from './UndoClear.doctab';

const code = `import React, { useState } from 'react';

import MagneticBoard from '../../src';
import './UndoClear.doctab.scss';

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
            fillStyle: '#c02323',
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
`;

const style = `.undo-clear {
  .border {
    border: 10px solid #d8dce0;
    border-radius: 10px;
  }

  .buttons {
    margin-top: 10px;

    button {
      font-size: 16px;
      margin: 5px;
    }
  }
}
`;

const _UndoClear = () => (
  <doctabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </doctabTemplate>
);

export default _UndoClear;
