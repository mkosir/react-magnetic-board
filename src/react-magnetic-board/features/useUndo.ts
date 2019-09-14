import React, { useEffect } from 'react';

import { Magnet } from '../types';

export function useUndo(
  isInitialRender: boolean,
  onUndo: boolean,
  setMagnets: React.Dispatch<React.SetStateAction<Magnet[]>>,
  magnets: Magnet[],
): void {
  useEffect(() => {
    if (isInitialRender) {
      return;
    }
    setMagnets(magnets.slice(0, -1));
  }, [onUndo]);
}
