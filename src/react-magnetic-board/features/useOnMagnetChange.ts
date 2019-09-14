import { useEffect } from 'react';

import { Magnet } from '../types';

export function useOnMagnetChange(
  isInitialRender: boolean,
  onMagnetChange: (magnets: Magnet[]) => void,
  magnets: Magnet[],
): void {
  useEffect(() => {
    if (isInitialRender) {
      return;
    }
    onMagnetChange(magnets);
  }, [magnets]);
}
