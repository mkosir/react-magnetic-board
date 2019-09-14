import React, { useState, useEffect } from 'react';

import ReactMagneticBoard from '../../src';
import './PersistentMagnets.scss';

const magnetSVG =
  'm294.18 450.89c112.45 0 198.11-95.137 206.99-223.43 5.0848-73.49-2.9544-149.56-34.967-214.24-8.4029-5.4128-32.662 0-42.198 0-8.8888 0-31.381-5.1679-36.572 6.6964-8.6217 19.677 0.40872 52.028 3.5208 72.143 5.0849 32.907 8.6314 64.46 6.2918 97.949-3.3953 48.552-18.968 91.019-63.567 102.07-38.014 9.4009-94.215 9.3342-123.11-25.828-32.212-39.177-29.045-108.23-19.857-156.75 4.821-25.476 17.884-60.509 11.937-86.812-3.5498-15.712-30.162-9.7756-40.193-9.9092-14.154-0.20404-41.915-8.1989-49.13 7.4161-17.591 38.019-27.996 78.75-31.6 121.62-6.6844 79.518 1.0588 161.26 47.312 224.34 40.721 55.534 102.63 84.738 165.15 84.738';

function useLocalStorage<T>(
  key: string,
  initialValue: T = null,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(JSON.parse(localStorage.getItem(key)) || initialValue);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  });
  return [value, setValue];
}

const PersistentMagnets = () => {
  const [magnets, setMagnets] = useLocalStorage<any[]>('react-magnetic-board', []);

  return (
    <div className="border">
      <ReactMagneticBoard
        magnet={{
          path: magnetSVG,
          scale: 0.25,
          offsetX: 290,
          offsetY: 180,
          fillStyle: '#d93030',
          shadowColor: '#bf2626',
          shadowBlur: 35,
        }}
        initMagnets={magnets}
        onMagnetChange={setMagnets}
      />
    </div>
  );
};

export default PersistentMagnets;
