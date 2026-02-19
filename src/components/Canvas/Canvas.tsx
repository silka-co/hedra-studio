import type { FC } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './Canvas.module.css';

export interface CanvasProps {
  /**
   * CSS aspect-ratio value controlling the canvas frame dimensions.
   * Format: `"w/h"`, e.g. `"16/9"` or `"1/1"`.
   */
  aspectRatio: string;
}

/**
 * The main editing canvas area. Renders a subtle dot-grid background and a
 * centred frame whose aspect ratio animates when the user switches formats.
 */
export const Canvas: FC<CanvasProps> = ({ aspectRatio }) => {
  const [w, h] = aspectRatio.split('/').map(Number);

  return (
    <main className={styles.canvas}>
      {/* Subtle grid overlay */}
      <div className={styles.grid} aria-hidden="true" />

      {/* Canvas frame */}
      <div
        className={styles.frame}
        style={{ aspectRatio: `${w} / ${h}` }}
        aria-label={`${w}:${h} canvas`}
      >
        <Icon name="film" size={36} strokeWidth={1} />
        <span className={styles.frameLabel}>{w}:{h} Canvas</span>
        <span className={styles.frameHint}>Drop media here to begin</span>
      </div>
    </main>
  );
};
