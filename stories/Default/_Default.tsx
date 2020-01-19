import React from 'react';

import doctabTemplate from 'story-tab-react';
import Demo from './Default.doctab';

const code = `import React from 'react';

import MagneticBoard from '../../src';

const circleMagnetSVG = 'M 100, 100  m -75, 0  a 75,75 0 1,0 150,0  a 75,75 0 1,0 -150,0';

const Default = () => (
  <MagneticBoard
    magnet={{
      path: circleMagnetSVG,
      scale: 0.2,
      offsetX: 150,
      offsetY: 120,
      fillStyle: '#c02323',
      shadowColor: '#bf2626',
      shadowBlur: 5,
    }}
    width={500}
    height={400}
    style={{ border: '10px solid #d8dce0', borderRadius: '10px' }}
  />
);

export default Default;
`;

const _Default = () => (
  <doctabTemplate code={code} codeExt="tsx">
    <Demo />
  </doctabTemplate>
);

export default _Default;
