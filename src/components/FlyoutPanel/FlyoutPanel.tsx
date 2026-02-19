import type { FC, MouseEventHandler } from 'react';
import { Icon } from '../Icon/Icon';
import { FLYOUT_CONTENT } from '../../constants/flyoutContent';
import type { NavItem } from '../../constants/navigation';
import styles from './FlyoutPanel.module.css';

export interface FlyoutPanelProps {
  /**
   * The nav item whose content should be rendered.
   * When `null` the panel is still mounted but hidden (for smooth transitions).
   */
  item: NavItem | null;
  /** Controls whether the panel is slid into view. */
  isOpen: boolean;
  /** Fired when the pointer enters the panel — used to cancel the close timer. */
  onMouseEnter: MouseEventHandler<HTMLDivElement>;
  /** Fired when the pointer leaves the panel — triggers the close timer. */
  onMouseLeave: MouseEventHandler<HTMLDivElement>;
}

/**
 * Animated side panel that slides in from behind the sidebar rail.
 * Width is driven by `item.flyoutSize` via a `data-size` attribute
 * and matching CSS custom property assignments.
 */
export const FlyoutPanel: FC<FlyoutPanelProps> = ({ item, isOpen, onMouseEnter, onMouseLeave }) => {
  const ContentComponent = item ? FLYOUT_CONTENT[item.id] : null;

  return (
    <div
      className={[styles.panel, isOpen ? styles.open : ''].join(' ')}
      data-size={item?.flyoutSize ?? 'md'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Header */}
      {item && (
        <div className={styles.header}>
          <span className={styles.headerTitle}>{item.label}</span>
          <span className={styles.helpIcon} aria-label="Help">
            <Icon name="help" size={14} />
          </span>
        </div>
      )}

      {/* Body */}
      <div className={styles.body}>
        {ContentComponent && <ContentComponent />}
      </div>
    </div>
  );
};
