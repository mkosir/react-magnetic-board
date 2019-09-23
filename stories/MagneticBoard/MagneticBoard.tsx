import React, { useState } from 'react';

import MagneticBoard from '../../src';
import './MagneticBoard.scss';

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
