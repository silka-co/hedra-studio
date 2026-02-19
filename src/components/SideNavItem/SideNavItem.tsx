import type { FC, MouseEventHandler } from 'react';
import { Icon, type IconName } from '../Icon/Icon';
import { tokens } from '../../tokens/tokens';
import styles from './SideNavItem.module.css';

export interface SideNavItemProps {
  /** The nav item data to render. */
  item: { id: string; label: string; icon: string };
  /**
   * True when the flyout panel for this item is open.
   * Controlled externally so hover state can be shared with the flyout.
   */
  isHovered: boolean;
  /** True when this item is the currently selected/active section. */
  isActive: boolean;
  /** Fired when the pointer enters the item. */
  onMouseEnter: MouseEventHandler<HTMLDivElement>;
  /** Fired when the pointer leaves the item. */
  onMouseLeave: MouseEventHandler<HTMLDivElement>;
  /** Fired when the item is clicked to set it as active. */
  onClick: MouseEventHandler<HTMLDivElement>;
}

/**
 * A single icon + label button in the sidebar rail.
 * Renders an accent indicator bar on the left edge when active.
 */
export const SideNavItem: FC<SideNavItemProps> = ({
  item,
  isHovered,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  const cls = [
    styles.navItem,
    isActive ? styles.active : '',
    !isActive && isHovered ? styles.hovered : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={cls}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
    >
      {isActive && <span className={styles.indicator} aria-hidden="true" />}

      <Icon
        name={item.icon as IconName}
        size={tokens.sidebar.iconSize}
        strokeWidth={isActive ? 1.8 : 1.5}
      />
      <span className={styles.label}>{item.label}</span>
    </div>
  );
};
