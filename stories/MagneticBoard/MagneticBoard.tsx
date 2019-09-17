import React from 'react';

import MagneticBoard from '../../src';
import './MagneticBoard.scss';

const circleMagnetSVG = 'M 100, 100  m -75, 0  a 75,75 0 1,0 150,0  a 75,75 0 1,0 -150,0';

const Default = () => (
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
      width={600}
      height={500}
    />
  </div>
);

export default Default;
