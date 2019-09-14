import React, { useEffect } from 'react';

import { Magnet } from '../types';

export function useClear(
  isInitialRender: boolean,
  onClear: boolean,
  setMagnets: React.Dispatch<React.SetStateAction<Magnet[]>>,
): void {
  useEffect(() => {
    if (isInitialRender) {
      return;
    }
    setMagnets([]);
  }, [onClear]);
}
