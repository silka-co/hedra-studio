import type { FC } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './FlyoutEmptyState.module.css';

export interface FlyoutEmptyStateProps {
  /** Section label shown in the placeholder message (e.g. "Home"). */
  label: string;
}

/**
 * Generic placeholder rendered inside a flyout panel when the section
 * has no specific content component yet.
 */
export const FlyoutEmptyState: FC<FlyoutEmptyStateProps> = ({ label }) => (
  <div className={styles.root}>
    <Icon name="layers" size={32} strokeWidth={1.2} />
    <span className={styles.message}>{label} content goes here</span>
  </div>
);
