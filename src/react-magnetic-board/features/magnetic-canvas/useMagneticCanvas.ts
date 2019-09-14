import { useEffect, useRef, RefObject } from 'react';

import { Magnet } from '../../types';
import { draw } from './draw';

export function useMagneticCanvas(magnets: Magnet[]): [RefObject<HTMLCanvasElement>] {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas!.getContext('2d');
    if (!ctx) {
      return;
    }
    const canvasRect = canvas!.getBoundingClientRect();
    draw(ctx, canvasRect, magnets);
  }, [magnets]);
  return [canvasRef];
}
