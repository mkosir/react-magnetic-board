export interface Props {
  /**
   * Magnet resource.
   */
  magnet?: Magnet;

  /**
   * Magnetic Board width.
   */
  width?: number;

  /**
   * Magnetic Board height.
   */
  height?: number;

  /**
   * Class name.
   */
  className?: string;

  /**
   * Initialize magnets.
   */
  initMagnets?: Magnet[];

  /**
   * Inverting 'onUndo' prop value triggers undo command.
   */
  onUndo?: boolean;

  /**
   * Inverting 'onClear' prop value clears the board.
   */
  onClear?: boolean;

  /**
   * Gets triggered when user changes magnet(s) on the component.
   */
  onMagnetChange?: (magnets: Magnet[]) => void;
}

export type Magnet = {
  path: string;
  scale?: number;
  offsetX?: number;
  offsetY?: number;
  fillStyle?: string;
  shadowColor?: string;
  shadowBlur?: number;
  x?: number;
  y?: number;
};
