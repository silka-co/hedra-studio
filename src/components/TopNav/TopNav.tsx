import type { FC } from 'react';
import { Icon } from '../Icon/Icon';
import { AspectRatioDropdown } from '../AspectRatioDropdown/AspectRatioDropdown';
import styles from './TopNav.module.css';

export interface TopNavProps {
  /** Currently selected canvas aspect ratio, passed through to the dropdown. */
  aspectRatio: string;
  /** Called when the user picks a new aspect ratio. */
  onAspectRatioChange: (value: string) => void;
}

/**
 * Full-width top navigation bar containing the app logo, the aspect-ratio
 * dropdown in the centre, and Export + avatar actions on the right.
 */
export const TopNav: FC<TopNavProps> = ({ aspectRatio, onAspectRatioChange }) => (
  <header className={styles.topNav}>
    {/* Left — logo + project name */}
    <div className={styles.left}>
      <div className={styles.logo} aria-label="Hedra Studio">
        V
      </div>
      <span className={styles.projectName}>Untitled Project</span>
    </div>

    {/* Centre — aspect ratio control */}
    <div className={styles.centre}>
      <AspectRatioDropdown value={aspectRatio} onChange={onAspectRatioChange} />
    </div>

    {/* Right — export + avatar */}
    <div className={styles.right}>
      <button className={styles.exportBtn} type="button">
        Export
      </button>
      <div className={styles.avatar} aria-label="User menu">
        <Icon name="user" size={14} />
      </div>
    </div>
  </header>
);
