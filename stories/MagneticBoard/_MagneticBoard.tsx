import React from 'react';

import StoryTabTemplate from 'story-tab-react';
import Demo from './MagneticBoard.storytab';

const code = `import React, { useState } from 'react';

import MagneticBoard from '../../src';
import './MagneticBoard.storytab.scss';

const circleMagnetSVG = 'M 100, 100  m -75, 0  a 75,75 0 1,0 150,0  a 75,75 0 1,0 -150,0';
enum MagnetColors {
  RED = '#c02323',
  BLUE = '#200fb6',
  YELLOW = '#d1bf17',
}

const Default = () => {
  const [magnetColor, setMagnetColor] = useState(MagnetColors.RED);

  return (
    <div className="magnetic-board">
      <div className="border">
        <MagneticBoard
          magnet={{
            path: circleMagnetSVG,
            scale: 0.15,
            offsetX: 100,
            offsetY: 90,
            fillStyle: magnetColor,
            shadowBlur: 5,
          }}
          width={500}
          height={400}
        />
      </div>
      <div className="magnet-selection">
        <button
          id="red"
          style={{
            backgroundColor: MagnetColors.RED,
            padding: MagnetColors.RED === magnetColor ? '16px' : '13px',
          }}
          onClick={() => setMagnetColor(MagnetColors.RED)}
        />
        <button
          id="blue"
          style={{
            backgroundColor: MagnetColors.BLUE,
            padding: MagnetColors.BLUE === magnetColor ? '16px' : '13px',
          }}
          onClick={() => setMagnetColor(MagnetColors.BLUE)}
        />
        <button
          id="yellow"
          style={{
            backgroundColor: MagnetColors.YELLOW,
            padding: MagnetColors.YELLOW === magnetColor ? '16px' : '13px',
          }}
          onClick={() => setMagnetColor(MagnetColors.YELLOW)}
        />
      </div>
    </div>
  );
};

export default Default;
`;

const style = `.magnetic-board {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .border {
    border: 35px solid transparent;
    border-image: url('./assets/border.png') 24 30 28 26 fill repeat;
  }

  .magnet-selection {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;

    button {
      border: none;
      border-radius: 50%;
      color: white;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 8px;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        transform: translateY(-5px);
      }
    }
  }
}
`;

const _MagneticBoard = () => (
  <StoryTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </StoryTabTemplate>
);

export default _MagneticBoard;
