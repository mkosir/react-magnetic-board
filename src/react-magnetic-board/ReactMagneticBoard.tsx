import React, { FC, useEffect, useRef, useState, MouseEvent } from 'react';

import { Props, Magnet } from './types';
import { defaultProps } from './defaultProps';
import { useMagneticCanvas } from './features/magnetic-canvas/useMagneticCanvas';
import { useClear } from './features/useClear';
import { useUndo } from './features/useUndo';
import { useOnMagnetChange } from './features/useOnMagnetChange';

const ReactMagneticBoard: FC<Props> = ({
  magnet,
  width,
  height,
  className,
  style,
  initMagnets,
  onMagnetChange,
  onUndo,
  onClear,
}) => {
  const [magnets, setMagnets] = useState<Magnet[]>(initMagnets!);
  const isInitialRender = useRef(true);

  const [canvasRef] = useMagneticCanvas(magnets);

  if (onMagnetChange !== undefined) {
    useOnMagnetChange(isInitialRender.current, onMagnetChange, magnets);
  }

  if (onUndo !== undefined) {
    useUndo(isInitialRender.current, onUndo, setMagnets, magnets);
  }

  if (onClear !== undefined) {
    useClear(isInitialRender.current, onClear, setMagnets);
  }

  useEffect(() => {
    isInitialRender.current = false;
  }, []);

  function addMagnet(event: MouseEvent<HTMLCanvasElement>) {
    if (!magnet || !magnet.path) {
      return;
    }
    const newMagnet = { ...magnet };
    newMagnet.x = magnet.x ? magnet.x : event.clientX;
    newMagnet.y = magnet.y ? magnet.y : event.clientY;
    setMagnets(prevMagnets => [...prevMagnets, newMagnet]);
  }

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={style}
      width={width}
      height={height}
      onClick={addMagnet}
    />
  );
};

ReactMagneticBoard.defaultProps = defaultProps;

export default ReactMagneticBoard;
